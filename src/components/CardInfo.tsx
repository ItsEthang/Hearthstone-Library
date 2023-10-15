import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Stack,
  StackDivider,
  Box,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { CardType } from "../hooks/useCards";

interface Props {
  card: CardType;
}

const CardInfo = ({ card }: Props) => {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">{card.name}</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Text pt="2" fontSize="sm">
              {card.flavor}
            </Text>
            <Text pt="2" fontSize="sm">
              {card.text}
            </Text>
          </Box>
          <Box>
            <UnorderedList>
              <ListItem>
                <Text as="b">Type: </Text>
                {card.type}
              </ListItem>
              {card.spellSchool && (
                <ListItem>
                  <Text as="b">Spell School: </Text>
                  {card.spellSchool}
                </ListItem>
              )}
              <ListItem>
                <Text as="b">Rarity: </Text>
                {card.rarity}
              </ListItem>
              <ListItem>
                <Text as="b">Set: </Text>
                {card.cardSet}
              </ListItem>
              <ListItem>
                <Text as="b">Class: </Text>
                {card.playerClass}
              </ListItem>
              {card.artist && (
                <ListItem>
                  <Text as="b">Artist: </Text>
                  {card.artist}
                </ListItem>
              )}
            </UnorderedList>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default CardInfo;
