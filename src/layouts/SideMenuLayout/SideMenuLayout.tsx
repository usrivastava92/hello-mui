import { Box, MenuItem, Stack, styled } from '@mui/material';
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
    <>
      <MobileMenu menuItems={MENU_ITEMS}></MobileMenu>
      <Stack>
        <SideNav menuItems={MENU_ITEMS} mini={mini} />
        <Box sx={{ height: '100vh' }} flexGrow={1}>
          <ContentWrapper>
            <>
              <TopBar />
              <Outlet />
            </>
          </ContentWrapper>
        </Box>
      </Stack>
    </>
  );
};
