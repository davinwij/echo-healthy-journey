import { Grid, Slide, ThemeProvider } from '@mui/material'
import logo from '../../Assets/Logoicon.png'
import { theme, TopStyle } from './style'

type Props = {}

const Top = (props: Props) => {
    const classes = TopStyle
  return (
    <ThemeProvider theme={theme}>
        <Grid item xs={12} sx={classes.container}>
            <Slide direction="down" in={true}>
                <img src={logo} alt="" style={classes.img}/>
            </Slide>
        </Grid>
    </ThemeProvider>
  )
}

export default Top