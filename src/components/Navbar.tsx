import AppBar from "@mui/material/AppBar";
import SearchIcon from "@mui/icons-material/Search";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import HomeIcon from "@mui/icons-material/Home";
import SendIcon from "@mui/icons-material/Send";
import SettingsIcon from "@mui/icons-material/Settings";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import DraftsIcon from "@mui/icons-material/Drafts";
import { styled } from "@mui/material/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Email from "@mui/icons-material/Email";
import { useState } from "react";
import { InputBase, Menu, MenuItem, Switch } from "@mui/material";

const StyledList = styled(List)(({ theme }) => ({
  position: "fixed",
  height: "100vh",
  left: 0,
  top: 55,
  zIndex: 9,
  borderRadius: 3,
  background: theme.palette.background.default,
  color: theme.palette.text.primary,
  transitionDuration: "300ms",
  borderRight: "1px solid rgba(48, 48, 48,0.2)",
  paddingTop: 20,
}));

function Navbar({
  setTheme,
}: {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <nav>
      <Box position="sticky" sx={{ flexGrow: 1 }}>
        <AppBar>
          <Toolbar
            sx={{
              mr: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box display={"flex"} alignItems="center">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{
                  mr: 2,
                }}
              >
                <MenuIcon onClick={() => setOpen((prev) => !prev)} />
              </IconButton>
              <Typography variant="h6" component="h1">
                MyApp
              </Typography>
            </Box>

            <Box
              display="flex"
              flex={1}
              px={{ xs: 0, sm: 20 }}
              justifyContent="center"
              alignItems={"center"}
            >
              <InputBase
                sx={{
                  display: { xs: "none", sm: "block", color: "white" },
                }}
                fullWidth
                placeholder="Search…"
              />
              <IconButton>
                <SearchIcon sx={{ color: "white" }} />
              </IconButton>
            </Box>

            <Stack direction="row" gap={3}>
              <IconButton
                size="medium"
                color="inherit"
                sx={{ display: { xs: "none", md: "block" } }}
              >
                <Badge badgeContent={17} color="error">
                  <Email />
                </Badge>
              </IconButton>
              <IconButton
                sx={{ display: { xs: "none", md: "block" } }}
                size="medium"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton size="medium" color="inherit">
                <AccountCircleIcon onClick={() => setMenu((prev) => !prev)} />
              </IconButton>
            </Stack>

            <Menu
              open={menu}
              onClose={() => setMenu(false)}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>My account</MenuItem>
              <MenuItem>Logout</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>

      <StyledList sx={{ translate: !open ? "-100%" : 0 }}>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Message" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Setting" />
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ px: 4 }}>
          <ListItemIcon>
            <Brightness3Icon />
          </ListItemIcon>
          <Switch
            onChange={() =>
              setTheme((prev) => (prev === "dark" ? "light" : "dark"))
            }
          />
        </ListItem>
      </StyledList>
    </nav>
  );
}

export default Navbar;
