"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { sections } from "@/lib/data";

export default function Navigation() {
  return (
    <div className="flex justify-between items-center sticky top-0 z-50 bg-background py-4 px-8">
      <Link href="/" className="flex items-center space-x-2 group">
        <Heart className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
        <span className="heading-fancy text-2xl text-primary">
          Hengegjengen
        </span>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          {sections.map((item) => (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink asChild>
                <Link href={item.href}>
                  <div className="flex items-center space-x-2">
                    <item.icon className="w-4 h-4" />
                    <span className="text-sm">{item.title}</span>
                  </div>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
