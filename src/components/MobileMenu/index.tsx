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
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

interface MenuItem {
  id: string;
  isOpen: boolean;
  icon: JSX.Element;
  displayName: string;
  routerLink?: string;
  isActive?: boolean;
  nesterItems: MenuItem[];
}

interface MenuItemProps {
  menuItem: MenuItem;
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
      <Box>
        <Menu menuItems={menuItem.nesterItems} open={open} level={level + 1} />
      </Box>
    </Link>
  );
};

interface MenuProps {
  menuItems: MenuItem[];
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
  menuItems,
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

const items = [
  {
    displayName: 'Dashboard',
    isOpen: false,
    id: 'dashboard',
    icon: <AcUnitIcon />,
    nesterItems: [],
    routerLink: '/',
    isActive: true
  },
  {
    displayName: 'AWS',
    isOpen: false,
    id: 'aws/storage/aws',
    icon: <AccessibilityIcon />,
    nesterItems: [
      {
        displayName: 'Dynamo DB',
        isOpen: false,
        id: 'aws/storage/dynamoDB',
        nesterItems: [
          {
            displayName: 'Hello',
            isOpen: false,
            id: 'aws/storage/hello',
            icon: <CloudDownloadIcon />,
            routerLink: 'test',
            nesterItems: []
          }
        ],
        routerLink: 'dynamodb',
        icon: <AccessTimeIcon />
      }
    ]
  }
];

export default function MobileMenu(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Box
      sx={{
        display: { xs: 'block', md: 'none' }
      }}
      component="div"
    >
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
          <AccountCircle />
        </IconButton>
      </Stack>
      <Menu menuItems={items} open={menuOpen} />
    </Box>
  );
}
