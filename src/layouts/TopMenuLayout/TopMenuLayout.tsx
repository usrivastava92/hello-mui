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
          <>
            <Button color="primary" variant="contained">
              Primary
            </Button>
            <Button color="secondary" variant="contained">
              Secondary
            </Button>
            <Button color="info" variant="contained">
              Info
            </Button>
            <Button color="success" variant="contained">
              Success
            </Button>
            <Button color="warning" variant="contained">
              Warning
            </Button>
            <Button color="error" variant="contained">
              Error
            </Button>
            <Button color="dark" variant="contained">
              Dark
            </Button>
            <Button color="dark" variant="outlined">
              Dark
            </Button>
          </>
        </ContentWrapper>
      </Box>
    </Box>
  );
};
