import { Text } from "@chakra-ui/react";
import useCards from "../hooks/useCards";

const CardGrid = () => {
  const { cards, err } = useCards();

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
