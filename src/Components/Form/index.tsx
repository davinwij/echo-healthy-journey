import { ThemeProvider, Grid, Container, Box, Typography } from '@mui/material'
import { FormStyle, theme } from '../../style'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Button from '../Home/Button';
import { useForm } from 'react-hook-form'
import { userJourney } from '../../Interfaces/userJourney.interfaces';
import { submitJourney } from '../../Services/UserJourney';

type Props = {
    back: () => void;
    done: () => void;
    loading: () => void;
    type: string;
    text: string;
}

const Form = (props: Props) => {
    const classes = FormStyle
    const { register, handleSubmit, formState: { errors } } = useForm({ shouldUseNativeValidation: true });
    
    const onSubmit = (data: any) => {
        const completeData = {
            ...data,
            type: props.type
        }

        const date = new Date(Date.now())

        submitJourney(completeData)
        .then(r => {
            localStorage.setItem('nama', data.nama)    
            localStorage.setItem('date', date.toDateString())    
            props.done()
        })
        .catch(err => {
            alert(err)
        })

    }

  return (
    <ThemeProvider theme={theme}>
        <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '600px'}}>
            <Container sx={{height: '100%', minWidth: '350px', width: '30%', display: 'flex', flexDirection: 'column'}}>
                <Box sx={{flex: 1}}>
                    <Box>
                        <Box sx={{height: '50px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between'}}>
                            <Box onClick={props.back}>                                
                                <KeyboardBackspaceIcon fontSize={'large'} sx={{cursor: 'pointer'}} />                                
                            </Box>
                            <Box>
                                <Typography variant='h1' sx={{fontFamily: 'Eczar', color: props.type === 'Praise Report' ? '#435939' : '#F77F00'}}>{props.type}</Typography>
                            </Box>
                        </Box>
                        <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                            <Typography variant='subtitle1' sx={{color: props.type === 'Prayer Request' ? '#435939' : '#F77F00'}}>{props.text}</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{flex: 5}}>
                    <form onSubmit={handleSubmit(onSubmit)} style={{display: 'flex', gap: '15px', flexDirection: 'column'}}>
                        <Box>                        
                            <label htmlFor="name">Nama</label>
                            <input type="text" id='name' {...register('nama', {
                                required: true,
                                maxLength: 25,                        
                            })}/>
                            <p>{errors.name?.type === 'required' && "Name can't be empty!"}</p>
                        </Box>
                        <Box>                        
                            <label htmlFor="hp">No. Handphone</label>
                            <input type="text" id='hp' {...register('no_hp', {
                                required: true,
                                minLength: 10,                            
                                maxLength: 15,                            
                            })} />
                            <p>{errors.hp?.type === 'required' && "No. Handphone can't be empty!"}</p>
                            <p>{errors.hp?.type === 'minLength' && "Minimum 10 number"}</p>                            
                        </Box>
                        <Box>                        
                            <label htmlFor="desc">{props.type}</label>
                            <textarea id="desc" cols={30} rows={10} {...register('desc', {
                                required: true,
                                minLength: 20,
                                maxLength: 500
                            })}></textarea>
                            <p>{errors.desc?.type === 'required' && "Description can't be empty!"}</p>
                            <p>{errors.desc?.type === 'minLength' && "Minimum 20 character"}</p>
                        </Box>
                    </form>
                </Box>
                <Box sx={{flex: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end'}}>
                    <Button onClick={handleSubmit(onSubmit)} classes={classes.submitBtn}>
                        <Typography variant="h2" sx={{backgroundColor: 'transparent', fontFamily: 'Eczra'}}>Submit</Typography>
                    </Button>
                </Box>
            </Container>
        </Grid>
    </ThemeProvider>
  )
}

export default Form