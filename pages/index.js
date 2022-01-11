// Entrance point to the app itself. 
// If user has been here before then check cache for previous visit's options etc
// First visit should show an upload button and a text box for youtube link

import { Container } from "./components/Container"
import { StackDivider, Text, VStack, Box } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"
import { Input } from "@chakra-ui/input"
import "@fontsource/rubik"
export default function Home() {
  return (
    <Container justifyContent="center" fontFamily="Rubik">
      <VStack
        //divider={<StackDivider borderColor="gray.200" />}
        spacing="8"
        align="center"
        width="lg"
        height="lg"
        justify="center"
      >
        <Button
          textColor="black" 
          borderRadius="16px"
          height="64px"
          width="sm"
          paddingLeft="16px"
          paddingRight="16px"
          fontSize="x-large"
        >
          Upload
        </Button>
        <Text fontSize="x-large" fontSize="xx-large">Or</Text>
        <Input 
          placeholder="YouTube Link" 
          size="lg" 
          fontSize="xl" 
          borderWidth="2px" 
          borderRadius="8px" 
        />
      </VStack>
    </Container>
  )
}
