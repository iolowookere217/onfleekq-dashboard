import {
    NumberInput,
    NumberInputField,
    // NumberInputStepper,
    // NumberIncrementStepper,
    // NumberDecrementStepper,
} from "@chakra-ui/react";

const AppNumberInput = ({ defaultValue, onChange, max, min = 0, maxWidth = 20, size = "sm" }) => {
    return (
        <NumberInput
            defaultValue={defaultValue}
            max={max}
            min={min}
            clampValueOnBlur={false}
            size={size}
            maxW={maxWidth}
            onChange={onChange}
        >
            <NumberInputField />
            {/* <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
            </NumberInputStepper> */}
        </NumberInput>
    );
};

export default AppNumberInput;
