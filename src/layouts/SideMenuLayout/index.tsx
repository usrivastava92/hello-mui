import { Box, Stack } from '@mui/material';
import MobileMenu from '@/components/MobileMenu';
import { MENU_ITEMS } from '@/config/menu/menu.config';
import SideNav from '@/layouts/SimpleMenuLayout/components/SideNav';
import ContentWrapper from '@/components/ContentWrapper';

export default function SideMenuLayout(): JSX.Element {
  return (
    <>
      <MobileMenu menuItems={MENU_ITEMS}></MobileMenu>
      <Stack>
        <SideNav menuItems={MENU_ITEMS} />
        <Box sx={{ height: '100vh' }} flexGrow={1}>
          <ContentWrapper></ContentWrapper>
        </Box>
      </Stack>
    </>
  );
}
