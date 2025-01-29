import { extendTheme } from "@chakra-ui/react"

const preset = {
    fontSizes: {
        '2xs': "0.6rem",
        xs: "0.75rem",
        sm: "0.875rem",
        md: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "3.75rem",
        "7xl": "4.5rem",
        "8xl": "6rem",
        "9xl": "8rem",
    },
    letterSpacings: {
        '2xs': '100px'
    },
    borders: {
        border: `1px solid #949494`,
        borderDark: '1px solid #424242',
        borderBlack: '1px solid black',
        borderWhite: '1px solid white'
    },
    colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        bgGray: '#535252',
        bgDGray: '#424242',
        bgD2Gray: '#323232',
        bgLightGray: '#949494',
        bgBlue: '#5e84ef',
        tx: '#b2b2b2',
        // gray: {
        //     50: '#f7fafc',
        //     // ...
        //     900: '#171923',
        // },
        // ...
    },
}

const theme = extendTheme(preset)


export default theme