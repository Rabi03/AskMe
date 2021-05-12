import { DefaultTheme } from '@react-navigation/native'

const myTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'green',
        background:'white'
    }
}

export default myTheme