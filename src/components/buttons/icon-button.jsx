import { Link } from "react-router-dom";
import { Button, Icon } from "@chakra-ui/react";

const AppIconButton = ({ children, icon, variant, to, ...rest }) => {
    return (
        <Button
            as={to ? Link : undefined}
            to={to}
            size="sm"
            color="white"
            h="2.5rem"
            w="8rem"
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap=".5rem"
            bg={
                variant === "primary"
                    ? "brand.main"
                    : variant === "secondary"
                    ? "brand.secondary"
                    : variant === "tertiary"
                    ? "brand.tertiary"
                    : "brand.main"
            }
            borderRadius={
                variant === "primary"
                    ? "2.4rem"
                    : variant === "secondary"
                    ? "2.4rem"
                    : variant === "tertiary"
                    ? "2.4rem"
                    : "2.4rem"
            }
            {...rest}
            _hover={{}}
        >
            <Icon as={icon} boxSize={5} />
            {children}
        </Button>
    );
};

export default AppIconButton;
