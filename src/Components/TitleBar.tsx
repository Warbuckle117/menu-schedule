import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { navLinkStyles } from '../Helpers/Styles';


export default function TitleBar() {

  return (
    <>
      <AppBar>
        <Toolbar style={{ justifyContent: "flex-end" }}>
          <Link to="/" style={navLinkStyles}><Button color="inherit">HomePage</Button></Link>
          <Link to="/menus" style={navLinkStyles}><Button color="inherit">Menus</Button></Link>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  )
}
