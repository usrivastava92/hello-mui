import {
  Box,
  CardMedia,
  Collapse,
  IconButton,
  Link,
  List,
  Stack,
  SxProps,
  Theme,
  Typography
} from '@mui/material';
import React, { useState } from 'react';
import { AccountCircle } from '@mui/icons-material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { IMenuItem } from '@/config/menu/menu.config';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
interface MenuItemProps {
  menuItem: IMenuItem;
  level?: number;
}

const MenuItem: React.FC<MenuItemProps> = ({
  menuItem,
  level = 1
}): JSX.Element => {
  if (level <= 0) {
    level = 1;
  }
  const [open, setOpen] = useState(menuItem.isOpen);
  return (
    <>
      <Link
        href={menuItem.routerLink}
        width="100%"
        component="li"
        sx={{ py: 1 }}
        onClick={() => setOpen(!open)}
      >
        <Stack spacing={2}>
          {menuItem.icon}
          <Typography>{menuItem.displayName}</Typography>
          <Box sx={{ flexGrow: 1 }} />
          {menuItem.nesterItems && menuItem.nesterItems.length > 0 && (
            <KeyboardArrowDownIcon />
          )}
        </Stack>
      </Link>
      <Box>
        <Menu menuItems={menuItem.nesterItems} open={open} level={level + 1} />
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
    return { borderRadius: 2, bgcolor: 'primary.darker', border: 0 };
  }
  if (level === 2) {
    return { borderRadius: 2, bgcolor: 'primary.dark', border: 0 };
  }
  return {
    borderRadius: 0,
    bgcolor: 'primary.main',
    borderBottom: 1,
    borderColor: 'border.main'
  };
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
            <MenuItem key={menuItem.id} menuItem={menuItem} level={level} />
          ))}
        </List>
      )}
    </Collapse>
  );
};

interface MobileMenuProps {
  menuItems?: IMenuItem[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  menuItems = []
}): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Box sx={{ display: { xs: 'block', md: 'none' } }} component="div">
      <Stack
        justifyContent="space-between"
        sx={{ borderBottom: 1, borderColor: 'border.main' }}
      >
        <IconButton size="large" aria-label="open drawer">
          <CardMedia
            component="img"
            height={30}
            alt="Localstack UI"
            image="src/assets/images/logo.png"
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
      <Menu menuItems={menuItems} open={menuOpen} />
    </Box>
  );
};

export default MobileMenu;
