import { extendTheme } from "@chakra-ui/react"


const config = {
    initialColorMode: "light",
    useSystemColorMode: false,
}
const customTheme = extendTheme({
    config,
    styles: {
        global: {
            // styles for the `body`
            body: {
                bg: "black",
                color: "white",
            },

            p: {
                color: "#b7babd",
            },
            div: {
                color: "#b7babd",
            }
        },
    },
})

export default customTheme;