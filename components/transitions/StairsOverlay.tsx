"use client";
import React, { useLayoutEffect, useMemo, useRef, useState, useEffect } from "react";
import { motion, useAnimationControls, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import { useStairs } from "./StairsProvider";

// ===============================
// Neo-brutalist Stairs Overlay (blue-only, smoother, with HUD)
// ===============================

// ⚙️ Tuning – lebih smooth & lama
const STEPS = 5;               // FIX: 5 bar di semua ukuran
const DURATION = 1.35;         // durasi gerak tiap bar
const PER_BAR_DELAY = 0.14;    // jeda antar bar (lebih pelan)
const EASE = [0.2, 0.9, 0.2, 1] as const; // smooth cubic-bezier

// 🎨 Warna tunggal (biru brand)
const BAR_COLOR = "#5294ff";
const BAR_STROKE = "#0b1222";   // outline tebal neo-brutal (gelap)
const HUD_BG = "rgba(12,18,34,0.35)"; // glassy gelap

// 📝 Kata per bar (sesuai permintaan)
const WORDS = [
  "welome",
  "to",
  "my",
  "website",
  "portofolio",
] as const;

// Helper delay (satu arah kiri -> kanan untuk semua fase)
const ltrDelay = (i: number) => i * PER_BAR_DELAY;

// ⏳ Total cover (untuk progress HUD) — otomatis sesuai STEPS=5
const TOTAL_COVER = DURATION + PER_BAR_DELAY * (STEPS - 1);

type Phase = "idle" | "cover" | "reveal";

export function StairsOverlay() {
  const controls = useAnimationControls();
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState<Phase>("idle");
  const pathname = usePathname();
  const { registerPlayer } = useStairs();
  const firstMountRef = useRef(true);

  // Pastikan overlay menutup sebelum frame pertama
  useLayoutEffect(() => {
    controls.set("covered");
  }, [controls]);

  // API untuk provider (klik navbar / anchor)
  useEffect(() => {
    registerPlayer({
      playCover: async () => {
        setVisible(true);
        setPhase("cover");
        controls.set("fromBelow");
        await controls.start("cover");
      },
      playReveal: async () => {
        setPhase("reveal");
        await controls.start("reveal");
        setPhase("idle");
        setVisible(false);
      },
    });
  }, [controls, registerPlayer]);

  // First load & route change → reveal dari covered
  useEffect(() => {
    if (firstMountRef.current) {
      firstMountRef.current = false;
      controls.start("reveal").then(() => setVisible(false));
    } else {
      controls.start("reveal").then(() => setVisible(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // (Opsional) pause animasi global sementara overlay aktif
  useEffect(() => {
    const root = document.documentElement;
    if (visible) root.classList.add("stairs-active");
    else root.classList.remove("stairs-active");
  }, [visible]);

  const bars = useMemo(() => Array.from({ length: STEPS }), []);
  if (!visible) return null;

  return (
    <motion.div
      initial="covered"
      animate={controls}
      variants={{ covered: {}, cover: {}, reveal: {}, fromBelow: {} }}
      className="pointer-events-none fixed inset-0 z-[9999] grid"
      aria-hidden
      // background untuk menghindari celah saat outline / gap
      style={{
        backgroundColor: BAR_STROKE,
        // Responsif untuk semua ukuran: 5 kolom penuh lebar
        gridTemplateColumns: `repeat(${STEPS}, minmax(0, 1fr))`,
      }}
    >
      {bars.map((_, i) => (
        <motion.div
          key={i}
          className="relative flex items-center justify-center"
          style={{
            backgroundColor: BAR_COLOR,
            // Neo-brutal accents: outline tebal + drop shadow offset
            boxShadow: `8px 8px 0 ${BAR_STROKE}`,
            border: `3px solid ${BAR_STROKE}`,
          }}
          variants={barVariants}
          custom={i}
        >
          {/* Kata per bar */}
          {WORDS[i] && (
            <motion.span
                className="
                  pointer-events-none select-none uppercase font-extrabold text-black
                  tracking-[0.2em] max-[400px]:tracking-[0.1em] max-[340px]:tracking-[0.05em]
                  text-[clamp(9px,2.2vw,22px)] max-[360px]:text-[clamp(9px,3.2vw,18px)]
                  text-center leading-tight px-1
                  whitespace-normal break-words max-w-[92%] mx-auto
                "
                style={{
                  // faux outline untuk teks (neo-brutal)
                  textShadow:
                    "0 1px 0 rgba(0,0,0,0.35), 0 2px 0 rgba(0,0,0,0.25), 0 3px 0 rgba(0,0,0,0.15)",
                }}
                variants={textVariants}
                custom={i}
              >
              {WORDS[i]}
            </motion.span>
          )}

          {/* Pola titik halus (modern touch) */}
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                "radial-gradient(rgba(0,0,0,0.25) 1px, transparent 1px)",
              backgroundSize: "10px 10px",
              pointerEvents: "none",
            }}
          />
        </motion.div>
      ))}

      {/* HUD Loading saat fase cover */}
      <AnimatePresence>
        {phase === "cover" && (
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Badge + spinner */}
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="pointer-events-none select-none backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-2 shadow-[6px_6px_0_#0b1222]"
              style={{ background: HUD_BG, border: `2px solid ${BAR_STROKE}`, color: "#fff" }}
            >
              <motion.span
                className="inline-block h-3 w-3 rounded-full bg-white/90"
                animate={{ scale: [1, 1.25, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              />
              <span className="text-sm font-bold tracking-wide uppercase">Preparing transition</span>
            </motion.div>

            {/* Progress bar sinkron dengan total cover */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[64%] max-w-xl">
              <div
                className="h-2 rounded-full overflow-hidden shadow-[4px_4px_0_#0b1222]"
                style={{ background: "rgba(255,255,255,0.25)", border: `2px solid ${BAR_STROKE}` }}
              >
                <motion.div
                  className="h-full"
                  style={{ background: "#fff" }}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: TOTAL_COVER, ease: "linear" }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ===============================
// Variants (arah tunggal kiri -> kanan)
// ===============================
const barVariants = {
  covered: (_: number) => ({
    y: "0%",
    rotate: 0,
  }),
  fromBelow: (_: number) => ({ y: "100%", rotate: 0 }),
  // COVER: bar naik dari bawah, urut kiri -> kanan
  cover: (i: number) => ({
    y: "0%",
    rotate: (i % 2 ? -1.5 : 1.5),
    transition: {
      duration: DURATION,
      ease: EASE,
      delay: ltrDelay(i),
    },
  }),
  // REVEAL: bar lanjut naik (keluar), tetap kiri -> kanan
  reveal: (i: number) => ({
    y: "-100%",
    rotate: 0,
    transition: {
      duration: DURATION,
      ease: EASE,
      delay: ltrDelay(i),
    },
  }),
};

const textVariants = {
  covered: (_: number) => ({ opacity: 1, y: 0, filter: "blur(0px)" }),
  fromBelow: (_: number) => ({ opacity: 0, y: 12, filter: "blur(6px)" }),
  // Muncul sedikit setelah bar-nya, kiri -> kanan
  cover: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: EASE,
      delay: ltrDelay(i) + 0.08,
    },
  }),
  // Hilang tetap kiri -> kanan
  reveal: (i: number) => ({
    opacity: 0,
    y: -10,
    filter: "blur(6px)",
    transition: {
      duration: 0.55,
      ease: EASE,
      delay: ltrDelay(i) + 0.02,
    },
  }),
};

const pillVariants = {
  covered: (_: number) => ({ opacity: 1, scale: 1 }),
  fromBelow: (_: number) => ({ opacity: 0, scale: 0.9 }),
  // Kiri -> kanan
  cover: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: EASE, delay: ltrDelay(i) + 0.05 },
  }),
  // Kiri -> kanan (tetap satu arah)
  reveal: (i: number) => ({
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.35, ease: EASE, delay: ltrDelay(i) },
  }),
};
