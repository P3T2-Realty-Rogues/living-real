import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
} from "@material-ui/core";
import Auth from "../../utils/auth";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";

const headersData = [
  {
    label: "Request Info",
    href: "/RequestInfo",
  },
  {
    label: "Login",
    href: "/Login",
  },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#2753ba",
    paddingRight: "79px",
    paddingLeft: "25px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  logo: {
    fontFamily: "IBM Plex Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "IBM Plex Sans, sans-serif",
    fontWeight: 600,
    size: "15px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
}));

export default function NavBar() {
  const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {appTitle}
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        <div>{appTitle}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    if (Auth.loggedIn()) {
      //wrap this as function and add it as a method in helpers.js
      const currentUser = Auth.getProfile().data;
      return (
        <>
          {/* optional chaining here to optionally do this if currentUser exists
            so when the asynchronous code executes and currentUsers exists,
            we will conditionally render the admin or tenant dash */}
          {currentUser?.adminFlag ? (
            <MenuItem>
              <Button
                {...{
                  to: "/AdminDash",
                  color: "inherit",
                  component: RouterLink,
                  className: menuButton,
                }}
              >
                Admin Dashboard
              </Button>
            </MenuItem>
          ) : (
            <MenuItem>
              <Button
                {...{
                  to: `/TenantDash/${currentUser?._id}`,
                  color: "inherit",
                  component: RouterLink,
                  className: menuButton,
                }}
              >
                Tenant Dashboard
              </Button>
            </MenuItem>
          )}
          <MenuItem>
            <Button
              {...{
                to: `/`,
                color: "inherit",
                component: RouterLink,
                className: menuButton,
                onClick: () => Auth.logout(),
              }}
            >
              Logout
            </Button>
          </MenuItem>
        </>
      );
    } else {
      return (
        <>
          <MenuItem>
            <Button
              {...{
                to: "/Login",
                color: "inherit",
                component: RouterLink,
                className: menuButton,
              }}
            >
              Login
            </Button>
          </MenuItem>
          <MenuItem>
            <Button
              {...{
                to: "/RequestInfo",
                color: "inherit",
                component: RouterLink,
                className: menuButton,
              }}
            >
              Request Info
            </Button>
          </MenuItem>
        </>
      );
    }
  };

  const appTitle = (
    <Typography  variant="h4" component="h1" className={logo}>
      Living Real
    </Typography>
  );

  const getMenuButtons = () => {
    if (Auth.loggedIn()) {
      //wrap this as function and add it as a method in helpers.js
      const currentUser = Auth.getProfile().data;
      return (
        <>
          {/* optional chaining here to optionally do this if currentUser exists
            so when the asynchronous code executes and currentUsers exists,
            we will conditionally render the admin or tenant dash */}
          {currentUser?.adminFlag ? (
            <MenuItem>
              <Button
                {...{
                  to: "/AdminDash",
                  color: "inherit",
                  component: RouterLink,
                  className: menuButton,
                }}
              >
                Admin Dashboard
              </Button>
            </MenuItem>
          ) : (
            <MenuItem>
              <Button
                {...{
                  to: `/TenantDash/${currentUser?._id}`,
                  color: "inherit",
                  component: RouterLink,
                  className: menuButton,
                }}
              >
                Tenant Dashboard
              </Button>
            </MenuItem>
          )}
          <MenuItem>
            <Button
              {...{
                to: `/`,
                color: "inherit",
                component: RouterLink,
                className: menuButton,
                onClick: () => Auth.logout(),
              }}
            >
              Logout
            </Button>
          </MenuItem>
        </>
      );
    } else {
      return (
        <>
          <MenuItem>
            <Button
              {...{
                to: "/Login",
                color: "inherit",
                component: RouterLink,
                className: menuButton,
              }}
            >
              Login
            </Button>
          </MenuItem>
          <MenuItem>
            <Button
              {...{
                to: "/RequestInfo",
                color: "inherit",
                component: RouterLink,
                className: menuButton,
              }}
            >
              Request Info
            </Button>
          </MenuItem>
        </>
      );
    }
  };

  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
