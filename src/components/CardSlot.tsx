import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { CardType } from "../hooks/useCards";
import PlaceholderCard from "../assets/PlaceholderCard.webp";

interface Props {
  card: CardType;
}

const CardSlot = ({ card }: Props) => {
  return (
    <Card borderRadius="15px" overflow="hidden">
      <Image src={card.img || PlaceholderCard} />
      <CardBody>
        <Heading fontSize="xl" textAlign="center">
          {card.name}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default CardSlot;
