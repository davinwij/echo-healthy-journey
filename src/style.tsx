import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    typography: {
        h1: {
            fontSize: '36px',
            fontWeight: '800',
            backgroundColor: 'transparent'
        },
        h2: {
            fontSize: '16px',
            fontWeight: '700',
            backgroundColor: 'transparent'
        },
        h3: {
            fontSize: '14px',
            fontWeight: '700',
            backgroundColor: 'transparent'
        },
        h4: {
            fontSize: '24px',
            fontWeight: '800',
            backgroundColor: 'transparent'            
        },
        subtitle1: {
            fontSize: '16px',
            fontWeight: '600',
            backgroundColor: 'transparent'
        },
        subtitle2: {
            fontSize: '14px',
            fontWeight: '600',
            backgroundColor: 'transparent'
        },
    }
})

const LandingStyle = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column'
    },
    img: {
        marginLeft: '-50px'
    },
    text: {
        zIndex: 2,
        position: 'absolute',
        top: '59%',
        color: '#435939',
        fontFamily: 'Eczar',
    }
}

const HomeStyle = {
    container: {
        display: 'flex',        
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',        
    },    
    button1: {
        width: '200px',
        height: '200px',
        borderRadius: '25px',
        backgroundColor: '#435939',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        boxShadow: '0px 6px 8px #00000025'
    },
    button2: {
        width: '200px',
        height: '200px',
        borderRadius: '25px',
        backgroundColor: '#F77F00',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        boxShadow: '0px 6px 8px #00000025'
    },
}

const FormStyle = {
    submitBtn: {
        backgroundColor: '#F77F00',
        padding: '10px 40px',
        borderRadius: '8px',
        fontFamily: 'Eczra',
        color: 'white',
        border: 'none',              
        cursor: 'pointer'
    }
}

export {
    theme,
    LandingStyle,
    HomeStyle,
    FormStyle
}