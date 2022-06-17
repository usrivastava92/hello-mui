import React from 'react';
import { UserProps, USERS } from '@/pages/Users/userData';
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
import { AppDivider } from '@/components/Divider';
import AddIcon from '@mui/icons-material/Add';
import { SearchInput } from '@/layouts/TopMenuLayout/components/TopBar';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import { GroupedTransition } from '@/components/GroupedTransition';

const User: React.FC<UserProps> = ({ user }) => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <Grid container sx={{ p: 2 }} rowSpacing={1}>
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection={{ xs: 'column', md: 'row' }}
          justifyContent={{ xs: 'center', md: 'flex-start' }}
          alignItems="center"
        >
          <Avatar variant="square" sx={{ width: 56, height: 56 }}></Avatar>
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
        <Grid item xs={12}>
          <Typography sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            {user.bio}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Stack
            spacing={1}
            justifyContent={{ xs: 'center', md: 'flex-start' }}
          >
            <EmailIcon />
            <Typography>{user.email}</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack
            spacing={1}
            justifyContent={{ xs: 'center', md: 'flex-start' }}
          >
            <InstagramIcon />
            <Typography>{user.name}</Typography>
          </Stack>
        </Grid>
      </Grid>
      <Grid container sx={{ p: 2 }} spacing={2}>
        <Grid item xs={12}>
          <AppDivider type="secondary" />
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={2} justifyContent="space-between">
            <Button size="small" color="info" variant="contained">
              Message
            </Button>
            <Button size="small" color="error" variant="contained">
              Profile
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
};

export const UserLayout3: React.FC = () => {
  return (
    <>
      <Typography variant="lg">Users Layout 3</Typography>
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
            <Grid key={index} item xs={12} md={6} lg={4}>
              <User user={user} />
            </Grid>
          ))}
        </GroupedTransition>
      </Grid>
    </>
  );
};
