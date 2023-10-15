import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface CardType {
    cardId: string;
    name: string;
    img?: string;
    flavor?: string;
    text?: string;
    type: string;
    rarity: string;
    cardSet: string;
    spellSchool?:string;
    playerClass: string;
    artist?: string;
  }
  
  interface FetchCardsResponse {
    Classic: CardType[];
  }

const useCards = () => {
    const [cards, setCards] = useState<CardType[]>([]);
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