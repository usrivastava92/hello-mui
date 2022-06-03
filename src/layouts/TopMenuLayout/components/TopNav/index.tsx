import React from 'react';
import { Box, List, ListItemButton, ListItemText } from '@mui/material';
import { IMenuItem } from '@/config/menu/menu.config';

interface TopNavProps {
  menuItems?: IMenuItem[];
}

const TopNav: React.FC<TopNavProps> = ({ menuItems = [] }): JSX.Element => {
  return (
    <Box sx={{ pt: 4, px: 6 }}>
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
