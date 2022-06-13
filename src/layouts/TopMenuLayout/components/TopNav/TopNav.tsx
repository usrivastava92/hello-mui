import React from 'react';
import { Box, List, ListItemButton, ListItemText, Stack } from '@mui/material';
import { IMenuItem } from '@/config/menu/menu.config';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './topNav.scss';
import { getBgColorByLevel } from '@/layouts/SideMenuLayout/components/SideNav';
import { useNavigate } from 'react-router-dom';

interface MenuItemProps {
  item: IMenuItem;
  level?: number;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, level = 1 }) => {
  if (level <= 0) {
    level = 1;
  }
  const navigate = useNavigate();
  const hasNestedItems = item.nesterItems && item.nesterItems.length > 0;
  const handleClick = () => {
    if (item.routerLink) {
      navigate(item.routerLink);
    }
  };
  return (
    <ListItemButton
      component="li"
      className={`top-menu 
      ${level === 1 ? '-intro-y' : ''}
      ${level === 1 && item.isActive ? 'top-menu--active' : ''}
      `}
      onClick={handleClick}
    >
      {item.icon}
      <ListItemText primary={item.displayName} sx={{ ml: 2 }} />
      {hasNestedItems && (
        <KeyboardArrowDownIcon className="top-menu__sub-icon" />
      )}
      {hasNestedItems && (
        <Menu menuItems={item.nesterItems} level={level + 1} />
      )}
    </ListItemButton>
  );
};

interface MenuProps {
  menuItems?: IMenuItem[];
  level?: number;
}

const Menu: React.FC<MenuProps> = ({ menuItems = [], level = 1 }) => {
  if (level <= 0) {
    level = 1;
  }
  return (
    <Stack
      component={List}
      sx={{
        padding: 0,
        bgcolor: getBgColorByLevel(level)
      }}
    >
      {menuItems.map((item) => (
        <MenuItem key={item.id} item={item} level={level} />
      ))}
    </Stack>
  );
};

export interface TopNavProps {
  menuItems?: IMenuItem[];
}

export const TopNav: React.FC<TopNavProps> = ({
  menuItems = []
}): JSX.Element => {
  return (
    <Box
      sx={{ mt: 2, px: 6, display: { xs: 'none', md: 'block' } }}
      className="top-nav"
      component="nav"
    >
      <Menu menuItems={menuItems} />
    </Box>
  );
};
