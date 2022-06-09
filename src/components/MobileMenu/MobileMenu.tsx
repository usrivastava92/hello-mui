import {
  Box,
  CardMedia,
  Collapse,
  Divider,
  IconButton,
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
    return { borderRadius: 2, bgcolor: 'primary.darker' };
  }
  if (level === 2) {
    return { borderRadius: 2, bgcolor: 'primary.dark' };
  }
  return { borderRadius: 0, bgcolor: 'primary.main' };
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

  return (
    <Box sx={{ display: { xs: 'block', md: 'none' } }} component="div">
      <Stack justifyContent="space-between">
        <IconButton size="large" aria-label="open drawer">
          <CardMedia
            component="img"
            height={30}
            alt="logo"
            image="/src/assets/images/logo.png"
          />
        </IconButton>
        <IconButton
          onClick={() => setMenuOpen(!menuOpen)}
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Stack>
      <Divider />
      <Menu menuItems={menuItems} open={menuOpen} />
      <Divider />
    </Box>
  );
};
