// Entrance point to the app itself.
// If user has been here before then check cache for previous visit's options etc
// First visit should show an upload button and a text box for youtube link

import { Container } from "./components/Container";
import { Text, VStack, Flex } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import YoutubeLinkHookForm from "./components/Home/YoutubeLink";
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
        flexGrow="4"
      >
        <Button
          borderRadius="16px"
          width={40}
          height={12}
          paddingLeft="16px"
          paddingRight="16px"
          shadow="xl"
          _focus={{boxShadow: "none", shadow: "xl"}}
        >
          Upload
        </Button>
        <Text>
          Or
        </Text>
        <YoutubeLinkHookForm />
      </VStack>
      <Flex 
        justify="flex-end"
        width="100%"
        flexGrow="1"
      >
        <Button 
          onClick={toggleColorMode} 
          alignSelf="flex-end"
          mr="1rem"
          mb="1rem"
        >
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>

    </Container>
  );
}
