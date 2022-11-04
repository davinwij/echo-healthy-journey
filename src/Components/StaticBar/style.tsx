import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    transitions: {
        duration: {
            enteringScreen: 2000,
            leavingScreen: 100,
        }
    },
    typography: {
        fontFamily: 'Eczar',
        h1: {
            fontSize: '36px',
            fontWeight: '800'
        },
        h2: {
            fontSize: '16px',
            fontWeight: '700'
        },
        h3: {
            fontSize: '14px',
            fontWeight: '700'
        },
        h4: {
            fontSize: '24px',
            fontWeight: '800'
        },
        subtitle1: {
            fontSize: '14px',
            fontWeight: '600'
        },
    }
})

const TopStyle = {
    img: {
        width: '450px',               
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',        
    },
    textUp: {
        color: '#AF5A00',        
    },
    textBottom: {
        color: '#435939'
    },
    container2: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '-30px',
        marginBottom: '50px'
    }
}

export {
    theme,
    TopStyle
}