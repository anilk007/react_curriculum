import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { user: null, loading: false, error: null },
  reducers: {
    fetchUserRequest: (state) => { state.loading = true; state.error = null; },
    fetchUserSuccess: (state, action) => { state.loading = false; state.user = action.payload; },
    fetchUserFailure: (state, action) => { state.loading = false; state.error = action.payload; },
  },
});

// Export actions
export const { fetchUserRequest, fetchUserSuccess, fetchUserFailure } = userSlice.actions;

// Export reducer
export default userSlice.reducer;
