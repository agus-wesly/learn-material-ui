import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  styled,
  Typography,
} from "@mui/material";

function Sidebar() {
  return (
    <Box
      sx={{
        display: {
          xs: "none",
          md: "flex",
          width: 300,
        },
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "fixed",
          display: "flex",
          gap: 5,
          flexDirection: "column",
        }}
      >
        <Box>
          <Typography
            variant="h5"
            fontSize={18}
            fontWeight={500}
            color="text.primary"
          >
            Friendss
          </Typography>
          <Box>
            <AvatarGroup
              max={4}
              sx={{
                justifyContent: "start",
              }}
            >
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
              <Avatar
                alt="Trevor Henderson"
                src="/static/images/avatar/5.jpg"
              />
            </AvatarGroup>
          </Box>
        </Box>
        <Box>
          <Typography
            color="text.primary"
            variant="h5"
            fontSize={18}
            fontWeight={500}
          >
            Recent Chat
          </Typography>
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              ml: -2,
              width: "300px",
            }}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                sx={{ color: "text.primary" }}
                primary="Brunch this weekend?"
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </>
                }
              />
            </ListItem>
            <Divider component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                sx={{ color: "text.primary" }}
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </>
                }
              />
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
}

export default Sidebar;
