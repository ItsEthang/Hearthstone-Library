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
  selectedClass: string | null;
  onSelectClass: (playerClass: string) => void;
}

const ClassList = ({ selectedClass, onSelectClass }: Props) => {
  const { classes, isLoading, err } = useFilters();

  if (err) return null;
  if (isLoading) return <Skeleton height="40px" />;

  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedClass ? selectedClass : "All Classes"}
        </MenuButton>
        <MenuList maxHeight="10em" overflow="scroll">
          {classes.map((classItem, index) => (
            <MenuItem
              key={index}
              onClick={() => {
                onSelectClass(classItem);
              }}
            >
              {classItem}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default ClassList;
