import { MapPin } from "lucide-react";
import { CustomSelect } from "./CustomSelect";
import { useTranslation } from "react-i18next";
import i18n from "@/locales/i18n";
export function TopHeader() {
  const { t } = useTranslation("global");
  const currentLang = i18n.language;

  const handleChange = (e: string) => {
    i18n.changeLanguage(e);
    window.location.reload();
  };

  return (
    <div className="bg-[#EDF2EE] py-2">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-hard-primary">
            <MapPin className="h-5 w-5" />
            <span className="text-[12px]">
              <span className="hidden lg:inline">
                {t("header.topHeader.location.one")}
              </span>
              <span className="hidden md:inline">
                {" "}
                {t("header.topHeader.location.two")}
              </span>
              {t("header.topHeader.location.three")}
            </span>
          </div>
          <div className="flex items-center justify-between gap-3 md:gap-5">
            <CustomSelect
              placeHolder={t(`header.topHeader.lang.${currentLang}`)}
              items={[
                { place: t("header.topHeader.lang.en"), lang: "en" },
                { place: t("header.topHeader.lang.ar"), lang: "ar" },
              ]}
              handleClick={handleChange}
            />
            {/* <CustomSelect
              placeHolder={t("header.topHeader.currency.usd")}
              items={[
                t("header.topHeader.currency.usd"),
                t("header.topHeader.currency.eur"),
                t("header.topHeader.currency.egp"),
              ]}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
