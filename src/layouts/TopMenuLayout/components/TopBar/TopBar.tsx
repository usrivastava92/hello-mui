import React from 'react';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Breadcrumbs,
  IconButton,
  InputAdornment,
  InputBase,
  InputBaseProps,
  Link,
  Stack,
  SxProps,
  Theme,
  Typography
} from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { AppDivider } from '@/components/Divider';

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
        size="large"
        edge="end"
        sx={{
          display: { md: 'none', xs: 'flex' }
        }}
      >
        <SearchIcon />
      </IconButton>
    </>
  );
};

export interface BrandLogoProps {
  sx?: SxProps<Theme>;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  sx,
  className
}): JSX.Element => {
  const navigate = useNavigate();
  return (
    <Avatar
      className={className}
      src="/assets/images/logo.png"
      sx={{ cursor: 'pointer', ...sx }}
      onClick={() => navigate('/')}
    />
  );
};

export const TopBar: React.FC = (): JSX.Element => {
  return (
    <>
      <AppBar
        position="static"
        sx={{
          bgcolor: 'background.default',
          px: { xs: 2, md: 3 },
          py: { xs: 0, md: 1 }
        }}
      >
        <Stack>
          <BrandLogo
            sx={{ my: 1, mx: 'auto', display: { xs: 'none', md: 'flex' } }}
            className="-intro-x"
          />
          <AppDivider
            type="primary"
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
            <IconButton size="large" edge="end">
              <Badge badgeContent="9+" color="error" component="div">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton size="large" edge="end">
              <AccountCircle />
            </IconButton>
          </Stack>
        </Stack>
      </AppBar>
      <AppDivider type="primary" />
    </>
  );
};
