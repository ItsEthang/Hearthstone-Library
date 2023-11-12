import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { CardType } from "./useCards";

const useSet = (set: string | null) => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  //REMEMBER THE DEPENDENCY ARRAY WHEN USING THE useEffect() HOOK!
  useEffect(() => {
    if (set === null) {
        setCards([]);
        setIsLoading(false);
        return;
      }
    const controller = new AbortController();
    setIsLoading(true)
    apiClient
      .get<CardType[]>(`/cards/sets/${set}`, {signal: controller.signal})
      .then((res) => {
        const allCards = res.data;
        const validCards = allCards.filter(card => card.img !== undefined);
        setCards(validCards);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErr(err.message);
        setIsLoading(false);
      });

      return () => controller.abort();
  }, [set]);

  return {cards, err, isLoading}
}

export default useSet;