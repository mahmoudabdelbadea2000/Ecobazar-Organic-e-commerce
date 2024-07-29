import {
  CircleUserRound,
  Heart,
  Menu,
  PhoneCall,
  Search,
  ShoppingBag,
  X,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import i18n from "@/locales/i18n";
import { useState } from "react";

export function NavBar() {
  const { t } = useTranslation("global");
  const currentLang = i18n.language;
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <div className="py-3">
      <div className="container">
        <div className="relative flex items-center justify-between">
          <nav
            className={`absolute end-[30%] top-full z-[1000] md:z-0 ${toggleMenu ? "" : "hidden"} order-2 w-1/3 md:static md:order-1 md:block`}
          >
            <ul className="flex flex-col items-center justify-between gap-[27px] text-sm font-medium text-grayColors-500 md:flex-row">
              <li className="transition-colors hover:text-grayColors-900">
                <Link to="/">{t("header.navbar.home")}</Link>
              </li>
              <li className="transition-colors hover:text-grayColors-900">
                <Link to="/shop">{t("header.navbar.shop")}</Link>
              </li>
              <li className="transition-colors hover:text-grayColors-900">
                <Link to="/blog">{t("header.navbar.blog")}</Link>
              </li>
              <li className="transition-colors hover:text-grayColors-900">
                <Link to="/about-us">{t("header.navbar.about")}</Link>
              </li>
            </ul>
          </nav>
          <Link to={"/"} className="order-1 flex items-center gap-2 md:order-2">
            <img
              src="/src/assets/logo.svg"
              alt="Eco-bazar logo"
              className={`${currentLang === "ar" ? "order-2" : ""}`}
            />
            <span className="text-[32px] font-medium text-grayGreenColors-900">
              Ecobazar
            </span>
          </Link>
          <div
            className={`absolute end-[30%] ${toggleMenu ? "flex" : "hidden"} top-[500%] z-[1000] order-3 items-center gap-5 md:static md:z-0 md:order-3 md:flex lg:gap-10`}
          >
            <div className="hidden items-center md:flex">
              <Button
                size={"icon"}
                variant={"ghost"}
                className={`${currentLang === "ar" ? "-rotate-90" : ""} bg-transparent hover:bg-transparent`}
              >
                <a href="tel:+123456789">
                  <PhoneCall className="h-[32px] w-[32px] text-grayColors-900" />
                </a>
              </Button>
              <span className="hidden text-sm font-medium text-grayColors-900 lg:inline">
                {t("header.navbar.tel")}
              </span>
            </div>
            <div className="flex items-center justify-center gap-5">
              <Button
                size={"icon"}
                variant={"ghost"}
                className="bg-transparent hover:bg-transparent"
              >
                <Search className="h-[32px] w-[32px] text-grayColors-900" />
              </Button>
              <Link to="/wishlist">
                <Heart className="h-[32px] w-[32px] text-grayColors-900" />
              </Link>
              <Link to="/shopping-cart">
                <ShoppingBag className="h-[32px] w-[32px] text-grayColors-900" />
              </Link>
              <Link to="/account">
                <CircleUserRound className="h-[32px] w-[32px] text-grayColors-900" />
              </Link>
            </div>
          </div>
          <div>
            <div
              className={`fixed ${toggleMenu ? "end-0" : "-end-full"} top-0 z-20 h-screen w-full bg-white transition md:hidden`}
            >
              <Button
                size="icon"
                variant={"ghost"}
                onClick={() => setToggleMenu((prev) => !prev)}
              >
                <X />
              </Button>
            </div>
          </div>
          <Button
            size="icon"
            className="order-4 md:hidden"
            onClick={() => setToggleMenu((prev) => !prev)}
          >
            <Menu />
          </Button>
        </div>
      </div>
    </div>
  );
}
