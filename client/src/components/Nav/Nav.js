import React, {useEffect, useState} from "react";
import { useDispatch} from "react-redux";
import { NavLink} from "react-router-dom";
import { getCountries, searchCountries, removeCountries} from "../../redux/actions";
import "./nav.css";
import logo from "./map.jpg";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { MenuItem } from '@mui/material';
import Menu from '@mui/material/Menu';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import {Icon} from "@mdi/react";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  marginTop: 8,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.black[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));



function Nav(){
	const [input, setInput] =useState("");
	 const dispatch = useDispatch(); 
	useEffect(()=>{
		dispatch(removeCountries())
		dispatch(getCountries())
	}, [dispatch])
	//ACA METER UN USEEFFECT como componentDidMount

	const handleInput = e => {
		setInput(e.target.value)
	}
	const buscar = () => {
		dispatch(removeCountries())
		dispatch(searchCountries(input))
	}
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

	// aca poner una funcion que handle el "buscar por nombre";
	return (
		<Box sx={{ flexGrow: 1 }}>
		<AppBar position="static" style={{backgroundColor: '#222831'}}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, marginLeft: 0,marginRight:45  ,paddingLeft: 0,maxWidth: 190, color: '#00ADB5' }}
          >
            Countries App
          </Typography>
          <Search onChange={handleInput}  value={input}>
            <StyledInputBase
              placeholder="Country…"
              inputProps={{ 'aria-label': 'search' }

          	}
            />
          </Search>
          <Button onClick={buscar} style={{backgroundColor: '#00ADB5', color: '#000000', height: 38, marginTop: 10, marginLeft: 4, width: 15}}><SearchIcon /> </Button>
          <Button
                style={{backgroundColor: '#222831', marginLeft: '25rem', marginTop: '0.5rem'}}
                id="demo-customized-button"
                aria-controls="demo-customized-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                
            >
               <MenuIcon/>
      </Button>
          <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <NavLink to="/home" className="home"> Home </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
         <NavLink to="/activities" className="activities"> Activities </NavLink>
        </MenuItem>
      </StyledMenu>
          
        </Toolbar>
      </AppBar>
      
    </Box>

		
		

	)
}


export default Nav;
