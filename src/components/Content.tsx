import { Box, Fab, Stack } from "@mui/material";
import Homepage from "../page/Homepage";
import Sidebar from "./Sidebar";
import AddIcon from "@mui/icons-material/Add";

function Content() {
  return (
    <Box
      maxWidth="xl"
      bgcolor={"background.default"}
      sx={{
        position: "relative",
        zIndex: -1,
        marginTop: { xs: 3, sm: 7 },
      }}
    >
      <Stack direction={"row"} paddingTop={3}>
        <Homepage />

        <Sidebar />
      </Stack>

      <Box
        sx={{
          position: "fixed",
          bottom: { xs: "10px", md: 0 },
          left: { xs: "calc(50% - 25px)", md: 0 },
          p: { xs: 0, md: 5 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Box>
    </Box>
  );
}

export default Content;
