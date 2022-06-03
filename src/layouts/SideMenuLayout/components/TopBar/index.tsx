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
  Link,
  Stack,
  Typography
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { AccountCircle } from '@mui/icons-material';
import {
  Search,
  SearchIconWrapper,
  StyledInputBase
} from '@/layouts/TopMenuLayout/components/TopBar';

const TopBar: React.FC = () => {
  return (
    <>
      <AppBar
        position="static"
        sx={{
          borderRadius: 100,
          bgcolor: 'background.secondary',
          px: { xs: 2, md: 3 },
          py: 1
        }}
      >
        <Stack>
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
              <Badge badgeContent="9+" color="error">
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
};
export default TopBar;
