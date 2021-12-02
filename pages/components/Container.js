import {
    Flex,
    keyframes,
    usePrefersReducedMotion
} from '@chakra-ui/react'
import theme, { Theme } from '@chakra-ui/theme'

const gradient = keyframes`
      0% { background-position: 0% }
      100% { background-position: 100% }
      `;

export const Container = (props) => {
    const prefersReducedMotion = usePrefersReducedMotion()
    const gradientAnimation = prefersReducedMotion ? undefined : `${gradient} 9s alternate infinite`

    return (
        <Flex
            direction="column"
            alignItems="center"
            justifyContent="flex-start"
            bgGradient="linear(to-r, purp.100, purp.200)"
            position="absolute"
            // bgColor="blackAlpha.100"
            bgSize="300% 300%"
            width="100vw"
            height="100vh"
            animation={gradientAnimation}
            {...props}
        />
    )
}


    // <style>
    // .background--custom {
    //   background: linear-gradient(90deg, #F1354C, #B32189, #9A2D53);
    //   background-size: 300% 300%;
    //   animation: gradient 9s alternate infinite;
    //   position: absolute;
    //   top: 0;
    //   left: 0;
    //   height: 100%;
    //   width: 100%;
    // }
    // @keyframes gradient {
    //   0% {
    //     background-position: 0%;
    //   }
    //   100% {
    //     background-position: 100%;
    //   }
    // }
    // </style>

