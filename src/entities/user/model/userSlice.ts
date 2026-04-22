import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IWheel } from '@/entities/wheel/model/types';
import type { IRecord } from '@/entities/record/model/types';
import { userApi } from '@/entities/user/model/api';

interface UserState {
  id: number | null;
  name: string;
  email: string;
  isAuthenticated: boolean;
  loading: boolean;
  token: string | null;
  error: string | null;
  wheels: IWheel[];
  records: IRecord[];
}

const initialState: UserState = {
  id: null,
  name: '',
  email: '',
  isAuthenticated: !!localStorage.getItem('token'),
  loading: false,
  token: localStorage.getItem('token'),
  error: null,
  wheels: [],
  records: []
};

export const loginUser = createAsyncThunk(
  'user/login',
  async (credentials: { login: string; password: string }) => {
    const response = await userApi.login(credentials);
    return response;
  }
);

export const fetchUserProfile = createAsyncThunk(
  'user/fetchProfile',
  async () => {
    const response = await userApi.getCurrentProfile();
    return response;
  }
);


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ id: number; name: string; email: string }>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isAuthenticated = true;
    },
    logout: () => {
      return initialState;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.id = action.payload.data.user.user_id;
        state.name = action.payload.data.user.name;
        state.email = action.payload.data.user.email;
        state.token = action.payload.data.token;  
        state.wheels = action.payload.data.user.wheels;
        state.records = action.payload.data.user.records;
        state.isAuthenticated = true;
        localStorage.setItem('token', action.payload.data.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Ошибка входа';
      })
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.id = action.payload.data.user_id;
        state.name = action.payload.data.name;
        state.email = action.payload.data.email;
        state.wheels = action.payload.data.wheels;
        state.records = action.payload.data.records;
        state.isAuthenticated = true;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Ошибка получения профиля';
      });
  },
});

export const { setUser, logout, clearError } = userSlice.actions;
export default userSlice.reducer;