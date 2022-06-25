import React from 'react';
import {
  Avatar,
  Button,
  Card,
  Grid,
  IconButton,
  Link,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { UserProps, USERS } from '@/pages/Users/userData';
import AddIcon from '@mui/icons-material/Add';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { AppDivider } from '@/components/Divider';
import { GroupedTransition } from '@/components/GroupedTransition';
import { ProgressBar } from '@/components/ProgressBar';

const User: React.FC<UserProps> = ({ user }) => {
  return (
    <Card sx={{ height: '100%' }}>
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
        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
        >
          {
            <ProgressBar
              percentage={user.progress}
              startLabel={'Progress'}
              endLabel={`${user.progress}%`}
            />
          }
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
            <Button size="small" color="secondary" variant="outlined">
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
      <Stack sx={{ py: 2 }} justifyContent="space-between">
        <Button color="info" variant="contained" endIcon={<AddIcon />}>
          Add New User
        </Button>
        <TextField variant="filled" color="primary"></TextField>
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
