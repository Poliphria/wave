// Entrance point to the app itself.
// If user has been here before then check cache for previous visit's options etc
// First visit should show an upload button and a text box for youtube link

import { Container } from "./components/Container";
import { Text, VStack, Flex } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import YoutubeLink from "./components/Home/YoutubeLink";
import "@fontsource/rubik";
export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container justifyContent="center" fontFamily="Rubik" fontSize="xl">
      <VStack
        spacing="8"
        align="center"
        width="lg"
        height="lg"
        justify="center"
        flexGrow="1"
      >
        <Button
          borderRadius="16px"
          width={40}
          height={12}
          paddingLeft="16px"
          paddingRight="16px"
          boxShadow="0 5px 10px rgba(154,160,185,.05), 0 15px 30px rgba(166,173,201,.2);"
        >
          Upload
        </Button>
        <Text>
          Or
        </Text>
        <YoutubeLink />
      </VStack>
      <Flex 
        justify="flex-end"
        width="100%"  
        mr="16"
        mb="8"
      >
        <Button onClick={toggleColorMode} >
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>

    </Container>
  );
}
