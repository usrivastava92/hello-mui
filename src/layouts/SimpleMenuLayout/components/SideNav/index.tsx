import {
  AppBar,
  Box,
  Button,
  CardMedia,
  Divider,
  List,
  ListItemButton,
  ListItemText
} from '@mui/material';
import React from 'react';
import { IMenuItem } from '@/config/menu/menu.config';
import { menuItems } from '@/layouts/TopMenuLayout/components/TopNav';

interface SideNavProps {
  variant?: 'default' | 'mini';
  menuItems?: IMenuItem[];
}

const SideNav: React.FC<SideNavProps> = ({
  variant = 'default',
  menuItems = []
}): JSX.Element => {
  const isMini = variant == 'mini';

  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        height: '100vh',
        width: isMini ? '85px' : '230px',
        px: 'auto',
        pb: '4rem',
        overflowX: 'hidden',
        display: { md: 'block', xs: 'none' }
      }}
    >
      <AppBar
        sx={{
          borderColor: 'border.main',
          bgcolor: 'background.default',
          color: 'white'
        }}
        elevation={0}
        position="sticky"
      >
        <Button
          className="-intro-x"
          disableRipple={true}
          sx={{ typography: 'h6', pr: isMini ? 2.5 : 'auto' }}
          endIcon={
            <CardMedia
              component="img"
              height={30}
              alt="Localstack UI"
              image="src/assets/images/logo.png"
            />
          }
        >
          {!isMini && 'Localstack'}
        </Button>
        <Divider variant="middle" flexItem={true} light={true} />
        <List>
          {menuItems.map((item, index) => (
            <ListItemButton key={index} sx={{ pl: isMini ? 4 : 'auto' }}>
              {item.icon}
              {!isMini && <ListItemText primary={item.displayName} />}
            </ListItemButton>
          ))}
        </List>
      </AppBar>
    </Box>
  );
};
export default SideNav;
