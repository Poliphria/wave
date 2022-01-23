import { extendTheme } from "@chakra-ui/react"

const config = {
  initialColorMode: 'dark', 
  useSystemColorMode: false,
}

const theme = extendTheme({
  ...config,
  fonts: {
    heading: "Raleway",
    body: "Manrope",
  },
})

export default theme