import { VStack, Button, Input, StackDivider } from "@chakra-ui/layout";

export const TranscribeContainer = (props) => {
    return (
        <VStack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={8}
            align="center"
            {...props}
        >
            <Button>Test</Button>
            <Button>Test</Button>
        </VStack>
    )
}

export default TranscribeContainer