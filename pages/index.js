// Entrance point to the app itself. 
// If user has been here before then check cache for previous visit's options etc
// First visit should show an upload button and a text box for youtube link

import { Container } from "./components/Container"
import { StackDivider, Text, VStack } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"
import { Input } from "@chakra-ui/input"

export default function Home() {
  return (
    <Container justifyContent="center">
      <VStack
        //divider={<StackDivider borderColor="gray.200" />}
        spacing="12"
        align="center"
        width="lg"
        height="lg"
        justify="center"
      >
        <Button
          bgColor="purple.300"
          borderRadius="16px"
          minWidth="64dp"
          height="36px"
          paddingLeft="16px"
          paddingRight="16px"
        >
          Upload
        </Button>
        <Text>OR</Text>
        <Input bgColor="green" placeholder="YouTube Link" variant="filled"/>
      </VStack>
    </Container>
  )
}
