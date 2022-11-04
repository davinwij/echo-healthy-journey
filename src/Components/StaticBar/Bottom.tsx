import { Grid, Typography, ThemeProvider } from '@mui/material'
import { theme, TopStyle } from './style'

type Props = {}

const Bottom = (props: Props) => {

    const classes = TopStyle
  return (
    <ThemeProvider theme={theme}>
        <Grid item xs={12} sx={classes.container2}>
            <Typography variant="subtitle1" sx={classes.textUp}>#KeepPray #KeepRead #KeepPraise</Typography>
            <Typography variant="subtitle1" sx={classes.textBottom}>@echogeneration</Typography>
        </Grid>
    </ThemeProvider>
  )
}

export default Bottom