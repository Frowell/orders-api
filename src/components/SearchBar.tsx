import * as React from 'react';
import Stack from '@mui/material/Stack';
import SearchButton from './SearchButton';
import SearchField from './SearchField';

export default function SearchBar() {
  return (
    <Stack direction="row" spacing={2}>
      <SearchField></SearchField>
      <SearchButton></SearchButton>

    </Stack>
  );
}
