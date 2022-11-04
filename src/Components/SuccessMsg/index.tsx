import { ThemeProvider, Grid, Container, Typography } from '@mui/material'
import { theme } from '../../style'
import gif from '../../Assets/confetti.gif'

type Props = {
    back: () => void;
}

const SuccessMessage = (props: Props) => {
  return (
    <ThemeProvider theme={theme}>
        <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '600px'}}>
            <Container sx={{ height: '90%', minWidth: '350px', width: '30%', display: 'flex', flexDirection: 'column', backgroundColor: 'white', borderRadius: '25px', alignItems: 'center'}}>
                <Typography variant='h1' sx={{fontFamily: 'Eczar', color: '#F77F00', marginTop: 2}}>Thankyou!</Typography>
                <Typography variant='h1' sx={{fontFamily: 'Eczar', color: '#F77F00'}}>{localStorage.getItem('nama')?.split(' ')[0]}</Typography>
                <Typography variant='subtitle2' sx={{fontFamily: 'Montserrat', color: '#AF5A00', textAlign: 'center', marginTop: 2}}>For Submitting your JOURNEY with us!</Typography>
                <Typography variant='subtitle2' sx={{fontFamily: 'Montserrat', color: '#AF5A00', textAlign: 'center'}}>On</Typography>
                <Typography variant='subtitle2' sx={{fontFamily: 'Montserrat', color: '#AF5A00', textAlign: 'center'}}>{localStorage.getItem('date')}</Typography>
                <img src={gif} alt="" style={{backgroundColor: 'transparent', width: '200px'}}/>
                <Typography variant='subtitle2' sx={{fontFamily: 'Montserrat', color: '#AF5A00', textAlign: 'center', fontWeight: 500}}>For the reward, you can spin the roulette on the next Sunday Service.</Typography>
                <Typography variant='subtitle2' sx={{fontFamily: 'Montserrat', color: '#AF5A00', textAlign: 'center', fontWeight: 500}}>Screenshot this page, and show to us!</Typography>
                <Typography variant='h2' sx={{fontFamily: 'Eczar', color: '#F77F00', marginTop: '20px', cursor: 'pointer'}} onClick={props.back}>Back To Home Page</Typography>
            </Container>
        </Grid>
    </ThemeProvider>
  )
}

export default SuccessMessage