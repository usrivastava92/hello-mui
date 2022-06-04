import React from 'react';
import {
  AppBar,
  Badge,
  Box,
  Breadcrumbs,
  Button,
  CardMedia,
  Divider,
  IconButton,
  InputAdornment,
  InputBase,
  InputBaseProps,
  Link,
  Stack,
  Typography
} from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SearchIcon from '@mui/icons-material/Search';

export const SearchInput: React.FC<InputBaseProps> = ({ sx }): JSX.Element => {
  return (
    <>
      <InputBase
        sx={{
          display: { md: 'flex', xs: 'none' },
          borderRadius: 30,
          pl: 2,
          height: 40,
          bgcolor: 'primary.dark',
          ...sx
        }}
        placeholder="Search..."
        endAdornment={
          <InputAdornment sx={{ color: '#999' }} position="start">
            <SearchIcon />
          </InputAdornment>
        }
      />
      <IconButton
        aria-label="delete"
        size="large"
        sx={{ display: { md: 'none', xs: 'flex' } }}
      >
        <SearchIcon />
      </IconButton>
    </>
  );
};

const BrandLogo = (): JSX.Element => {
  return (
    <Button
      className="-intro-x"
      disableRipple={true}
      sx={{
        display: { xs: 'none', md: 'flex' },
        typography: 'h6'
      }}
      endIcon={
        <CardMedia
          component="img"
          height={30}
          alt="Localstack UI"
          image="/src/assets/images/logo.png"
        />
      }
    >
      Localstack
    </Button>
  );
};

export default function TopBar(): JSX.Element {
  return (
    <>
      <AppBar
        position="static"
        sx={{
          bgcolor: 'background.default',
          px: { xs: 2, md: 3 },
          py: 1
        }}
      >
        <Stack>
          <BrandLogo />
          <Divider
            flexItem={true}
            orientation="vertical"
            sx={{ mx: 3, display: { xs: 'none', md: 'flex' } }}
          />
          <Breadcrumbs
            className="-intro-x"
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Link underline="hover" key="1" href="/">
              Application
            </Link>
            <Typography key="2" fontWeight="bold">
              Dashboard
            </Typography>
          </Breadcrumbs>
          <Box sx={{ flexGrow: 1 }} />
          <Stack className="intro-x" justifyContent="space-between">
            <SearchInput />
            <IconButton size="large" aria-label="show 9+ new notifications">
              <Badge badgeContent="9+" color="error" component="div">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
            >
              <AccountCircle />
            </IconButton>
          </Stack>
        </Stack>
      </AppBar>
      <Divider />
    </>
  );
}
