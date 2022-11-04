import { Grid, ThemeProvider, Typography, Container } from '@mui/material'
import { HomeStyle, theme } from '../../style'
import Button from './Button'

type Props = {
    praise: () => void;
    pray: () => void;
}

const MenuButton = (props: Props) => {

    const classes = HomeStyle
  return (
    <ThemeProvider theme={theme}>
        <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '600px'}}>
            <Button classes={classes.button1} onClick={props.praise}>
                <Container sx={{backgroundColor: 'transparent', height: '88%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                    <Typography sx={{backgroundColor: 'transparent', fontFamily: 'Eczar', marginTop: 3}} variant='h4'>Praise Report</Typography>
                </Container>
                <Container sx={{backgroundColor: 'transparent', height: '12%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>                    
                    <Typography sx={{backgroundColor: 'transparent', fontFamily: 'Montserrat', paddingBottom: 2, textAlign: 'left', width: '100%'}} variant='h2'>#KeepPraise</Typography>
                </Container>        
            </Button>
            <Typography variant="subtitle1" sx={{color: '#AF5A00', padding: '20px', backgroundColor: 'transparent'}}>Or</Typography>
            <Button classes={classes.button2} onClick={props.pray}>
                <Container sx={{backgroundColor: 'transparent', height: '88%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                    <Typography sx={{backgroundColor: 'transparent', fontFamily: 'Eczar', marginTop: 3}} variant='h4'>Prayer Request</Typography>
                </Container>
                <Container sx={{backgroundColor: 'transparent', height: '12%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>                    
                    <Typography sx={{backgroundColor: 'transparent', fontFamily: 'Montserrat', paddingBottom: 2, textAlign: 'left', width: '100%'}} variant='h2'>#KeepPray</Typography>
                </Container>
            </Button>
        </Grid>
    </ThemeProvider>
  )
}

export default MenuButton