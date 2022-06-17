import { Box, Stack } from '@mui/material';
import { MENU_ITEMS } from '@/config/menu/menu.config';
import { MobileMenu } from '@/components/MobileMenu';
import { SideNav } from '@/layouts/SideMenuLayout/components/SideNav';
import { ContentWrapper } from '@/components/ContentWrapper';
import { TopBar } from '@/layouts/SideMenuLayout/components/TopBar/TopBar';
import { Outlet } from 'react-router-dom';
import React from 'react';

export interface SideMenuLayoutProps {
  mini?: boolean;
}

export const SideMenuLayout: React.FC<SideMenuLayoutProps> = ({
  mini = false
}) => {
  return (
    <Box sx={{ color: 'primary.contrastText' }}>
      <MobileMenu menuItems={MENU_ITEMS}></MobileMenu>
      <Stack>
        <SideNav menuItems={MENU_ITEMS} mini={mini} />
        <Box sx={{ height: '100vh' }} flexGrow={1}>
          <ContentWrapper sx={{ m: 2 }}>
            <TopBar />
            <ContentWrapper sx={{ p: 2 }}>
              <Outlet />
            </ContentWrapper>
          </ContentWrapper>
        </Box>
      </Stack>
    </Box>
  );
};
