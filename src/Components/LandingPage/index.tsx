import { Grid, Typography, Zoom } from '@mui/material'
import gif from '../../Assets/Logogif.gif'
import { ThemeProvider } from '@mui/material/styles'
import { LandingStyle, theme } from '../../style'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {}

const LandingPage = (props: Props) => {

    const classes = LandingStyle
    const navigate = useNavigate()

    useEffect(() => {
      const navToHome = setTimeout(() => {
        navigate("/home")
      }, 5000);
    
      return () => {
        clearTimeout(navToHome)
      }
    }, [])
    
    
  return (
    <ThemeProvider theme={theme}>
        <Grid item container xs={12} sx={classes.container}>
            <img src={gif} alt="" style={classes.img}/>
            <Zoom in={true} style={{ transitionDelay: '2000ms' }}>
                <Typography variant='subtitle1' sx={classes.text}>@echogeneration</Typography>
            </Zoom>
        </Grid>
    </ThemeProvider>
  )
}

export default LandingPage