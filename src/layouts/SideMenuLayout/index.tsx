import { AppBar, Box, Button, Divider, Stack } from '@mui/material';
import MobileMenu from '@/components/MobileMenu';
import { MENU_ITEMS } from '@/config/menu/menu.config';
import SideNav from '@/layouts/SimpleMenuLayout/components/SideNav';

export default function SideMenuLayout(): JSX.Element {
  return (
    <>
      <MobileMenu menuItems={MENU_ITEMS}></MobileMenu>
      <Stack>
        <SideNav menuItems={MENU_ITEMS} />
        <Box sx={{ border: 1, height: '100vh' }} flexGrow={1}></Box>
      </Stack>
    </>
  );
}
