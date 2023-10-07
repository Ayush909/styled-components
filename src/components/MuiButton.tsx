import React, { useState } from "react";
import {
  Button,
  Stack,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

export const MuiButton = () => {
  const [formats, setFormats] = useState<string[]>([]);

  console.log(formats);

  const handleFormatChange = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[]
  ) => {
    setFormats(newFormats);
  };
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://google.com">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>

        <Button variant="outlined" color="error">
          Error
        </Button>
      </Stack>

      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <ButtonGroup
          variant="contained"
          color="secondary"
          orientation="vertical"
          aria-label="alignment button group"
        >
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="row">
        <ToggleButtonGroup
          value={formats}
          onChange={handleFormatChange}
          aria-label="text formatting"
          color="primary"
        >
          <ToggleButton value="bold">Bold</ToggleButton>
          <ToggleButton value="italic">Italic</ToggleButton>
          <ToggleButton value="underlined">Underlined</ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};
