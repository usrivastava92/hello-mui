import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  SxProps,
  Theme
} from '@mui/material';
import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { IMenuItem } from '@/config/menu/menu.config';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import { BrandLogo } from '@/layouts/TopMenuLayout/components/TopBar';
import { AppDivider } from '@/components/Divider';

interface MenuItemProps {
  item: IMenuItem;
  level?: number;
}

const MenuItem: React.FC<MenuItemProps> = ({
  item,
  level = 1
}): JSX.Element => {
  if (level <= 0) {
    level = 1;
  }
  const navigate = useNavigate();
  const [open, setOpen] = useState(item.isOpen);
  const hasNestedMenu = item.nesterItems && item.nesterItems.length > 0;
  const handleClick = () => {
    if (item.routerLink) {
      navigate(item.routerLink);
    } else {
      item.isOpen = !item.isOpen;
      setOpen(!open);
    }
  };
  return (
    <>
      <ListItemButton component="li" sx={{ py: 1 }} onClick={handleClick}>
        {item.icon}
        <ListItemText sx={{ ml: 1.5 }} primary={item.displayName} />
        {hasNestedMenu && <KeyboardArrowDownIcon />}
      </ListItemButton>
      <Box>
        <Menu menuItems={item.nesterItems} open={open} level={level + 1} />
      </Box>
    </>
  );
};

interface MenuProps {
  menuItems?: IMenuItem[];
  open: boolean;
  level?: number;
}

const getMenuSxProps = (level: number): SxProps<Theme> => {
  if (level >= 3) {
    return { borderRadius: 2, bgcolor: 'primary.700' };
  }
  if (level === 2) {
    return { borderRadius: 2, bgcolor: 'primary.700' };
  }
  return { borderRadius: 0, bgcolor: 'primary.500' };
};

const Menu: React.FC<MenuProps> = ({
  menuItems = [],
  open,
  level = 1
}): JSX.Element => {
  if (level <= 0) {
    level = 1;
  }

  return (
    <Collapse
      in={open}
      sx={{
        px: 2,
        ...getMenuSxProps(level)
      }}
    >
      {menuItems && menuItems.length > 0 && (
        <List component="ul">
          {menuItems.map((menuItem) => (
            <MenuItem key={menuItem.id} item={menuItem} level={level} />
          ))}
        </List>
      )}
    </Collapse>
  );
};

export interface MobileMenuProps {
  menuItems?: IMenuItem[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  menuItems = []
}): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <Box sx={{ display: { xs: 'block', md: 'none' } }} component="div">
      <Stack justifyContent="space-between" sx={{ mx: 2, my: 0.5 }}>
        <BrandLogo />
        <Stack onClick={toggleMenu}>
          {menuOpen ? (
            <CloseIcon
              sx={{ color: 'primary.contrastText' }}
              fontSize="large"
            />
          ) : (
            <MenuIcon sx={{ color: 'primary.contrastText' }} fontSize="large" />
          )}
        </Stack>
      </Stack>
      <AppDivider type="primary" />
      <Menu menuItems={menuItems} open={menuOpen} />
      <AppDivider type="primary" />
    </Box>
  );
};
