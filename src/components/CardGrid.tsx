import { SimpleGrid, Text } from "@chakra-ui/react";
import useCards from "../hooks/useCards";
import useSet from "../hooks/useSet";
import useClass from "../hooks/useClass";
import CardSlot from "./CardSlot";
import { useState } from "react";
import { CardType } from "../hooks/useCards";
import CardInfo from "./CardInfo";
import CardSkeleton from "./CardSkeleton";
import CardContainer from "./CardContainer";

interface Props {
  selectedSet: string | null;
  selectedClass: string | null;
}

const CardGrid = ({ selectedSet, selectedClass }: Props) => {
  const setResults = useSet(selectedSet);
  // const classResults = useClass(selectedClass);
  const cardResults = useCards();
  const { cards, err, isLoading } = selectedSet ? setResults : cardResults;
  const filteredCards = cards.filter((card) =>
    selectedClass ? card.playerClass === selectedClass : true
  );
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
            <CardContainer key={skeleton}>
              <CardSkeleton />
            </CardContainer>
          ))}
        {filteredCards.map((card) => (
          <CardContainer key={card.cardId}>
            <CardSlot card={card} onCardClick={setSelectedCard} />
          </CardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default CardGrid;
