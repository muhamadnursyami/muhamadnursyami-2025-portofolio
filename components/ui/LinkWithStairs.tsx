"use client";
import React from "react";
import Link from "next/link";
import { useStairs } from "@/components/transitions/StairsProvider";

// sesuaikan offset navbar
const NAV_OFFSET = 80;

type Props = React.ComponentProps<typeof Link> & { href: string };

export function LinkWithStairs({ href, onClick, ...rest }: Props) {
  const { coverThenNavigate, coverThen } = useStairs();
  const isHash = href.startsWith("#");

  return (
    <Link
      href={href}
      onClick={async (e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || rest.target === "_blank") {
          onClick?.(e);
          return;
        }
        if (isHash) {
          e.preventDefault();
          const id = href.slice(1);
          const el = document.getElementById(id);
          if (!el) return;
          await coverThen(() => {
            const y = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
            window.scrollTo({ top: Math.max(0, y), behavior: "auto" }); // scroll instant di balik overlay
            try { window.history.pushState({}, "", href); } catch {}
          });
          return;
        }
        e.preventDefault();
        await coverThenNavigate(href);
      }}
      {...rest}
    />
  );
}
