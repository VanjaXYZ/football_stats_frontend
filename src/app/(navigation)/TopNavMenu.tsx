"use client";
import React from "react";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const TopNavMenu = () => {
  const pathname = usePathname();

  return (
    pathname !== "/login" && (
      <NavigationMenu className="ms-auto flex gap-16 items-center">
        <NavigationMenuItem className="list-none">
          <Link href={"/home"} className="text-white text-xl">
            <NavigationMenuLink
              className={
                pathname === "/home" ? "underline underline-offset-4" : ""
              }
            >
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="list-none">
          <Link href={"/other-stats"} className="text-white text-xl">
            <NavigationMenuLink
              className={
                pathname === "/other-stats"
                  ? "underline underline-offset-4"
                  : ""
              }
            >
              Other stats
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="list-none">
          <Link href={"/about"} className="text-white text-xl">
            <NavigationMenuLink
              className={
                pathname === "/about" ? "underline underline-offset-4" : ""
              }
            >
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenu>
    )
  );
};

export default TopNavMenu;
