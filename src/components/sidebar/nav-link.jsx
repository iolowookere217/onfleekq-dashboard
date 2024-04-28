import { Flex, Text, Icon } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const SideNavLink = ({ to, icon, tabName, isNavOpen }) => {
    return (
        <NavLink to={to}>
            {({ isActive }) => (
                <Flex
                    mx="auto"
                    w={isNavOpen ? "100%" : "80%"}
                    bg={isActive ? "typography.white" : ""}
                    alignItems="center"
                    justifyContent={isNavOpen ? "start" : "center"}
                    borderRadius="1rem"
                    px=".5rem"
                    py=".25rem"
                    h="full"
                    _hover={{ cursor: "pointer" }}
                    transition="all .5s linear"
                    gap={3}
                >
                    <Icon
                        as={icon}
                        color={isActive ? "brand.tertiary" : "typography.white"}
                        padding={isActive ? ".3rem" : ""}
                        boxSize={isActive ? 8 : 6}
                    />
                    {tabName && (
                        <Text
                            fontWeight="medium"
                            color={isActive ? "brand.main" : "typography.white"}
                        >
                            {tabName}
                        </Text>
                    )}
                </Flex>
            )}
        </NavLink>
    );
};

export default SideNavLink;
