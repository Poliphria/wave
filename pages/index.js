// Entrance point to the app itself.
// If user has been here before then check cache for previous visit's options etc
// First visit should show an upload button and a text box for youtube link
import { Container } from "./components/Container";
import { Text, VStack, Flex, Box } from "@chakra-ui/layout";
import { useForm, FormProvider } from "react-hook-form";
import ColorModeButton from "./components/Home/ColorModeButton";
import UploadButton from "./components/Home/UploadButton";
import YoutubeLinkHookForm from "./components/Home/YoutubeLink";
import "@fontsource/rubik";

export default function Home() {
  const methods = useForm(); // In conjunction with FormProvider this is used to pass the methods and context returned by useForm to nested form inputs

  return (
    <Container justifyContent="center" fontFamily="Rubik" fontSize="xl">
      <Flex flexGrow="4" alignItems="center">
        <FormProvider {...methods}>
          <form>
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
          </form>
        </FormProvider>
      </Flex>
      <Flex justify="flex-end" width="100%">
        <ColorModeButton />
      </Flex>
    </Container>
  );
}
