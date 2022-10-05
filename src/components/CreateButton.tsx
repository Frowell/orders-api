import * as React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';

export default function CreateButton() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" startIcon={<AddIcon/>} sx={{mx:"auto"}}>Create Order</Button>
    </Stack>
  );
}
