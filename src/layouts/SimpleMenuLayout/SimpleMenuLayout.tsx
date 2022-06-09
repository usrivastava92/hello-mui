import { Box, Stack } from '@mui/material';
import { MENU_ITEMS } from '@/config/menu/menu.config';
import { MobileMenu } from '@/components/MobileMenu';
import { SideNav } from '@/layouts/SideMenuLayout/components/SideNav';
import { TopBar } from '@/layouts/SideMenuLayout/components/TopBar';
import { ContentWrapper } from '@/components/ContentWrapper';

export const SimpleMenuLayout: React.FC = () => {
  return (
    <>
      <MobileMenu menuItems={MENU_ITEMS}></MobileMenu>
      <Stack>
        <SideNav menuItems={MENU_ITEMS} mini />
        <Box sx={{ height: '100vh' }} flexGrow={1}>
          <ContentWrapper>
            <TopBar />
          </ContentWrapper>
        </Box>
      </Stack>
    </>
  );
};
