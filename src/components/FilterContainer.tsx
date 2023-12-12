import { MenuList } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const FilterContainer = ({ children }: Props) => {
  return (
    <MenuList maxHeight="15em" overflow="scroll">
      {children}
    </MenuList>
  );
};

export default FilterContainer;
