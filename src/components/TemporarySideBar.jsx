import {
  AddCircleOutlineOutlined,
  Menu,
  SubjectOutlined,
} from "@mui/icons-material";
import {
  Drawer,
  Typography,
  List,
  ListItemButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const drawers = 300;

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

const TemporarySideBar = ({ show, showOrHideSideBar }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const navigateMe = (path) => {
    navigate(path);
  };
  const sx = {
    drawerPaper: {
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
    drawerTitle: {
      textAlign: "center",
      paddingTop: 5,
      paddingBottom: 5,
    },
    icon: {
      borderRadius: 0,
      display: { xs: "flex", md: "none" },
      justifyContent: "flex-end",
      marginTop: 3,
      marginBottom: -2,
    },
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
    <Drawer variant="permanent" sx={sx.drawerPaper}>
      <IconButton sx={sx.icon} onClick={showOrHideSideBar}>
        <CloseIcon />
      </IconButton>
      <Typography variant="h5" sx={sx.drawerTitle}>
        Todo Notes
      </Typography>
      <List>{myList}</List>
    </Drawer>
  );
};

export default TemporarySideBar;
