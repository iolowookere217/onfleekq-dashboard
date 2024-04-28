import { FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react";
import { forwardRef } from "react";

const AppInput = forwardRef(
    (
        {
            label,
            name,
            placeholder,
            type,
            register,
            errors,
            disabled,
            width = "100%",
            autoComplete,
            variant = "primary",
            isRequired = true,
            ...props
        },
        ref,
    ) => {
        return (
            <FormControl
                className="flex flex-col mb-4"
                maxHeight="5rem"
                isDisabled={disabled}
                isRequired={isRequired}
            >
                {label && (
                    <FormLabel
                        htmlFor={name}
                        color="typography.dark"
                        fontSize="1rem"
                        fontWeight={500}
                    >
                        {label}
                    </FormLabel>
                )}
                <Input
                    type={type}
                    id={name}
                    name={name}
                    ref={ref}
                    placeholder={placeholder}
                    autoComplete={autoComplete}
                    isDisabled={disabled}
                    width={width}
                    height={
                        variant === "primary"
                            ? "2.5rem"
                            : variant === "secondary"
                              ? "2.5rem"
                              : "2.5rem"
                    }
                    bg={
                        variant === "primary"
                            ? "rgba(214, 214, 214, 1)"
                            : variant === "secondary"
                              ? "white"
                              : variant === "tertiary"
                                ? "transparent"
                                : "white"
                    }
                    color={
                        variant === "primary"
                            ? "black"
                            : variant === "secondary"
                              ? "black"
                              : variant === "tertiary"
                                ? "white"
                                : "typography.dark"
                    }
                    borderRadius={
                        variant === "primary"
                            ? "0rem"
                            : variant === "secondary"
                              ? "0rem"
                              : variant === "tertiary"
                                ? "0"
                                : "0rem"
                    }
                    fontSize="1rem"
                    outline="none"
                    autoSave="true"
                    autoCorrect="on"
                    spellCheck="true"
                    isInvalid={errors?.[name]?.message ? true : false}
                    errorBorderColor="red.300"
                    border={
                        variant === "primary"
                            ? "none"
                            : variant === "secondary"
                              ? "1px solid #D4D4D4"
                              : variant === "tertiary"
                                ? "none"
                                : "1px solid #D4D4D4"
                    }
                    borderBottom={variant === "tertiary" && "1px solid #D4D4D4"}
                    _placeholder={{
                        color: variant === "tertiary" ? "rgba(255, 255, 255, 0.66)" : "bg.dark-ash",
                        fontSize: ".9rem",
                        verticalAlign: "middle",
                        fontWeight: "600",
                    }}
                    {...register(name, {
                        required: true,
                    })}
                    {...props}
                />
                {errors?.[name] && (
                    <FormHelperText role="alert" color={"red"} fontSize=".7rem">
                        {errors[name]?.message}
                    </FormHelperText>
                )}
            </FormControl>
        );
    },
);

AppInput.displayName = "AppInput";

export default AppInput;
