import { Center, Box } from "@chakra-ui/react";
import HeaderBgImg from "../assets/HsHeaderBg.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const Header = () => {
  return (
    <>
      <ColorModeSwitch />
      <Center
        bgImage={HeaderBgImg}
        bgRepeat="no-repeat"
        bgPos="center"
        bgSize="cover"
        minHeight="300px"
        fontSize="80px"
        fontWeight="bold"
        color="white"
      >
        Cards Library
      </Center>
    </>
  );
};

export default Header;
