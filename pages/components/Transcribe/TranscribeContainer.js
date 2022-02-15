import { 
Flex
} from "@chakra-ui/layout";
import WaveSurfer from "./WaveSurfer/WaveSurfer"

export const TranscribeContainer = (props) => {
    return (
        <Flex>
            <WaveSurfer />
        </Flex>
    )
}

export default TranscribeContainer