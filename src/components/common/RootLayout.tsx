import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useEffect } from "react";
import i18n from "@/locales/i18n";

export function RootLayout() {
  const currentLang = i18n.language;

  useEffect(() => {
    window.document.dir = i18n.dir();
    window.document.documentElement.lang = i18n.language;
  }, [currentLang]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
