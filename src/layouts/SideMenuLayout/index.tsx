import { AppBar, Box, Button, Divider } from '@mui/material';

export default function SideMenuLayout(): JSX.Element {
  return (
    <>
      <Box display="flex" flexDirection="row">
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
      </Box>
    </>
  );
}
