"use client";
import { cn } from "@/lib/utils";
import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
} from "next-themes";

interface ExtendedThemeProviderProps extends ThemeProviderProps {
  containerClassName?: string;
}

export function ThemeProvider({
  children,
  containerClassName,
  ...props
}: ExtendedThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      {/* navbar section/import navbar */}
      <main className={cn("container mx-auto px-4")}>{children}</main>
      {/* add footer component here */}
    </NextThemesProvider>
  );
}
