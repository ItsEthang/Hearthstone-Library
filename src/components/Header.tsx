import { Center } from "@chakra-ui/react";
import HeaderBgImg from "../assets/HsHeaderBg.webp";

const Header = () => {
  return (
    <Center
      bgImage={HeaderBgImg}
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
      minHeight="300px"
      fontSize="80px"
      fontWeight="bold"
    >
      Cards
    </Center>
  );
};

export default Header;
