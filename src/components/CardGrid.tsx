import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Card {
  cardId: string;
  name: string;
}

interface FetchCardsResponse {
  Classic: Card[];
}

const CardGrid = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchCardsResponse>("/cards")
      .then((res) => {
        setCards(res.data.Classic);
      })
      .catch((err) => {
        setErr(err.message);
      });
  });

  return (
    <>
      {err && <Text>{err}</Text>}
      <ul>
        {cards.map((card) => (
          <li key={card.cardId}>{card.name}</li>
        ))}
      </ul>
    </>
  );
};

export default CardGrid;
