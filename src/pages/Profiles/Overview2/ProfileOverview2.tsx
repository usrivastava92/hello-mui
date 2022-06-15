import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { SearchInput } from '@/layouts/TopMenuLayout/components/TopBar';
import { UserProps, USERS } from '@/pages/Users/userData';

const User: React.FC<UserProps> = ({ user }) => {
  return (
    <Card>
      <Stack spacing={2} sx={{ p: 2 }}>
        <Avatar sx={{ width: 56, height: 56, color: 'dark.lighter' }}></Avatar>
        <Stack direction="column" alignItems="flex-start">
          <Typography component={Link} fontWeight="bold">
            {user.name}
          </Typography>
          <Typography variant="xs" color="dark.main">
            {user.profession}
          </Typography>
        </Stack>
        <Box flexGrow={1}></Box>
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

export const ProfileOverview2: React.FC = () => {
  return (
    <>
      {' '}
      <Typography variant="lg">Profile Overview 2</Typography>
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
