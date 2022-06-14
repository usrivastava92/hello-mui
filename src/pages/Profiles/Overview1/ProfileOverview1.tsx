import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Card,
  Chip,
  Grid,
  LinearProgress,
  Link,
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
import { GroupedTransition } from '@/components/GroupedTransition';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import CodeIcon from '@mui/icons-material/Code';

const TABS = ['Dashboard', 'Account & Profile', 'Activities', 'Tasks'];

const Profile: React.FC<ProfileProps> = ({ profileInfo }) => {
  const [selectedTab, setSelectedTab] = useState<string>(TABS[0]);
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) =>
    setSelectedTab(TABS[newValue]);
  return (
    <Grid container spacing={2}>
      <GroupedTransition>
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
                <Stack
                  direction="column"
                  alignItems="flex-start"
                  sx={{ mx: 2 }}
                >
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
              {TABS.map((tab, index) => (
                <Tab key={index} label={tab} />
              ))}
            </Tabs>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <Stack sx={{ p: 2 }} justifyContent="space-between">
              <Typography fontWeight="bold">Top Categories</Typography>
              <MoreHorizIcon />
            </Stack>
            <AppDivider type="secondary" />
            <Grid container sx={{ p: 2 }} spacing={2}>
              <Grid
                item
                container
                xs={12}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid
                  item
                  xs={12}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography fontWeight="medium">
                    Wordpress Template
                  </Typography>
                  <Typography fontWeight="medium">6.5k</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography>HTML, PHP, Mysql</Typography>
                  <Chip size="small" label="+150" color="success" />
                </Grid>
              </Grid>
              <Grid
                item
                container
                xs={12}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid
                  item
                  xs={12}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography fontWeight="medium">
                    Bootstrap HTML Template
                  </Typography>
                  <Typography fontWeight="medium">2.5k</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography>HTML, PHP, Mysql</Typography>
                  <Chip size="small" label="+150" color="warning" />
                </Grid>
              </Grid>
              <Grid
                item
                container
                xs={12}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid
                  item
                  xs={12}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography fontWeight="medium">
                    Tailwind HTML Template
                  </Typography>
                  <Typography fontWeight="medium">3.4k</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  display="flex"
                  justifyContent="space-between"
                >
                  <Typography>HTML, PHP, Mysql</Typography>
                  <Chip size="small" label="+150" color="info" />
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <Stack
              sx={{ px: 2, pt: 0.8, pb: 0 }}
              justifyContent="space-between"
            >
              <Typography fontWeight="bold">Work In Progress</Typography>
              <Tabs
                value={0}
                variant="scrollable"
                indicatorColor="primary"
                textColor="inherit"
              >
                <Tab label="New" />
                <Tab label="Last Week" />
              </Tabs>
            </Stack>
            <AppDivider type="secondary" />
            <Grid container sx={{ p: 2 }} spacing={2}>
              <Grid item xs={12}>
                <Stack justifyContent="space-between">
                  <Typography>Pending Tasks</Typography>
                  <Typography>20%</Typography>
                </Stack>
                <LinearProgress
                  sx={{ width: '100%' }}
                  color="info"
                  variant="determinate"
                  value={20}
                />
              </Grid>
              <Grid item xs={12}>
                <Stack justifyContent="space-between">
                  <Typography>Completed Tasks</Typography>
                  <Typography>42</Typography>
                </Stack>
                <LinearProgress
                  sx={{ width: '100%' }}
                  color="info"
                  variant="determinate"
                  value={42}
                />
              </Grid>
              <Grid item xs={12}>
                <Stack justifyContent="space-between">
                  <Typography>Tasks In Progress</Typography>
                  <Typography>2 / 20</Typography>
                </Stack>
                <LinearProgress
                  sx={{ width: '100%' }}
                  color="info"
                  variant="determinate"
                  value={(2 / 20) * 100}
                />
              </Grid>
              <Grid item xs={12} sx={{ textAlign: 'center' }}>
                <Typography color="dark.dark" component={Link}>
                  View more details...
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <Stack sx={{ p: 2 }} justifyContent="space-between">
              <Typography fontWeight="bold">Daily Sales</Typography>
              <Button
                variant="outlined"
                color="dark"
                startIcon={<BorderAllIcon />}
              >
                Download Excel
              </Button>
            </Stack>
            <AppDivider type="secondary" />
            <Grid container sx={{ p: 2 }} spacing={2}>
              <Grid
                item
                container
                xs={12}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid
                  item
                  xs={12}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography fontWeight="medium">
                    Wordpress Template
                  </Typography>
                  <Typography fontWeight="medium">6.5k</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography>HTML, PHP, Mysql</Typography>
                  <Chip size="small" label="+150" color="success" />
                </Grid>
              </Grid>
              <Grid
                item
                container
                xs={12}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid
                  item
                  xs={12}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography fontWeight="medium">
                    Bootstrap HTML Template
                  </Typography>
                  <Typography fontWeight="medium">2.5k</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography>HTML, PHP, Mysql</Typography>
                  <Chip size="small" label="+150" color="warning" />
                </Grid>
              </Grid>
              <Grid
                item
                container
                xs={12}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid
                  item
                  xs={12}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography fontWeight="medium">
                    Tailwind HTML Template
                  </Typography>
                  <Typography fontWeight="medium">3.4k</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  display="flex"
                  justifyContent="space-between"
                >
                  <Typography>HTML, PHP, Mysql</Typography>
                  <Chip size="small" label="+150" color="info" />
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <Stack sx={{ p: 2, pb: 0 }} justifyContent="space-between">
              <Typography fontWeight="bold">Latest Tasks</Typography>
              <Tabs
                value={0}
                variant="scrollable"
                indicatorColor="primary"
                textColor="inherit"
              >
                <Tab label="New" />
                <Tab label="Last Week" />
              </Tabs>
            </Stack>
            <AppDivider type="secondary" />
            <Grid container sx={{ p: 2 }} spacing={2}>
              <Grid
                item
                container
                xs={12}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid
                  item
                  xs={12}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography fontWeight="medium">
                    Wordpress Template
                  </Typography>
                  <Typography fontWeight="medium">6.5k</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography>HTML, PHP, Mysql</Typography>
                  <Chip size="small" label="+150" color="success" />
                </Grid>
              </Grid>
              <Grid
                item
                container
                xs={12}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid
                  item
                  xs={12}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography fontWeight="medium">
                    Bootstrap HTML Template
                  </Typography>
                  <Typography fontWeight="medium">2.5k</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography>HTML, PHP, Mysql</Typography>
                  <Chip size="small" label="+150" color="warning" />
                </Grid>
              </Grid>
              <Grid
                item
                container
                xs={12}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid
                  item
                  xs={12}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography fontWeight="medium">
                    Tailwind HTML Template
                  </Typography>
                  <Typography fontWeight="medium">3.4k</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  display="flex"
                  justifyContent="space-between"
                >
                  <Typography>HTML, PHP, Mysql</Typography>
                  <Chip size="small" label="+150" color="info" />
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <Stack sx={{ p: 2 }} justifyContent="space-between">
              <Typography fontWeight="bold">General Statistics</Typography>
              <Button variant="outlined" color="dark" startIcon={<CodeIcon />}>
                Download XML
              </Button>
            </Stack>
            <AppDivider type="secondary" />
            <Grid container sx={{ p: 2 }} spacing={2}>
              <Grid item xs={12} md={6}>
                <Card elevation={2} sx={{ p: 2 }}>
                  <Typography fontWeight="bold">Net Worth</Typography>
                  <Typography fontWeight="medium" display="inline">
                    USP:
                  </Typography>
                  <Typography color="success.main" display="inline">
                    {' '}
                    +23%
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card elevation={2} sx={{ p: 2 }}>
                  <Typography fontWeight="bold">Sales</Typography>
                  <Typography fontWeight="medium" display="inline">
                    USP:
                  </Typography>
                  <Typography display="inline" color="error">
                    {' '}
                    -5%
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card elevation={2} sx={{ p: 2 }}>
                  <Typography fontWeight="bold">Profit</Typography>
                  <Typography fontWeight="medium" display="inline">
                    USP:
                  </Typography>
                  <Typography color="error" display="inline">
                    {' '}
                    -10%
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card elevation={2} sx={{ p: 2 }}>
                  <Typography fontWeight="bold">Products</Typography>
                  <Typography fontWeight="medium" display="inline">
                    USP:
                  </Typography>
                  <Typography color="success.main" display="inline">
                    {' '}
                    +55%
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </GroupedTransition>
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
