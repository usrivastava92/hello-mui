import {
  AppBar,
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemText
} from '@mui/material';
import React, { useState } from 'react';
import { IMenuItem } from '@/config/menu/menu.config';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useNavigate } from 'react-router-dom';
import { BootstrapTooltip } from '@/components/BootstrapTooltip';
import { BrandLogo } from '@/layouts/TopMenuLayout/components/TopBar';
import { AppDivider } from '@/components/Divider';

export const getBgColorByLevel = (level: number): string => {
  if (level >= 3) {
    return 'primary.darker';
  }
  if (level === 2) {
    return 'primary.dark';
  }
  return 'primary.main';
};

interface MenuItemProps {
  mini?: boolean;
  item: IMenuItem;
  level?: number;
}

const MenuItem: React.FC<MenuItemProps> = ({
  mini = false,
  item,
  level = 1
}): JSX.Element => {
  if (level <= 0) {
    level = 1;
  }
  const navigate = useNavigate();
  const [open, setOpen] = useState(item.isOpen);
  const handleClick = () => {
    if (item.routerLink) {
      navigate(item.routerLink);
    } else {
      item.isOpen = !item.isOpen;
      setOpen(!open);
    }
  };
  const hasNestedMenu = item.nesterItems && item.nesterItems.length > 0;
  return (
    <>
      <BootstrapTooltip title={mini ? item.displayName : ''} placement="right">
        <ListItemButton
          sx={{ mx: 2, bgcolor: getBgColorByLevel(level) }}
          onClick={handleClick}
        >
          {item.icon}
          {!mini && (
            <ListItemText sx={{ ml: 1.5 }} primary={item.displayName} />
          )}
          {!mini && hasNestedMenu && <KeyboardArrowDownIcon />}
        </ListItemButton>
      </BootstrapTooltip>

      {hasNestedMenu && (
        <Collapse in={open}>
          <Menu menuItems={item.nesterItems} mini={mini} level={level + 1} />
        </Collapse>
      )}
    </>
  );
};

interface MenuProps {
  mini?: boolean;
  menuItems?: IMenuItem[];
  level?: number;
}

const Menu: React.FC<MenuProps> = ({
  mini = false,
  menuItems = [],
  level = 1
}) => {
  if (level <= 0) {
    level = 1;
  }
  return (
    <List className="intro-x">
      {menuItems.map((item) => (
        <MenuItem key={item.id} item={item} mini={mini} level={level} />
      ))}
    </List>
  );
};

export interface SideNavProps {
  mini?: boolean;
  menuItems?: IMenuItem[];
}

export const SideNav: React.FC<SideNavProps> = ({
  mini = false,
  menuItems = []
}): JSX.Element => {
  const width = mini ? 85 : 250;
  return (
    <Box
      sx={{
        height: '100vh',
        minWidth: width,
        maxWidth: width,
        width: width,
        pt: 3,
        overflowX: 'hidden',
        display: { md: 'block', xs: 'none' }
      }}
    >
      <AppBar sx={{ bgcolor: 'background.default' }} position="sticky">
        <BrandLogo sx={{ my: 1, mx: 'auto' }} className="intro-x" />
        <AppDivider
          type="primary"
          variant="middle"
          flexItem={true}
          light={true}
        />
        <Menu menuItems={menuItems} mini={mini} />
        <AppDivider
          type="primary"
          variant="middle"
          flexItem={true}
          light={true}
        />
      </AppBar>
    </Box>
  );
};
