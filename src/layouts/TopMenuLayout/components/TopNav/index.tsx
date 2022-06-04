import React, { useState } from 'react';
import { Box, List, ListItemButton, ListItemText } from '@mui/material';
import { IMenuItem } from '@/config/menu/menu.config';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface TopNavProps {
  menuItems?: IMenuItem[];
}

const TopNav: React.FC<TopNavProps> = ({ menuItems = [] }): JSX.Element => {
  return (
    <Box sx={{ mt: 2, px: 6, display: { xs: 'none', md: 'block' } }}>
      <List
        component="nav"
        sx={{ display: 'flex', flexDirection: 'row', padding: 0 }}
      >
        {menuItems.map((item) => (
          <ListItemButton key={item.id}>
            {item.icon}
            <ListItemText sx={{ ml: 1.5 }} primary={item.displayName} />
            {item.nesterItems && item.nesterItems.length > 0 && (
              <KeyboardArrowDownIcon />
            )}
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default TopNav;
