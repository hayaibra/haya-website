import {
  Avatar,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ImageIcon from "@mui/icons-material/Image";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import DateRangeIcon from "@mui/icons-material/DateRange";

function Add() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Tooltip
        sx={{
          position: "fixed",
          bottom: "20px",
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
        title="add"
        onClick={(e) => setOpen(true)}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box
          sx={{
            width: "400px",
            height: "280px",
            color: "text.primary",
            borderRadius: 5,
            bgcolor: "white",
            p: 2,
          }}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Avatar
              alt="Remy Sharp"
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              sx={{ mx: 1, width: "30px", height: "30px" }}
            />
            <Typography>Haya Ibrahim</Typography>
          </Box>
          <TextField
            id="standard-textarea"
            label="What's in your mind?"
            placeholder="Placeholder"
            multiline
            variant="standard"
            fullWidth
            rows={3}
          />
          <Stack direction="row" spacing={1} mt={2} mb={2}>
            <EmojiEmotionsIcon color="primary" fontSize="small" />
            <ImageIcon color="secondary" fontSize="small" />
            <VideoCameraBackIcon color="success" fontSize="small" />
            <PersonAddAlt1Icon color="error" fontSize="small" />
          </Stack>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            fullWidth
          >
            <Button sx={{ width: "80%" }}>Post</Button>
            <Button sx={{ width: "20%" }}>
              <DateRangeIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
}

export default Add;
