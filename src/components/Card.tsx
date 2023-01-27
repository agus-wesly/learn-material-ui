import {
  Avatar,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
  Card as CardItem,
  Checkbox,
  Tooltip,
  Button,
} from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { Box, Stack } from "@mui/system";

function Card() {
  return (
    <CardItem
      sx={{
        width: "100%",
        maxWidth: 800,
        mx: "auto",
        boxShadow: "none",
        mb: 2,
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        title="Cute Dog"
        subheader="September 14, 2012"
      />
      <CardMedia
        component="img"
        sx={{ px: 1, borderRadius: 3 }}
        height="500"
        image="https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions>
        <Stack direction={"row"} alignItems="center">
          <Checkbox
            icon={<ThumbUpOffAltIcon />}
            checkedIcon={<ThumbUpIcon />}
          />
          <Typography sx={{ mx: 1, mr: 5 }}>Like</Typography>
        </Stack>

        <Stack direction={"row"} alignItems="center">
          <Button sx={{ color: "text.secondary" }}>
            <ChatBubbleOutlineIcon sx={{ mr: 2 }} />
            <Typography>Comment</Typography>
          </Button>
        </Stack>
      </CardActions>
    </CardItem>
  );
}

export default Card;
