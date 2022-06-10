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
            <Button color="primary" variant="outlined">
              Primary
            </Button>
            <Button color="secondary" variant="outlined">
              Secondary
            </Button>
            <Button color="info" variant="outlined">
              Info
            </Button>
            <Button color="success" variant="outlined">
              Success
            </Button>
            <Button color="warning" variant="outlined">
              Warning
            </Button>
            <Button color="error" variant="outlined">
              Error
            </Button>
            <Button color="dark" variant="outlined">
              Dark
            </Button>
            <Button color="primary" variant="text">
              Primary
            </Button>
            <Button color="secondary" variant="text">
              Secondary
            </Button>
            <Button color="info" variant="text">
              Info
            </Button>
            <Button color="success" variant="text">
              Success
            </Button>
            <Button color="warning" variant="text">
              Warning
            </Button>
            <Button color="error" variant="text">
              Error
            </Button>
            <Button color="dark" variant="text">
              Dark
            </Button>
          </>
        </ContentWrapper>
      </Box>
    </Box>
  );
};
