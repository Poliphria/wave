// Entrance point to the app itself.
// If user has been here before then check cache for previous visit's options etc
// First visit should show an upload button and a text box for youtube link
import { Container } from "./components/Container";
import { Text, VStack, Flex } from "@chakra-ui/layout";
import ColorModeButton from "./components/Home/ColorModeButton";
import UploadButton from "./components/Home/UploadButton";
import YoutubeLinkHookForm from "./components/Home/YoutubeLink";
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
        flexGrow="4"
      >
        <UploadButton />
        <Text>Or</Text>
        <YoutubeLinkHookForm />
      </VStack>
      <Flex justify="flex-end" width="100%" flexGrow="1">
        <ColorModeButton />
      </Flex>
    </Container>
  );
}
