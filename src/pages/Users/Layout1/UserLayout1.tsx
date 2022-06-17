import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  Grid,
  IconButton,
  LinearProgress,
  Link,
  Stack,
  Typography
} from '@mui/material';
import { UserProps, USERS } from '@/pages/Users/userData';
import AddIcon from '@mui/icons-material/Add';
import { SearchInput } from '@/layouts/TopMenuLayout/components/TopBar';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { AppDivider } from '@/components/Divider';
import { GroupedTransition } from '@/components/GroupedTransition';

const User: React.FC<UserProps> = ({ user }) => {
  return (
    <Card>
      <Grid container sx={{ p: 2 }}>
        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          flexDirection={{ xs: 'column', md: 'row' }}
          justifyContent={{ xs: 'center', md: 'flex-start' }}
          alignItems="center"
        >
          <Avatar sx={{ width: 56, height: 56 }}></Avatar>
          <Stack
            sx={{ m: 2 }}
            direction="column"
            alignItems={{ xs: 'center', md: 'flex-start' }}
          >
            <Typography component={Link} fontWeight="medium">
              {user.name}
            </Typography>
            <Typography variant="xs">{user.profession}</Typography>
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          justifyContent={{ xs: 'center', md: 'flex-end' }}
          alignItems="center"
        >
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <TwitterIcon />
          </IconButton>
          <IconButton>
            <LinkedInIcon />
          </IconButton>
        </Grid>
      </Grid>
      <AppDivider type="secondary" />
      <Grid container sx={{ p: 2 }} spacing={2}>
        <Grid item xs={12} md={6}>
          <Stack justifyContent="space-between" sx={{ width: '100%' }}>
            <Typography variant="xs" component={Link}>
              Progress
            </Typography>
            <Typography variant="xs">{user.progress}%</Typography>
          </Stack>
          <LinearProgress
            sx={{ width: '100%' }}
            color="info"
            variant="determinate"
            value={user.progress}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          justifyContent={{ xs: 'center', md: 'flex-end' }}
          alignItems="center"
        >
          <Stack spacing={2}>
            <Button size="small" color="info" variant="contained">
              Message
            </Button>
            <Button size="small" color="secondary" variant="contained">
              Profile
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
};

export const UserLayout1: React.FC = () => {
  return (
    <>
      <Typography variant="lg">Users Layout 1</Typography>
      <Stack spacing={1} sx={{ py: 2 }}>
        <Button color="info" variant="contained">
          Add New User
        </Button>
        <IconButton color="secondary" sx={{ borderRadius: 2 }}>
          <AddIcon />
        </IconButton>
        <Box flexGrow={1}></Box>
        <SearchInput sx={{ borderRadius: 2, bgcolor: 'secondary.lighter' }} />
      </Stack>
      <Grid container rowSpacing={2} columnSpacing={2}>
        <GroupedTransition>
          {USERS.map((user, index) => (
            <Grid key={index} item xs={12} md={6}>
              <User user={user} />
            </Grid>
          ))}
        </GroupedTransition>
      </Grid>
    </>
  );
};
