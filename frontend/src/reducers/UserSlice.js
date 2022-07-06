import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { httpGet, httpPost, httpDelete, httpPut } from '../utils';

const usersAdapter = createEntityAdapter();

const initialState = usersAdapter.getInitialState({
    status: "not_loaded",
    error: null,
});

const baseUrl = 'http://localhost:3004';

export const fetchUsers = createAsyncThunk("database/fetchUsers", async () => {
    return await httpGet(`${baseUrl}/users`);
});

export const deleteUsersServer = createAsyncThunk("database/deleteUsersServer", async (idUser) => {
    await httpDelete(`${baseUrl}/users/${idUser}`);
    return idUser;
});

export const addUsersServer = createAsyncThunk("database/addUsersServer", async (user) => {
    return await httpPost(`${baseUrl}/users`, user);
});

export const updateUsersServer = createAsyncThunk("database/updateUsersServer", async (user) => {
    return await httpPut(`${baseUrl}/users/${user.id}`, user);
});

export const usersSlice = createSlice({
    name: "users",
    initialState: initialState,
    extraReducers: {
        [fetchUsers.pending]: (state, action) => { state.status = "loading";},
        [fetchUsers.fulfilled]: (state, action) => {state.status = "loaded"; usersAdapter.setAll(state, action.payload);},
        [fetchUsers.rejected]: (state, action) => {state.status = "failed"; state.error = action.error.message;},
        [deleteUsersServer.pending]: (state, action) => {state.status = "loading";},
        [addUsersServer.pending]: (state, action) => {state.status = "loading";},
        [updateUsersServer.pending]: (state, action) => {state.status = "loading";},
        [deleteUsersServer.fulfilled]: (state, { payload: id }) => {state.status = "deleted";usersAdapter.removeOne(state, id);},
        [addUsersServer.fulfilled]: (state, action) => {state.status = "saved";usersAdapter.addOne(state, action.payload);},
        [updateUsersServer.fulfilled]: (state, action) => {state.status = "saved";usersAdapter.upsertOne(state, action.payload);},
    },
  });

  export default usersSlice.reducer;

  export const {
    selectAll: selectAllUsers,
    selectById: selectUsersById,
    selectIds: selectUsersIds,
  } = usersAdapter.getSelectors((state) => state.users);
