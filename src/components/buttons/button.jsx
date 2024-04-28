import { Button } from "@chakra-ui/react";
import customTheme from "../../utils/theme";
import { Link } from "react-router-dom";

const AppButton = ({
    children,
    type,
    variant = "primary",
    width = "100%",
    height = "2.5rem",
    border = "1rem",
    bRadius = "0rem",
    loading,
    style,
    disabled,
    to,
    ...props
}) => {
    const { colors } = customTheme;
    return (
        <Button
            as={to ? Link : undefined}
            to={to}
            type={type}
            variant={variant}
            width={width}
            height={height}
            border={border}
            // borderColor={colors}
            borderRadius={bRadius}
            isLoading={loading}
            isDisabled={disabled}
            fontWeight="normal"
            style={style}
            fontSize="1rem"
            bg={
                variant === "primary"
                    ? colors.brand.main
                    : variant === "secondary"
                      ? "white"
                      : variant === "tetiary"
                        ? colors.brand.secondary
                        : variant === "dark"
                          ? colors.bg.green
                          : variant === "gray"
                            ? colors.bg.ash
                            : "transparent"
            }
            color={
                variant === "primary"
                    ? "white"
                    : variant === "secondary"
                      ? "colors.typography.red"
                      : variant === "tetiary"
                        ? "white"
                        : variant === "dark"
                          ? "white"
                          : variant === "gray"
                            ? "white"
                            : colors.typography.dark
            }
            _hover={{
                opacity: 0.8,
            }}
            {...props}
        >
            {children}
        </Button>
    );
};

export default AppButton;
