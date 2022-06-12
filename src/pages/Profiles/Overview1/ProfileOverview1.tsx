import React, { useState } from 'react';
import {
  Avatar,
  Card,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography
} from '@mui/material';
import { ProfileProps, randomProfile } from '@/pages/Profiles/profileData';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { AppDivider } from '@/components/Divider';

const TABS = ['Dashboard', 'Account & Profile', 'Activities', 'Tasks'];

const Profile: React.FC<ProfileProps> = ({ profileInfo }) => {
  const [selectedTab, setSelectedTab] = useState<string>(TABS[0]);
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) =>
    setSelectedTab(TABS[newValue]);
  return (
    <Grid className="intro-y" container spacing={2}>
      <Grid item xs={12}>
        <Card>
          <Grid container sx={{ p: 2 }}>
            <Grid
              item
              xs={12}
              md={4}
              display="flex"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              alignItems="center"
              sx={{ p: 2 }}
            >
              <Avatar
                sx={{ width: '5rem', height: '5rem', color: 'dark.lighter' }}
              ></Avatar>
              <Stack direction="column" alignItems="flex-start" sx={{ mx: 2 }}>
                <Typography variant="lg" fontWeight="medium">
                  {profileInfo.name}
                </Typography>
                <Typography color="dark.darker">
                  {profileInfo.profession}
                </Typography>
              </Stack>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems={{ xs: 'center', md: 'flex-start' }}
              sx={{
                p: 2,
                borderLeft: { md: 1 },
                borderRight: { md: 1 },
                borderTop: { xs: 1, md: 0 },
                borderBottom: { xs: 1, md: 0 },
                borderColor: {
                  xs: 'secondary.contrastBorder',
                  md: 'secondary.contrastBorder'
                }
              }}
            >
              <Stack justifyContent="flex-start" spacing={1}>
                <EmailIcon />
                <Typography variant="sm">{profileInfo.email}</Typography>
              </Stack>
              <Stack justifyContent="flex-start" spacing={1}>
                <InstagramIcon />
                <Typography variant="sm">{profileInfo.name}</Typography>
              </Stack>
              <Stack justifyContent="flex-start" spacing={1}>
                <TwitterIcon />
                <Typography variant="sm">{profileInfo.name}</Typography>
              </Stack>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems={{ xs: 'center', md: 'flex-start' }}
              sx={{ p: 2 }}
            >
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
            </Grid>
          </Grid>
          <AppDivider type="secondary" />
          <Tabs
            value={TABS.indexOf(selectedTab)}
            onChange={handleTabChange}
            variant="scrollable"
            indicatorColor="primary"
            textColor="inherit"
          >
            {TABS.map((tab) => (
              <Tab label={tab} />
            ))}
          </Tabs>
        </Card>
      </Grid>
    </Grid>
  );
};

export const ProfileOverview1: React.FC = () => {
  return (
    <>
      <Typography variant="lg" fontWeight="medium">
        Profile Overview 1
      </Typography>
      <Profile profileInfo={randomProfile()}></Profile>
    </>
  );
};
