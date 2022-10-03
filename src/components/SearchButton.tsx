import * as React from 'react';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';

export default function SearchButton() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" startIcon={<SearchIcon/>}></Button>
    </Stack>
  );
}
