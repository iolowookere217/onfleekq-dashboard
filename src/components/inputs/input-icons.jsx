import { InputGroup, Input, InputLeftAddon, InputRightAddon } from "@chakra-ui/react";
import { forwardRef } from "react";

const AppInputIcons = forwardRef(
    ({ placeholder, value, setValue, leftChildren, rightChildren, ...rest }, ref) => {
        return (
            <InputGroup
                size="sm"
                w="18rem"
                bgColor="white"
                border="1px solid #D4D4D4"
                {...rest}
                borderRadius=".35rem"
            >
                {leftChildren && (
                    <InputLeftAddon bgColor="transparent" border="none">
                        {leftChildren}
                    </InputLeftAddon>
                )}
                <Input
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    bgColor="white"
                    border="none"
                    outline="none"
                    borderRadius=".35rem"
                    ref={ref}
                />
                {rightChildren && (
                    <InputRightAddon bgColor="transparent" border="none">
                        {rightChildren}
                    </InputRightAddon>
                )}
            </InputGroup>
        );
    },
);

AppInputIcons.displayName = "AppInputIcons";

export default AppInputIcons;
