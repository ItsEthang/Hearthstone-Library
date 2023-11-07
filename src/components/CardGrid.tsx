import { SimpleGrid, Text } from "@chakra-ui/react";
import useCards from "../hooks/useCards";
import CardSlot from "./CardSlot";
import { useState } from "react";
import { CardType } from "../hooks/useCards";
import CardInfo from "./CardInfo";
import CardSkeleton from "./CardSkeleton";

const CardGrid = () => {
  const { cards, err, isLoading } = useCards();
  const [selectedCard, setSelectedCard] = useState<CardType | null>(null);
  const closeCardInfo = () => setSelectedCard(null);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {err && <Text>{err}</Text>}
      {selectedCard && <CardInfo card={selectedCard} onClose={closeCardInfo} />}
      <SimpleGrid columns={{ sm: 2, md: 3, xl: 5 }} spacing="30px" p="20px">
        {isLoading &&
          skeletons.map((skeleton) => (
            <CardSkeleton key={skeleton}></CardSkeleton>
          ))}
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
