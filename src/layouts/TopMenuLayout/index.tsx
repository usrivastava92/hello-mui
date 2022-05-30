import TopBar from './components/TopBar';
import { Box } from '@mui/material';
import TopNav from '@/layouts/TopMenuLayout/components/TopNav';

export default function TopMenuLayout(): JSX.Element {
  return (
    <Box color="white">
      <TopBar />
      <TopNav />
      <Box
        display="flex"
        flexDirection="column"
        sx={{ minHeight: '100vh', border: 1 }}
      ></Box>
    </Box>
  );
}
