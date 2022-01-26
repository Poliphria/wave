import { extendTheme } from "@chakra-ui/react"

const config = {
  initialColorMode: 'system', 
  useSystemColorMode: true,
}

const theme = extendTheme({
  ...config,
  fonts: {
    heading: "Raleway",
    body: "Manrope",
  },
})

export default theme