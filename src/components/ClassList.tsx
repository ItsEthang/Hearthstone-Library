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
import FilterContainer from "./FilterContainer";

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
        <FilterContainer>
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
        </FilterContainer>
      </Menu>
    </>
  );
};

export default ClassList;
