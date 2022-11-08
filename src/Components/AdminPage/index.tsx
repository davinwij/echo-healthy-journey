import { Card, CardContent, Grid, Modal, ThemeProvider, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { userJourney } from '../../Interfaces/userJourney.interfaces'
import { getAllJourney } from '../../Services/UserJourney'
import { theme } from '../../style'

type Props = {}

const AdminPage = (props: Props) => {
  const [open, setOpen] = useState(true)  
  const [data, setData] = useState<userJourney[]>([])
  const { register, handleSubmit, formState: { errors } } = useForm({ shouldUseNativeValidation: true });

  const submitKey = (data: any) => {
    getAllJourney(data.key)
    .then(r => {
      setData(r.data)
      setOpen(false)
    })
    .catch(err => {      
      alert(err.response.data.msg)
    })
  }

  return (
    <ThemeProvider theme={theme}>
      <Modal open={open} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Box sx={{
          position: 'relative',      
          width: '300px',
          height: '100px',
          padding: 5
        }}>
          <form
              onSubmit={handleSubmit(submitKey)}
            >
              <Stack spacing={2}>
                <label htmlFor="Access Key">Input Access Key</label>
                <input style={{height: '20px', borderRadius: 1}} type="password" {...register('key', {
                  required: true
                })}/>
                <button type='submit'>Submit</button>
              </Stack>
          </form>        
        </Box>
      </Modal>      
      <Grid item container xs={12} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        {data.map((item, index) => {
          return <Card sx={{ minWidth: 350, width: '50%', marginTop: 2, marginBottom: 2, borderRadius: 5}} elevation={5} key={index}>
            <CardContent>
              <Typography variant="subtitle1" sx={{ fontSize: 14, display: 'flex', justifyContent: 'space-between' }} gutterBottom>
                <Box sx={{color: item.type === "Praise Report" ? '#435939' : '#AF5A00'}}>
                  {item.type === "Praise Report" ? '#KeepPraise' : '#KeepPray'}
                </Box>
                <Box sx={{color: '#F77F00'}}>
                  {item.created_at.split('T')[0]}
                </Box>
              </Typography>
              <Typography variant="h5" component="div">
                {item.nama.length > 15 ? item.nama.slice(0, 15) + '...' : item.nama}
              </Typography>
              <Typography variant='h2' sx={{ mb: 1.5 }}>
                {item.no_hp}
              </Typography>
              <Typography variant="subtitle2">
                {item.desc}
              </Typography>
            </CardContent>          
          </Card>
        })}
      </Grid>
    </ThemeProvider>
  )
}

export default AdminPage