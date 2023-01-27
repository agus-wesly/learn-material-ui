import { Box, Fab, Stack } from "@mui/material";
import Homepage from "../page/Homepage";
import Sidebar from "./Sidebar";
import AddIcon from "@mui/icons-material/Add";
import ModalComponent from "./ModalComponent";
import { useState } from "react";

function Content() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClose = () => {
    setModalOpen(false);
  };

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
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => setModalOpen(true)}
        >
          <AddIcon />
        </Fab>
      </Box>
      <ModalComponent open={modalOpen} handleClose={handleClose} />
    </Box>
  );
}

export default Content;
