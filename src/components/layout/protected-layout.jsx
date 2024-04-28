import { Box, Flex } from "@chakra-ui/react";
import SideBar from "../sidebar/side-bar";
import Header from "../header";
// import { useState } from "react";

const ProtectedLayout = ({ children, navData }) => {
  // const [isNavOpen, setIsNavOpen] = useState(true);

  return (
    <Box minH="100vh" bg={"bg.light"}>
      <SideBar
        position={"fixed"}
        zIndex={"100"}
        h={"100%"}
        borderRadius="0rem"
        top="0"
        left="0"
        overflowX="hidden"
        navData={navData}
        // setIsNavOpen={setIsNavOpen}
        // isNavOpen={isNavOpen}
      />
      <Flex
        flexDir="column"
        flex={"1"}
        px="1rem"
        minH="100vh"
        h="100%"
        w="90%"
        ml="5rem"
        // w={isNavOpen ? "calc(100% - 12rem)" : "calc(100% - 6rem)"}
        // ml={isNavOpen ? "12rem" : "4rem"}
        transition="all .5s ease-in-out"
        bg="bg.light"
      >
        <Box pt="1rem" transition="all .5s ease-in-out">
          <Header />
        </Box>
        <Box
          my="1rem"
          flex={"1"}
          transition="all .5s ease-in-out"
          h="100%"
          bg={"bg.light"}
        >
          {children}
        </Box>
      </Flex>
    </Box>
  );
};

export default ProtectedLayout;
