import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login, LoginPaylod } from "../../../axios-config/auth-service";

interface AuthState {
  isAuthenticated: boolean;
  loading: boolean;
  token: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  loading: false,
  token: null,
};

// Async thunk for handling login action
export const loginAction = createAsyncThunk(
  "auth/login",
  async (payload: LoginPaylod, { rejectWithValue }) => {
    // 🔥 Call login API and return token
    try {
      const response = await login(payload);
      return response.data.token;
    } catch (error) {
      return rejectWithValue(`LoginFailed: ${error}`);
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.isAuthenticated = false;
      state.token = null;
      localStorage.removeItem("authToken");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.token = action.payload;
        state.loading = false;
      })
      .addCase(loginAction.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
