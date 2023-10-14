import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Card {
    cardId: string;
    name: string;
  }
  
  interface FetchCardsResponse {
    Classic: Card[];
  }

const useCards = () => {
    const [cards, setCards] = useState<Card[]>([]);
  const [err, setErr] = useState("");

  //REMEMBER THE DEPENDENCY ARRAY WHEN USING THE useEffect() HOOK!
  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchCardsResponse>("/cards", {signal: controller.signal})
      .then((res) => {
        setCards(res.data.Classic);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErr(err.message);
      });

      return () => controller.abort();
  }, []);

  return {cards, err}
}

export default useCards