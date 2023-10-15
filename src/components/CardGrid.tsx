import { SimpleGrid, Text } from "@chakra-ui/react";
import useCards from "../hooks/useCards";
import CardSlot from "./CardSlot";
import CardInfo from "./CardInfo";

const CardGrid = () => {
  const { cards, err } = useCards();

  return (
    <>
      {err && <Text>{err}</Text>}
      <SimpleGrid columns={{ sm: 2, md: 3, xl: 5 }} spacing="30px" p="20px">
        {cards.map((card) => (
          <CardSlot card={card} key={card.cardId} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default CardGrid;
