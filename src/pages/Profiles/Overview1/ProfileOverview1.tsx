import React from 'react';
import { Avatar, Card, Grid, Stack, Typography } from '@mui/material';
import { ProfileProps, randomProfile } from '@/pages/Profiles/profileData';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Profile: React.FC<ProfileProps> = ({ profileInfo }) => {
  return (
    <Grid className="intro-y" container spacing={2}>
      <Grid item xs={12}>
        <Card>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            sx={{ m: 2 }}
            justifyContent="space-between"
          >
            <Stack
              spacing={2}
              justifyContent="flex-start"
              sx={{ width: '34%' }}
            >
              <Avatar
                sx={{ width: 120, height: 120, color: 'dark.lighter' }}
              ></Avatar>
              <Stack direction="column" alignItems="flex-start">
                <Typography variant="lg" fontWeight="medium">
                  {profileInfo.name}
                </Typography>
                <Typography color="dark.darker">
                  {profileInfo.profession}
                </Typography>
              </Stack>
            </Stack>
            <Stack
              spacing={1}
              direction="column"
              alignItems={{ xs: 'center', md: 'flex-start' }}
              justifyContent="center"
              sx={{ width: '33%' }}
            >
              <Stack
                justifyContent="flex-start"
                spacing={1}
                color="dark.darker"
              >
                <EmailIcon />
                <Typography variant="sm">{profileInfo.email}</Typography>
              </Stack>
              <Stack
                justifyContent="flex-start"
                spacing={1}
                color="dark.darker"
              >
                <InstagramIcon />
                <Typography variant="sm">{profileInfo.name}</Typography>
              </Stack>
              <Stack
                justifyContent="flex-start"
                spacing={1}
                color="dark.darker"
              >
                <TwitterIcon />
                <Typography variant="sm">{profileInfo.name}</Typography>
              </Stack>
            </Stack>
            <Stack
              spacing={1}
              direction="column"
              alignItems={{ xs: 'center', md: 'flex-start' }}
              justifyContent="center"
              sx={{ width: '33%' }}
            >
              <Typography variant="sm" fontWeight="bold">
                Sales Growth
              </Typography>
              <Typography variant="sm">
                USP:{' '}
                <Typography display="inline" color="success.main">
                  +23%
                </Typography>
              </Typography>
              <Typography variant="sm">
                STP:{' '}
                <Typography display="inline" color="error">
                  -2%
                </Typography>
              </Typography>
            </Stack>
          </Stack>
        </Card>
      </Grid>
      <Grid item></Grid>
      <Grid item></Grid>
    </Grid>
  );
};

export const ProfileOverview1: React.FC = () => {
  return (
    <>
      <Typography variant="lg">Profile Overview 1</Typography>
      <Profile profileInfo={randomProfile()}></Profile>
    </>
  );
};
