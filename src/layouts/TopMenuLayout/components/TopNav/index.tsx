import React from 'react';
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Popper,
  Stack
} from '@mui/material';
import { IMenuItem } from '@/config/menu/menu.config';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface TopNavProps {
  menuItems?: IMenuItem[];
}

interface MenuProps {
  menuItems: IMenuItem[];
}

const Menu: React.FC<MenuProps> = ({ menuItems }) => {
  return (
    <Box sx={{ m: 1, bgcolor: 'primary.dark' }}>
      <MenuList>
        {menuItems.map((item) => (
          <MenuItem key={item.id}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.displayName}</ListItemText>
          </MenuItem>
        ))}
      </MenuList>
    </Box>
  );
};

const TopNav: React.FC<TopNavProps> = ({ menuItems = [] }): JSX.Element => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);
  const open = Boolean(anchorEl);

  return (
    <Box sx={{ mt: 2, px: 6, display: { xs: 'none', md: 'block' } }}>
      <List
        component="nav"
        sx={{ display: 'flex', flexDirection: 'row', padding: 0 }}
      >
        {menuItems.map((item) => (
          <ListItemButton
            key={item.id}
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}
          >
            <Stack spacing={1.5}>
              {item.icon}
              <ListItemText primary={item.displayName} />
              {item.nesterItems && item.nesterItems.length > 0 && (
                <KeyboardArrowDownIcon />
              )}
            </Stack>
            {item.nesterItems && item.nesterItems.length > 0 && (
              <Popper open={open} anchorEl={anchorEl} placement="right-end">
                <Menu menuItems={item.nesterItems} />
              </Popper>
            )}
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default TopNav;
