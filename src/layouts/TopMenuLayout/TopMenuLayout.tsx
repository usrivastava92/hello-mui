import { Box, Button } from '@mui/material';
import { MENU_ITEMS } from '@/config/menu/menu.config';
import { MobileMenu } from '@/components/MobileMenu';
import { TopBar } from '@/layouts/TopMenuLayout/components/TopBar';
import { TopNav } from '@/layouts/TopMenuLayout/components/TopNav';
import { ContentWrapper } from '@/components/ContentWrapper';

export const TopMenuLayout: React.FC = () => {
  return (
    <Box>
      <MobileMenu menuItems={MENU_ITEMS} />
      <TopBar />
      <TopNav menuItems={MENU_ITEMS} />
      <Box display="flex" flexDirection="column" sx={{ minHeight: '100vh' }}>
        <ContentWrapper>
          <Button color="error">Error</Button>
        </ContentWrapper>
      </Box>
    </Box>
  );
};
