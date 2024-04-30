
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMenu } from 'react-icons/hi';
import { BsCart2 } from 'react-icons/bs';
import './Navbar.css'
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Box
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openDepartments, setOpenDepartments] = useState(false);
  const menuOptions = [
    { text: 'Home', icon: <HomeIcon />, path: '/' },
    { text: 'About', icon: <InfoIcon />, path: '/about' },
    { 
      text: 'Departments', 
      icon: <FontAwesomeIcon icon={faCaretDown} />,path: '/department'
      // subItems: [
      //   { text: 'CSE', path: '/departments/' },
      //   { text: 'ECE', path: '/departments/' },
      //   { text: 'Civil', path: '/departments/civil' },
      //   { text: 'Mech', path: '/departments/mech' }
      // ] 
    },
    { text: 'Events', icon: <CommentRoundedIcon />, path: '/events' },
    { text: 'Contact', icon: <PhoneRoundedIcon />, path: '/contact' },
    { text: 'Upload', icon: <ShoppingCartRoundedIcon />, path: '/upload' },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <h1 style={{ color: '#ffa500' }}>Academic Confluences</h1>
      </div>
      <div className="navbar-links-container">
        {menuOptions.map((option, index) => (
          <React.Fragment key={index}>
            {option.subItems ? (
              <div>
                <div onClick={() => setOpenDepartments(!openDepartments)}>
                  {option.text} {option.icon}
                </div>
                {openDepartments && (
                  <ul>
                    {option.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link to={subItem.path}>{subItem.text}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link to={option.path}>{option.text}</Link>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="navbar-menu-container">
        <HiOutlineMenu onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        anchor="right"
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <React.Fragment key={item.text}>
                {item.subItems ? (
                  <div>
                    <div onClick={() => setOpenDepartments(!openDepartments)}>
                      {item.text} {item.icon}
                    </div>
                    {openDepartments && (
                      <ul>
                        {item.subItems.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <ListItemButton
                              component={Link}
                              to={subItem.path}
                            >
                              <ListItemText primary={subItem.text} />
                            </ListItemButton>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <ListItem disablePadding>
                    <ListItemButton component={Link} to={item.path}>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                )}
              </React.Fragment>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
