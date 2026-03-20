import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  ForgotPasswordPayload,
  ForgotPasswordResponse,
  verifyEmail,
} from "../../../axios-config/auth/forgotpassword-service";

interface ForgotPasswordState {
  loading: boolean;
  error: string | null;
  success: boolean;
  message: string | null;
  data: ForgotPasswordResponse | null;
}

const initialState: ForgotPasswordState = {
  loading: false,
  error: null,
  success: false,
  message: null,
  data: null, // Ensure data is initialized
};

export const forgotPassword = createAsyncThunk(
  "forgotPassword/sendReset",
  async (payload: ForgotPasswordPayload, { rejectWithValue }) => {
    try {
      const response = await verifyEmail(payload);
      return {
        message: response.message,
        status: response.status,
        data: response.data,
      };
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "An error occurred",
      );
    }
  },
);

const forgotPasswordSlice = createSlice({
  name: "forgotPassword",
  initialState,
  reducers: {
    resetState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
      state.message = null;
      state.data = null; // Reset data as well
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.message = action.payload.message;
        state.data = action.payload.data; // Bind data to state
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetState } = forgotPasswordSlice.actions;
export default forgotPasswordSlice.reducer;
