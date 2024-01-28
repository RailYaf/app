import React from "react";
import { AppBar, Box, Container, Toolbar } from "@mui/material";

import { SwitchTheme } from "features/theme/switch-theme";

import "./styles.scss";

export const Header = () => {
  /*   const [openProfileMenu, setOpenProfileMenu] = React.useState(null);

  const handleOpenProfileMenu = (event) => {
    setOpenProfileMenu(event.currentTarget);
  };

  const handleCloseProfileMenu = () => {
    setOpenProfileMenu(null);
  };

  const onOpenSettingsMenu = () => {
    setOpenSettingsMenu(!openSettingsMenu);
  };

  const onCloseSettingsMenu = () => {
    setOpenSettingsMenu(false);
  };

  const handleLogout = () => {
    handleCloseProfileMenu();
    localStorage.setItem("tabGroupValue", null);
  }; */

  return (
    <AppBar
      sx={{
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
      }}
    >
      <Container maxWidth={false}>
        <Toolbar
          sx={{
            minHeight: {
              xs: 60,
            },
            justifyContent: "space-between",
          }}
          disableGutters
        >
          <div className="header__logo"></div>
          {/* <NavMenu user={user} /> */}
          <Box component="div" sx={{ display: "flex" }}>
            <SwitchTheme />
            <Box component="div" sx={{ ml: "38px", mr: "25px" }}>
              {/* <DateTime /> */}
            </Box>
            {/*  <IconButton
              name="systemSettings"
              title="Настройки"
              size="small"
              color="inherit"
              onClick={onOpenSettingsMenu}
            /> */}
            {/* <SettingsMenu
              openSettingsMenu={openSettingsMenu}
              onCloseSettingsMenu={onCloseSettingsMenu}
            /> */}
            {/* <IconButton
              name="user"
              title="Профиль"
              size="small"
              color="inherit"
              onClick={handleOpenProfileMenu}
            />
            <ProfileMenu
              user={user}
              openProfileMenu={openProfileMenu}
              handleCloseProfileMenu={handleCloseProfileMenu}
              handleLogout={handleLogout}
            /> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
