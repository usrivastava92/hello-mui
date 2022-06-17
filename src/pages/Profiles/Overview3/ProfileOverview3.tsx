import React from 'react';
import { UserProps, USERS } from '@/pages/Users/userData';
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
import { AppDivider } from '@/components/Divider';
import AddIcon from '@mui/icons-material/Add';
import { SearchInput } from '@/layouts/TopMenuLayout/components/TopBar';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

const User: React.FC<UserProps> = ({ user }) => {
  return (
    <Card>
      <Box sx={{ p: 2 }}>
        <Stack spacing={2} justifyContent="flex-start">
          <Avatar variant="square" sx={{ width: 56, height: 56 }}></Avatar>
          <Stack direction="column" alignItems="flex-start">
            <Typography component={Link} fontWeight="bold">
              {user.name}
            </Typography>
            <Typography variant="xs">{user.profession}</Typography>
          </Stack>
        </Stack>
        <Typography sx={{ py: 2 }}>{user.bio}</Typography>
        <Stack justifyContent="flex-start" spacing={1}>
          <EmailIcon />
          <Typography>{user.email}</Typography>
        </Stack>
        <Stack justifyContent="flex-start" spacing={1}>
          <InstagramIcon />
          <Typography>{user.name}</Typography>
        </Stack>
      </Box>
      <AppDivider type="secondary" />
      <Stack sx={{ m: 2 }} justifyContent="space-between">
        <Stack direction="column" sx={{ width: '50%' }} spacing={1}>
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
        </Stack>
        <Stack spacing={2}>
          <Button size="small" color="info" variant="contained">
            Message
          </Button>
          <Button size="small" variant="contained">
            Profile
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export const ProfileOverview3: React.FC = () => {
  return (
    <>
      <Typography variant="lg">Profile Overview 3</Typography>
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
          <Grid key={index} item xs={12} md={6} lg={4}>
            <User user={user} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
