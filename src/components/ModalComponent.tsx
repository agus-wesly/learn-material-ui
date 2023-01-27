import { Avatar, Box, IconButton, TextField, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import { Stack, styled } from "@mui/system";
import MoodIcon from "@mui/icons-material/Mood";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import SendIcon from "@mui/icons-material/Send";

interface IProps {
  open: boolean;
  handleClose: () => void;
}

const StyledBox = styled(Box)(({ theme }) => ({
  background: theme.palette.background.default,
  minWidth: "330px",
  width: "50%",
  color: theme.palette.text.primary,
  borderRadius: 10,
  padding: 10,
  paddingInline: 20,
}));

function ModalComponent({ open, handleClose }: IProps) {
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <StyledBox>
          <Stack direction={"row"} alignItems="center" gap={2} mb={2}>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Typography variant="body2">Travis Howard</Typography>
          </Stack>

          <TextField
            fullWidth
            variant="standard"
            placeholder="What's on your mind ?"
            multiline
            rows={3}
          />

          <Stack direction={"row"} mt={2} justifyContent="space-between">
            <Box>
              <IconButton>
                <MoodIcon />
              </IconButton>

              <IconButton>
                <AddPhotoAlternateIcon />
              </IconButton>
            </Box>

            <Box>
              <IconButton>
                <SendIcon color="primary" />
              </IconButton>
            </Box>
          </Stack>
        </StyledBox>
      </Modal>
    </>
  );
}

export default ModalComponent;
