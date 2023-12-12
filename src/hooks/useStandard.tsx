import { useEffect, useState } from "react";
import useSet from "../hooks/useSet";
import { CardType } from "./useCards";

const useStandard = () => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const setNames = ["Core", "March of the Lich King", "TITANS"];
    Promise.all(setNames.map((setName) => useSet(setName))).then(
      (results: { cards: CardType[]; err: string; isLoading: boolean }[]) => {
        const combinedCards = results.flatMap((result) => result.cards);
        const combinedErr = results.find((result) => result.err)?.err || "";
        const combinedIsLoading = results.some((result) => result.isLoading);
        setCards(combinedCards);
        setErr(combinedErr);
        setIsLoading(combinedIsLoading);
      }
    );
  }, []);

  return { cards, err, isLoading };
};

export default useStandard;
