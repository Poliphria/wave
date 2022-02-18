// Entrance point to the app itself.
// If user has been here before then check cache for previous visit's options etc
// First visit should show an upload button and a text box for youtube link
import React from "react";
import { Container } from "./components/Container";
import { Text, VStack, Flex } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import YoutubeLinkHookForm from "./components/Home/YoutubeLink";
import "@fontsource/rubik";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    console.log(fileUploaded.name)
  };

  // TODO: Refactor react hook form so that it works with both file and link. useFormContext helpful here

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
          onClick={handleClick}
          width={40}
          height={12}
          paddingLeft="16px"
          paddingRight="16px"
          shadow="xl"
          _focus={{ boxShadow: "none", shadow: "xl" }}
        >
          Upload
        </Button>
        {/*TODO: Add validation to file upload. Must be less than 15MB and can only be MP3, AIFF, FLAC */}
        <input
          type="file"
          ref={hiddenFileInput}
          onChange={handleChange}
          style={{ display: "none" }}
        />
        <Text>Or</Text>
        <YoutubeLinkHookForm />
      </VStack>
      <Flex justify="flex-end" width="100%" flexGrow="1">
        <Button
          onClick={toggleColorMode}
          alignSelf="flex-end"
          mr="1rem"
          mb="1rem"
        >
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>
    </Container>
  );
}
