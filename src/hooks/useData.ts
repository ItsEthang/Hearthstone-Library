import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { CardType } from "./useCards";

const useData = (endpoint: string, parameter: string | null) => {
  const [cards, setCard] = useState<CardType[]>([]);
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  //REMEMBER THE DEPENDENCY ARRAY WHEN USING THE useEffect() HOOK!
  useEffect(() => {
    if (parameter === null) {
        setCard([]);
        setIsLoading(false);
        return;
      }
    const controller = new AbortController();
    setIsLoading(true)
    apiClient
      .get<CardType[]>(`/cards/${endpoint}/${parameter}`, {signal: controller.signal})
      .then((res) => {
        const allCards = res.data;
        const validCards = allCards.filter(card => card.img !== undefined);
        setCard(validCards);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErr(err.message);
        setIsLoading(false);
      });

      return () => controller.abort();
  }, [parameter]);

  return {cards, err, isLoading}
}

export default useData;