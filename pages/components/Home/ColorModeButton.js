// Button used to change the color mode to Dark/Light
import { Button } from "@chakra-ui/button";
import { useColorMode, Box } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ColorModeButton = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box>
      <Button
        onClick={toggleColorMode}
        alignSelf="flex-end"
        mr="1rem"
        mb="1rem"
      >
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
    </Box>
  );
};

export default ColorModeButton;
