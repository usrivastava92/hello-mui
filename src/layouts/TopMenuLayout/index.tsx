import TopBar from './components/TopBar';
import { Box } from '@mui/material';
import TopNav from '@/layouts/TopMenuLayout/components/TopNav';
import MobileMenu from '@/components/MobileMenu';
import { menuItems } from '@/config/menu/menu.config';

export default function TopMenuLayout(): JSX.Element {
  return (
    <Box color="white">
      <MobileMenu menuItems={menuItems} />
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
