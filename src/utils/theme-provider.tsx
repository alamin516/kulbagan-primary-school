"use client";
import { ThemeProvider as NextThemesProvider } from "next-theme";
import { ThemeProviderProps } from "next-theme/dist/provider/index.props";

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

export default ThemeProvider;
