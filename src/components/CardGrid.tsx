import { SimpleGrid, Text } from "@chakra-ui/react";
import useCards from "../hooks/useCards";
import CardSlot from "./CardSlot";
import { useState } from "react";
import { CardType } from "../hooks/useCards";
import CardInfo from "./CardInfo";

const CardGrid = () => {
  const { cards, err } = useCards();
  const [selectedCard, setSelectedCard] = useState<CardType | null>(null);
  const closeCardInfo = () => setSelectedCard(null);
  return (
    <>
      {err && <Text>{err}</Text>}
      {selectedCard && <CardInfo card={selectedCard} onClose={closeCardInfo} />}
      <SimpleGrid columns={{ sm: 2, md: 3, xl: 5 }} spacing="30px" p="20px">
        {cards.map((card) => (
          <CardSlot
            card={card}
            key={card.cardId}
            onCardClick={setSelectedCard}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default CardGrid;
