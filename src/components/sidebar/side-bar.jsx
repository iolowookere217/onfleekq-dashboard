import React, { memo } from "react";
import { Box, Flex, Text, Button, Icon } from "@chakra-ui/react";
import AppButton from "../../components/buttons/button";
import SideNavLink from "./nav-link";
import { useNavigate } from "react-router-dom";
import onfleekLogo from "/onfleekq_logo1.png";
import Logo from "/onfleek_logo.png";
import { MdLogout } from "react-icons/md";
import { SuccessToast } from "../../utils/toast";
import { FaBars } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";

const SideBar = memo(({ navData, isNavOpen, setIsNavOpen, ...rest }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
    SuccessToast("Logout Successful!");
  };

  return (
    <>
      <Box
        borderRightRadius={isNavOpen ? "0rem" : "0rem"}
        bg={"bg.main"}
        w={isNavOpen ? "12rem" : "4rem"}
        py="1rem"
        h="100%"
        position="relative"
        transition="all .5s ease-in-out"
        userSelect="none"
        {...rest}
      >
        {/* <Button
          onClick={() => setIsNavOpen(!isNavOpen)}
          colorScheme="white"
          variant="ghost"
          w="1rem"
          h="1.5rem"
          color="black"
          ml=".75rem"
          px=".5rem"
          border="none"
          outline="none"
          position="absolute"
          top=".85rem"
          _hover={{}}
          left={isNavOpen ? "8.5rem" : "0"}
          transition="all .5s ease-in-out"
        ></Button> */}
        <Flex justifyContent="space-between" flexDir="column" h="100%">
          <Flex
            gap="1rem"
            flexDir="column"
            alignItems="center"
            position="absolute"
            top="2rem"
            left="0"
            right="0"
          >
            <Flex>
              <img
                src={Logo}
                alt="logo"
                width={100}
                className="cursor-pointer w-[3rem] h-[3rem] object-contain overflow-auto"
              />
            </Flex>

            <div className="bg-white rounded-lg p-1 relative top-[2rem] left-[1rem]">
              <AiFillHome className="text-[#FF392B] text-3xl " />
            </div>
            <Flex flexDir="column" gap="1.85rem" w="90%" mx="auto" mt="3rem">
              {navData?.map((item, index) => (
                <SideNavLink
                  key={index}
                  to={item.to}
                  icon={item.icon}

                  // tabName={isNavOpen ? item.tabName : null}
                  // isNavOpen={isNavOpen}
                />
              ))}
            </Flex>
          </Flex>
        </Flex>
        <Flex
          justifyContent="center"
          alignItems="center"
          background={"brand.main"}
          borderRadius="1.2rem"
          mb="2rem"
          position="absolute"
          bottom="0"
          left="0"
          right="0"
          w={"98%"}
          mx="auto"
        >
          <AppButton variant="tetiary" onClick={handleLogout}>
            <Icon as={MdLogout} boxSize={6} />
            {isNavOpen && (
              <Text fontWeight="medium" fontSize={14} ml="2">
                Logout
              </Text>
            )}
          </AppButton>
        </Flex>
      </Box>
    </>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
