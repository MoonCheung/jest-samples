import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUser } from '../../api/user';

export const fetchUserThunk = createAsyncThunk('user/fetchUserThunk', async () => {
  const response = await fetchUser();
  return response.data;
});
