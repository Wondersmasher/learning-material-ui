import {
  AddCircleOutlineOutlined,
  Menu,
  SubjectOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import TemporarySideBar from "./TemporarySideBar";
const drawers = 300;
const sx = {
  page: {
    backgroundColor: "#f9f9f9",
    width: "100%",
    minHeight: "100vh",
  },
  drawer: {
    width: drawers,
  },
  sharedlayout: {
    display: { md: "flex" },
  },
  drawerPaper: {
    width: drawers,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: drawers,
      boxSizing: "border-box",
    },
  },
  drawerTitle: {
    textAlign: "center",
    paddingTop: 5,
    paddingBottom: 5,
  },
  appbar: { width: { md: `calc(100% - ${drawers}px)` } },
  //   icon: {
  //     margin: "auto 10px",
  //     borderRadius: 0,
  //     display: {
  //       xs: "flex",
  //       md: "none",
  //     },
  //     justifyContent: "center",
  //     color: "white",
  //   },
};
const menu = [
  {
    listMenu: "Notes",
    listIcon: <SubjectOutlined color="primary" />,
    path: "/",
  },
  {
    listMenu: " New Note",
    listIcon: <AddCircleOutlineOutlined color="primary" />,
    path: "/create-note",
  },
];
const MyBox = styled(Box)(({ theme }) => theme.mixins.toolbar);
const SharedLayout = () => {
  const [show, setShow] = useState(false);
  const showOrHideSideBar = () => setShow(!show);
  const newStyles = {
    icon: {
      margin: "auto 10px",
      borderRadius: 0,
      display: {
        xs: "flex",
        md: "none",
      },
      justifyContent: "center",
      color: "white",
    },
    drawerPaper: {
      transition: "1s ease-in-out",
      width: drawers,
      flexShrink: 0,
      "& .MuiDrawer-paper": {
        width: drawers,
        boxSizing: "border-box",
      },
      display: {
        md: "flex",
        xs: !show && "none",
      },
    },
  };
  const navigate = useNavigate();
  const location = useLocation();
  const navigateMe = (path) => {
    navigate(path);
  };
  const myList = menu.map((list, id) => {
    return (
      <ListItemButton
        key={id}
        selected={location.pathname === list.path}
        onClick={() => navigateMe(list.path)}
      >
        <ListItem>
          <ListItemIcon>{list.listIcon}</ListItemIcon>
          <ListItemText primary={list.listMenu} />
        </ListItem>
      </ListItemButton>
    );
  });
  return (
    <Box sx={sx.sharedlayout}>
      <AppBar sx={sx.appbar}>
        <Toolbar>
          <IconButton sx={newStyles.icon} onClick={showOrHideSideBar}>
            <Menu />
          </IconButton>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              flexGrow: 1,
              fontSize: {
                md: 45,
                xs: 30,
              },
            }}
          >
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <TemporarySideBar show={show} showOrHideSideBar={showOrHideSideBar} />
      {/* <Drawer variant="permanent" sx={sx.drawerPaper}>
        <Typography variant="h5" sx={sx.drawerTitle}>
          Todo Notes
        </Typography>
        <List>{myList}</List>
      </Drawer> */}
      <Box sx={sx.page}>
        <MyBox></MyBox>
        <Outlet />
      </Box>
    </Box>
  );
};

export default SharedLayout;
