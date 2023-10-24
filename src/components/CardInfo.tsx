import {
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
  List,
  ListItem,
  HStack,
  Image,
  CloseButton,
  Show,
} from "@chakra-ui/react";
import { CardType } from "../hooks/useCards";
import PlaceholderCard from "../assets/PlaceholderCard.webp";

interface Props {
  card: CardType;
  onClose: () => void;
}

const CardInfo = ({ card, onClose }: Props) => {
  return (
    <Box className="card-info">
      <CloseButton
        size="lg"
        color="yellow"
        position="absolute"
        left="95%"
        top="5%"
        onClick={() => onClose()}
      />

      <HStack justifyContent="space-around">
        <Show above="lg">
          <Image src={card.img || PlaceholderCard} m="5em" />
        </Show>
        <Box m="3em">
          <Heading size="md">{card.name}</Heading>
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
              <List>
                <ListItem>
                  <Text as="b" color="yellow.300">
                    Type:{" "}
                  </Text>
                  {card.type}
                </ListItem>
                {card.spellSchool && (
                  <ListItem>
                    <Text as="b" color="yellow.300">
                      Spell School:{" "}
                    </Text>
                    {card.spellSchool}
                  </ListItem>
                )}
                <ListItem>
                  <Text as="b" color="yellow.300">
                    Rarity:{" "}
                  </Text>
                  {card.rarity}
                </ListItem>
                <ListItem>
                  <Text as="b" color="yellow.300">
                    Set:{" "}
                  </Text>
                  {card.cardSet}
                </ListItem>
                <ListItem>
                  <Text as="b" color="yellow.300">
                    Class:{" "}
                  </Text>
                  {card.playerClass}
                </ListItem>
                {card.artist && (
                  <ListItem>
                    <Text as="b" color="yellow.300">
                      Artist:{" "}
                    </Text>
                    {card.artist}
                  </ListItem>
                )}
              </List>
            </Box>
          </Stack>
        </Box>
      </HStack>
    </Box>
  );
};

export default CardInfo;
