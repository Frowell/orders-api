import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <svg height="36px" width="40px">
        	<path stroke="#db3534" fill="#db3534" d="M41.7819 35.8687h-6.5536L20.1878 20.8402h6.5536L41.782 35.8687zM36.177 2.8243A9.1497 9.1497 0 0029.52 0H4.9505A2.3174 2.3174 0 003.3056 3.948l7.6336 7.6415 6.5317-.012-6.9295-6.9453H29.518a4.6024 4.6024 0 014.6184 4.6302 4.5746 4.5746 0 01-1.3406 3.2679 4.6303 4.6303 0 01-3.2758 1.3565l-24.8818-.004a4.6303 4.6303 0 00-3.2778 7.908l14.0798 14.0778h6.5417L4.6382 18.5131l24.8818.012a9.2486 9.2486 0 006.5418-2.7089 9.2511 9.2511 0 002.7091-6.5417 9.129 9.129 0 00-2.5939-6.4502zm-14.8415 24.132h-3.2758l-6.116-6.116h3.2638l6.128 6.116zm8.8965 8.9124h-3.2718l-6.116-6.116h3.2659l6.122 6.116z"></path>
          </svg>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}