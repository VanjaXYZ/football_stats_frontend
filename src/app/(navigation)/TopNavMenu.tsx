"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUserStore } from "@/store/UserStore";

const TopNavMenu = () => {
  const pathname = usePathname();
  const { user } = useUserStore() as any;

  return (
    pathname !== "/login" && (
      <div className="ms-auto flex gap-16 items-center font-bold">
        <Link
          href={"/"}
          className={
            pathname === "/"
              ? "underline underline-offset-4 text-white text-[12px] md:text-xl"
              : "text-white text-[12px] md:text-xl"
          }
        >
          Home
        </Link>
        <Link
          href={"/other-stats"}
          className={
            pathname === "/other-stats"
              ? "underline underline-offset-4 text-white text-[12px] md:text-xl"
              : "text-white text-[12px] md:text-xl"
          }
        >
          Other stats
        </Link>
        <Link
          href={"/elo"}
          className={
            pathname === "/elo"
              ? "underline underline-offset-4 text-white text-[12px] md:text-xl"
              : "text-white text-[12px] md:text-xl"
          }
        >
          ELO
        </Link>
        <Link
          href={"/leagues"}
          className={
            pathname === "/leagues"
              ? "underline underline-offset-4 text-white text-[12px] md:text-xl"
              : "text-white text-[12px] md:text-xl"
          }
        >
          Leagues
        </Link>
        <Link
          href={"/about"}
          className={
            pathname === "/about"
              ? "underline underline-offset-4 text-white text-[12px] md:text-xl"
              : "text-white text-[12px] md:text-xl"
          }
        >
          About
        </Link>
      </div>
    )
  );
};

export default TopNavMenu;
