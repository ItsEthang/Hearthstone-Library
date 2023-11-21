import useFilters from "../hooks/useFilters";
import {
  Text,
  Skeleton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  selectedSet: string | null;
  onSelectSet: (cardSet: string) => void;
}

const SetList = ({ selectedSet, onSelectSet }: Props) => {
  const { standard, wild, isLoading, err } = useFilters();

  if (err) return null;
  if (isLoading) return <Skeleton height="40px" />;

  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />} marginRight="3em">
          {selectedSet ? selectedSet : "Standard Cards"}
        </MenuButton>
        <MenuList maxHeight="10em" overflow="scroll">
          <Text fontSize="lg" color="#123" fontStyle="italic" px="12px">
            Standard Sets
          </Text>
          {standard.map((set, index) => (
            <MenuItem
              key={index}
              onClick={() => {
                onSelectSet(set);
              }}
            >
              {set}
            </MenuItem>
          ))}
          <Text fontSize="lg" color="#123" fontStyle="italic" px="12px">
            Wild Sets
          </Text>
          {wild.map((set, index) => (
            <MenuItem
              key={index}
              onClick={() => {
                onSelectSet(set);
              }}
            >
              {set}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default SetList;
