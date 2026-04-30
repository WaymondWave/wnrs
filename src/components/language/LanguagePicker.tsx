import clsx from "clsx";
import { FunctionComponent } from "react";

import {
  flagStyles,
  gridStyles,
  langNameStyles,
  langOptionStyles,
  modalStyles,
  overlayStyles,
  selectedLangOptionStyles,
  subtitleStyles,
  titleStyles,
} from "./LanguagePicker.css";

export interface Language {
  code: string;
  name: string;
  flag: string;
}

export const LANGUAGES: Language[] = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "fr", name: "French", flag: "🇫🇷" },
  { code: "tl", name: "Tagalog", flag: "🇵🇭" },
  { code: "sw", name: "Swahili", flag: "🇰🇪" },
  { code: "yo", name: "Yoruba", flag: "🇳🇬" },
  { code: "es", name: "Spanish", flag: "🇪🇸" },
  { code: "pt", name: "Portuguese", flag: "🇧🇷" },
  { code: "ar", name: "Arabic", flag: "🇸🇦" },
  { code: "hi", name: "Hindi", flag: "🇮🇳" },
  { code: "ja", name: "Japanese", flag: "🇯🇵" },
  { code: "ko", name: "Korean", flag: "🇰🇷" },
  { code: "de", name: "German", flag: "🇩🇪" },
  { code: "it", name: "Italian", flag: "🇮🇹" },
  { code: "zh-CN", name: "Chinese", flag: "🇨🇳" },
];

interface LanguagePickerProps {
  onSelect: (lang: Language) => void;
  currentLang: Language;
}

const LanguagePicker: FunctionComponent<LanguagePickerProps> = ({ onSelect, currentLang }) => {
  return (
    <div className={overlayStyles}>
      <div className={modalStyles}>
        <div className={titleStyles}>choose your language</div>
        <div className={subtitleStyles}>cards will be translated as you play</div>
        <div className={gridStyles}>
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              className={clsx(langOptionStyles, {
                [selectedLangOptionStyles]: lang.code === currentLang.code,
              })}
              onClick={() => onSelect(lang)}
            >
              <span className={flagStyles}>{lang.flag}</span>
              <span className={langNameStyles}>{lang.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguagePicker;
