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
import AddIcon from '@mui/icons-material/Add';
import { SearchInput } from '@/layouts/TopMenuLayout/components/TopBar';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { AppDivider } from '@/components/Divider';
import { UserProps, USERS } from '@/pages/Users/UserData';

const User: React.FC<UserProps> = ({ user }) => {
  return (
    <Card>
      <Stack spacing={2} sx={{ p: 2 }}>
        <Avatar sx={{ width: 56, height: 56, color: 'dark.lighter' }}></Avatar>
        <Stack direction="column" alignItems="left">
          <Typography component={Link} fontWeight="bold">
            {user.name}
          </Typography>
          <Typography variant="xs" color="dark.main">
            {user.profession}
          </Typography>
        </Stack>
        <Box flexGrow={1}></Box>
        <IconButton>
          <FacebookIcon />
        </IconButton>
        <IconButton>
          <TwitterIcon />
        </IconButton>
        <IconButton>
          <LinkedInIcon />
        </IconButton>
      </Stack>
      <AppDivider type="secondary" />
      <Stack sx={{ m: 2 }} justifyContent="space-between">
        <Stack direction="column" sx={{ width: '50%' }} spacing={1}>
          <Stack justifyContent="space-between" sx={{ width: '100%' }}>
            <Typography variant="xs" component={Link} color="dark.main">
              Progress
            </Typography>
            <Typography variant="xs" color="dark.main">
              {user.progress}%
            </Typography>
          </Stack>
          <LinearProgress
            sx={{ width: '100%' }}
            color="info"
            variant="determinate"
            value={user.progress}
          />
        </Stack>
        <Stack spacing={2}>
          <Button size="small" color="info" variant="contained">
            Message
          </Button>
          <Button size="small" color="dark" variant="contained">
            Profile
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export const UserLayout1: React.FC = () => {
  return (
    <>
      <Typography variant="lg">Users Layout 1</Typography>
      <Stack spacing={1} sx={{ py: 2 }}>
        <Button sx={{ boxShadow: 1 }} color="info" variant="contained">
          Add New User
        </Button>
        <IconButton sx={{ boxShadow: 3 }}>
          <AddIcon />
        </IconButton>
        <Box flexGrow={1}></Box>
        <SearchInput sx={{ borderRadius: 2, bgcolor: 'secondary.lighter' }} />
      </Stack>
      <Grid className="intro-y" container rowSpacing={2} columnSpacing={2}>
        {USERS.map((user, index) => (
          <Grid key={index} item xs={12} md={6}>
            <User user={user} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
