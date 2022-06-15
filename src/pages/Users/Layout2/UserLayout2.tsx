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
import { GroupedTransition } from '@/components/GroupedTransition';

const User: React.FC<UserProps> = ({ user }) => {
  return (
    <Card sx={{ p: 2 }}>
      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          flexDirection={{ xs: 'column', md: 'row' }}
          justifyContent={{ xs: 'center', md: 'flex-start' }}
          alignItems="center"
        >
          <Avatar
            sx={{ width: 56, height: 56, color: 'dark.lighter' }}
          ></Avatar>
          <Stack
            sx={{ m: 2 }}
            direction="column"
            alignItems={{ xs: 'center', md: 'flex-start' }}
          >
            <Typography component={Link} fontWeight="medium">
              {user.name}
            </Typography>
            <Typography variant="xs" color="dark.main">
              {user.profession}
            </Typography>
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
          <Stack spacing={2}>
            <Button size="small" color="info" variant="contained">
              Message
            </Button>
            <Button size="small" color="warning" variant="contained">
              Profile
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
};

export const UserLayout2: React.FC = () => {
  return (
    <>
      {' '}
      <Typography variant="lg">Users Layout 2</Typography>
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
