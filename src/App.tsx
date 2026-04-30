import clsx from "clsx";
import React from "react";

import { levelOne, levelThree, levelTwo } from "./assets/levels";
import Card from "./components/card/Card";
import { bigCardStyles } from "./components/card/Card.css";
import Credits from "./components/credits/Credits";
import CardHistory from "./components/history/CardHistory";
import LanguagePicker, { Language } from "./components/language/LanguagePicker";
import {
  appStyles,
  langButtonStyles,
  levelButtonStyles,
  levelsStyles,
  nextCardButtonStlyes,
  questionStyles,
  selectedLevelStyles,
  titleStyles,
} from "./styles/app.css";

function shuffle<T>(array: T[]) {
  let currentIndex = array.length;
  let temporaryValue: T;
  let randomIndex: number;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

async function translateText(text: string, targetLang: string): Promise<string> {
  if (targetLang === "en") return text;
  try {
    const res = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${targetLang}`
    );
    const data = await res.json();
    const translated = data.responseData?.translatedText;
    // MyMemory sometimes returns an error string — fall back to original
    if (!translated || data.responseStatus === 403) return text;
    return translated;
  } catch {
    return text;
  }
}

function App() {
  const levels = {
    levelOne: shuffle(levelOne),
    levelTwo: shuffle(levelTwo),
    levelThree: shuffle(levelThree),
  };

  const [gameState] = React.useState(levels);
  const [currLevel, setLevel] = React.useState(Object.keys(levels)[0] as keyof typeof levels);
  const [currCard, setCurrCard] = React.useState(levels[currLevel][0]);
  const [cardHistory, setCardHistory] = React.useState<string[]>([]);
  const [selectedLang, setSelectedLang] = React.useState<Language>({
    code: "en",
    name: "English",
    flag: "🇺🇸",
  });
  const [showLangPicker, setShowLangPicker] = React.useState(true);
  const [translatedCard, setTranslatedCard] = React.useState(levels[currLevel][0]);
  const [isTranslating, setIsTranslating] = React.useState(false);

  type levelKey = keyof typeof levels;

  React.useEffect(() => {
    let cancelled = false;
    if (selectedLang.code === "en") {
      setTranslatedCard(currCard);
      return;
    }
    setIsTranslating(true);
    translateText(currCard, selectedLang.code).then((result) => {
      if (!cancelled) {
        setTranslatedCard(result);
        setIsTranslating(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [currCard, selectedLang]);

  function handleChangeLevel(newLevel: levelKey) {
    setLevel(newLevel);
    if (gameState[newLevel].length === 1) {
      setCurrCard("You have finished this level!");
    } else {
      setCurrCard(gameState[newLevel][0]);
    }
  }

  const buttons = (Object.keys(levels) as levelKey[]).map((level) => (
    <button
      className={clsx(levelButtonStyles, { [selectedLevelStyles]: level === currLevel })}
      onClick={() => handleChangeLevel(level)}
      key={level}
    >
      {level.split(/(?=[A-Z])/).join(" ")}
    </button>
  ));

  function handleNextCard() {
    const finalMessage = "You have finished this level!";
    if (gameState[currLevel].length === 1) {
      if (currCard === finalMessage) {
        return;
      } else {
        setCardHistory([currCard, ...cardHistory]);
        setCurrCard(finalMessage);
      }
    } else {
      setCardHistory([currCard, ...cardHistory]);
      gameState[currLevel].shift();
      setCurrCard(gameState[currLevel][0]);
    }
  }

  function handleSelectLang(lang: Language) {
    setSelectedLang(lang);
    setShowLangPicker(false);
  }

  return (
    <div className={appStyles}>
      {showLangPicker && (
        <LanguagePicker onSelect={handleSelectLang} currentLang={selectedLang} />
      )}
      <Credits />
      <div className={levelsStyles}>{buttons}</div>
      <div className={questionStyles}>
        <div className={titleStyles}>wnrs</div>
        <Card
          styleName={bigCardStyles}
          question={isTranslating ? "..." : translatedCard}
        />
        <button className={nextCardButtonStlyes} onClick={() => handleNextCard()}>
          next card
        </button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <CardHistory cardHistory={cardHistory} />
        <button className={langButtonStyles} onClick={() => setShowLangPicker(true)}>
          {selectedLang.flag} {selectedLang.name}
        </button>
      </div>
    </div>
  );
}

export default App;
