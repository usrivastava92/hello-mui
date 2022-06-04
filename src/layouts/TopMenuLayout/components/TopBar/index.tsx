import React from 'react';
import {
  alpha,
  AppBar,
  Badge,
  Box,
  Breadcrumbs,
  Button,
  CardMedia,
  Divider,
  IconButton,
  InputBase,
  Link,
  Stack,
  styled,
  Typography
} from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto'
  }
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block'
    }
  }
}));

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
          image="src/assets/images/logo.png"
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
            <Search sx={{ borderRadius: 30 }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
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
