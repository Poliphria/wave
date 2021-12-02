import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  fonts: {
    heading: "Raleway",
    body: "Manrope",
  },
  colors: {
    purp: {
      100: "320e3b",
      200: "4c2a85",
      300: "6b7fd7",
      400: "bcedf6",
      500: "ddfbd2"
    },
    original: {
      100: "F1354C",
      200: "B32189",
      300: "9A2D53"
    }
  }
})

export default theme