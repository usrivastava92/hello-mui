import { Box, Stack } from '@mui/material';
import MobileMenu from '@/components/MobileMenu';
import { MENU_ITEMS } from '@/config/menu/menu.config';
import SideNav from '@/layouts/SimpleMenuLayout/components/SideNav';

export default function SimpleMenuLayout(): JSX.Element {
  return (
    <>
      <MobileMenu menuItems={MENU_ITEMS}></MobileMenu>
      <Stack>
        <SideNav menuItems={MENU_ITEMS} variant="mini" />
        <Box sx={{ height: '100vh' }} flexGrow={1}></Box>
      </Stack>
    </>
  );
}
