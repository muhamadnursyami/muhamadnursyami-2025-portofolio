"use client";
import React, { createContext, useCallback, useContext, useRef } from "react";
import { useRouter } from "next/navigation";

export type StairsPlayer = {
  playCover: () => Promise<void>;
  playReveal: () => Promise<void>;
};

type StairsContextType = {
  coverThenNavigate: (href: string) => Promise<void>; // multi-page (tetap)
  coverThen: (fn: () => void | Promise<void>) => Promise<void>; // ⬅️ single-page (#id)
  playReveal: () => Promise<void>;
  registerPlayer: (player: StairsPlayer) => void;
};

const StairsContext = createContext<StairsContextType | null>(null);

export function StairsTransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const playerRef = useRef<StairsPlayer | null>(null);

  const registerPlayer = useCallback((p: StairsPlayer) => { playerRef.current = p; }, []);

  const coverThenNavigate = useCallback(async (href: string) => {
    if (!playerRef.current) return router.push(href);
    await playerRef.current.playCover();
    router.push(href);
  }, [router]);

  const coverThen = useCallback(async (fn: () => void | Promise<void>) => {
    if (!playerRef.current) return void fn();
    await playerRef.current.playCover();
    await fn();
    await playerRef.current.playReveal();
  }, []);

  const playReveal = useCallback(async () => {
    if (!playerRef.current) return;
    await playerRef.current.playReveal();
  }, []);

  return (
    <StairsContext.Provider value={{ coverThenNavigate, coverThen, playReveal, registerPlayer }}>
      {children}
    </StairsContext.Provider>
  );
}

export function useStairs() {
  const ctx = useContext(StairsContext);
  if (!ctx) throw new Error("useStairs must be used within StairsTransitionProvider");
  return ctx;
}
