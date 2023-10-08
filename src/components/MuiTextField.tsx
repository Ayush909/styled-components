import React from "react";
import { Stack, TextField } from "@mui/material";

const MuiTextField = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField label="Small Secondary" color="secondary" size="small" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Form Input"
          required
          color="secondary"
          size="small"
          helperText="Do not share your password"
        />
        <TextField label="Password" type="password" size="small" disabled />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
