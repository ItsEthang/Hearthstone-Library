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
    Basic: CardType[];
    Classic: CardType[];
    Naxxramas: CardType[];
    "Goblins vs Gnomes": CardType[];
    "Blackrock Mountain": CardType[];
    "The Grand Tournament": CardType[];
    "The League of Explorers": CardType[];
    "Whispers of the Old Gods": CardType[];
    "One Night in Karazhan": CardType[];
    "Mean Streets of Gadgetzan": CardType[];
    "Journey to Un'Goro": CardType[];
    "Knights of the Frozen Throne": CardType[];
    "Kobolds & Catacombs": CardType[];
    "The Witchwood": CardType[];
    "The Boomsday Project": CardType[];
    "Rastakhan's Rumble": CardType[];
    "Rise of Shadows": CardType[];
    "Saviors of Uldum": CardType[];
    "Descent of Dragons": CardType[];
    "Galakrond's Awakening": CardType[];
    "Demon Hunter Initiate": CardType[];
    "Ashes of Outland": CardType[];
    "Scholomance Academy": CardType[];
    "Madness At The Darkmoon Faire": CardType[];
    "Forged in the Barrens": CardType[];
    "Legacy": CardType[];
    "Core": CardType[];
    "United in Stormwind": CardType[];
    "Fractured in Alterac Valley": CardType[];
    "Caverns of Time": CardType[];
    "Voyage to the Sunken City": CardType[];
    "Murder at Castle Nathria": CardType[];
    "March of the Lich King": CardType[];
    "Path of Arthas": CardType[];
    "Festival of Legends": CardType[];
    "TITANS": CardType[];
    "Showdown in the Badlands": CardType[]
  }

const useCards = () => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  //REMEMBER THE DEPENDENCY ARRAY WHEN USING THE useEffect() HOOK!
  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true)
    apiClient
      .get<FetchCardsResponse>("/cards", {signal: controller.signal})
      .then((res) => {
        const allCards = [
          ...res.data.Core,
          ...res.data["Voyage to the Sunken City"],
          ...res.data["Murder at Castle Nathria"],
          ...res.data["March of the Lich King"],
          ...res.data["Path of Arthas"],
          ...res.data["Festival of Legends"],
          ...res.data["TITANS"],
          ...res.data["Showdown in the Badlands"]
        ];
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
  }, []);

  return {cards, err, isLoading}
}

export default useCards