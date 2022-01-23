import {
    Flex,
} from '@chakra-ui/react'
import theme, { Theme } from '@chakra-ui/theme'

export const Container = (props) => {

    return (
        <Flex
            direction="column"
            alignItems="center"
            justifyContent="flex-start"
            bgColor="#f7f7f7"
            position="absolute"
            bgSize="300% 300%"
            width="100vw"
            height="100vh"
            {...props}
        />
    )
}
