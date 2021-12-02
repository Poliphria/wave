import { Container } from "./components/Container"
import {
    Flex,
} from '@chakra-ui/react'
import { TranscribeContainer } from "./components/transcribe/TranscribeContainer"

export default function Transcribe() {
  return (
    <Container>
        <TranscribeContainer />
    </Container>
  )
}
