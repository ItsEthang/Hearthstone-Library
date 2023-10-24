import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { CardType } from "../hooks/useCards";
import PlaceholderCard from "../assets/PlaceholderCard.webp";

interface Props {
  card: CardType;
  onCardClick: (card: CardType) => void;
}

const CardSlot = ({ card, onCardClick }: Props) => {
  return (
    <>
      <Card
        borderRadius="15px"
        overflow="hidden"
        onClick={() => onCardClick(card)}
      >
        <Image src={card.img || PlaceholderCard} />
        <CardBody>
          <Heading fontSize="xl" textAlign="center">
            {card.name}
          </Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default CardSlot;
