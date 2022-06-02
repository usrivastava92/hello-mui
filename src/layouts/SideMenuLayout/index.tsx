import { AppBar, Box, Button, Divider, Stack } from '@mui/material';
import MobileMenu from '@/components/MobileMenu';
import { MENU_ITEMS } from '@/config/menu/menu.config';

export default function SideMenuLayout(): JSX.Element {
  return (
    <Box>
      <MobileMenu menuItems={MENU_ITEMS}></MobileMenu>
      <Stack>
        <Box flexGrow={0}>
          <AppBar elevation={0} position="sticky" sx={{ height: '100vh' }}>
            <div>Left</div>
            <div>appBar</div>
            <Button>try me</Button>
            <Divider />
            <Button>try me2</Button>
          </AppBar>
        </Box>
        <Box display="flex" flexDirection="row" flexGrow={1}>
          <Box display="flex" flexDirection="column" flexGrow={1}></Box>
        </Box>
        <Box flexGrow={0}>
          <AppBar elevation={0} position="sticky">
            <div>Right</div>
            <div>appBar</div>
            <Button>try me</Button>
            <Divider />
            <Button>try me2</Button>
          </AppBar>
        </Box>
      </Stack>
    </Box>
  );
}
