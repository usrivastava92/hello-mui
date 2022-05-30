import React from 'react';
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

export interface MenuItem {
  id: string;
  isOpen: boolean;
  icon: JSX.Element;
  displayName: string;
  routerLink?: string;
  isActive?: boolean;
  nesterItems: MenuItem[];
}

export const menuItems: MenuItem[] = [
  {
    displayName: 'Dashboard',
    isOpen: false,
    id: 'dashboard',
    icon: <HomeIcon />,
    nesterItems: [],
    routerLink: '/',
    isActive: true
  },
  {
    displayName: 'Menu Layout',
    isOpen: false,
    id: 'menuLayout',
    icon: <MenuOpenIcon />,
    routerLink: '/404',
    nesterItems: []
  }
];

const TopNav: React.FC = (): JSX.Element => {
  return (
    <Box className="top-nav" sx={{ pt: 4, px: 6 }}>
      <List sx={{ display: 'flex', flexDirection: 'row' }} component="nav">
        {menuItems.map((item, index) => (
          <ListItemButton
            key={index}
            sx={{
              textAlign: 'center',
              direction: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              border: 1,
              borderRadius: '1rem'
            }}
          >
            {item.icon}
            <ListItemText primary={item.displayName} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default TopNav;
