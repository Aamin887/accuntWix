import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";

// user getting their info
export const userGetUser = createAsyncThunk(
  "users/userInfoUser",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      console.log(token);
      return await userService.getUser(id, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//admin getting all users info
export const getAllUser = createAsyncThunk(
  "user/allUser",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.admin.token;
      return await userService.allUsers(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//admin updating a user's info
export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (data, thunkAPI) => {
    try {
      const { _id } = data;
      console.log(_id);
      const token = thunkAPI.getState().auth.admin.token;
      return await userService.updateUser(_id, data, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const initialState = {
  userInfo: null,
  allUsers: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userGetUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userGetUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userInfo = action?.payload;
        state.isSuccess = true;
      })
      .addCase(userGetUser.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.userInfo = null;
        state.message = action.payload;
      })
      .addCase(getAllUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allUsers.push(action?.payload);
        state.isSuccess = true;
      })
      .addCase(getAllUser.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.allUsers = [];
        state.message = action.payload;
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        const users = state.allUsers[0].filter((user) =>
          user._id !== action.payload._id ? user : action.payload
        );
        state.allUsers.push([...users, action.payload]);
        state.userInfo = action.payload;
        console.log("hello");
        state.isSuccess = true;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      });
  },
});

export const { userReset } = userSlice.actions;

export default userSlice.reducer;
