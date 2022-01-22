// Entrance point to the app itself.
// If user has been here before then check cache for previous visit's options etc
// First visit should show an upload button and a text box for youtube link

import { Container } from "./components/Container";
import { Text, VStack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import YoutubeLink from "./components/Home/YoutubeLink";
import "@fontsource/rubik";
export default function Home() {
  return (
    <Container justifyContent="center" fontFamily="Rubik" fontSize="xl">
      <VStack
        spacing="8"
        align="center"
        width="lg"
        height="lg"
        justify="center"
      >
        <Button
          textColor="black"
          borderRadius="16px"
          height="48px"
          width="sm"
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
    </Container>
  );
}
