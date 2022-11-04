import { Grid } from '@mui/material'
import { useState } from 'react'
import { HomeStyle } from '../../style'
import Form from '../Form'
import Bottom from '../StaticBar/Bottom'
import Loading from '../StaticBar/Loading'
import Top from '../StaticBar/Top'
import SuccessMessage from '../SuccessMsg'
import MenuButton from './MenuButton'

type Props = {}

const Home = (props: Props) => {

  const [menu, setMenu] = useState<string>('Home')

  const classes = HomeStyle
  const switchComponent = (menu: string) => {
    switch (menu) {
      case 'Home': return (
        <MenuButton praise={() => setMenu('Praise Report')} pray={() => setMenu('Prayer Request')} />    
      )      
      case 'Praise Report': return (
        <Form back={() => setMenu('Home')} type={menu} text="#KeepPraise" done={() => setMenu('Done')} loading={() => setMenu('Loading')}/>
      )      
      case 'Prayer Request': return (
        <Form back={() => setMenu('Home')} type={menu} text="#KeepPray" done={() => setMenu('Done')} loading={() => setMenu('Loading')}/>
      )
      case 'Done': return (
        <SuccessMessage back={() => setMenu('Home')} />
      )   
      case 'Loading': return (
        <Loading />
      )   
    }
  }

  return (
    <Grid item container xs={12} sx={classes.container}>
      <Top />
      <Grid item xs={12}>
        {switchComponent(menu)}
      </Grid>
      <Bottom />
    </Grid>
  )
}

export default Home