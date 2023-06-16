import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getUser = createAsyncThunk('user/getUser', async(numUsers) => {
	try {
		const res = await fetch(`https://randomuser.me/api/?results=${numUsers}`);
		const data = await res.json();
		return data.results;
	} catch (error) {
		throw new Error(error.message);
	}
})

const initialState = {
	users: [],
	isLoading: false,
	error: null,
}

const usersSlice = createSlice({
	name: 'users',
	initialState,
	extraReducers: {
		[getUser.pending]: (state, action) => {
			state.isLoading = true
		},
		[getUser.fulfilled]: (state, action) => {
			state.isLoading = false
			state.users = action.payload
		},
		[getUser.rejected]: (state, action) => {
			state.isLoading  = false
			state.error = action.payload
		}
	}
	
})

export default usersSlice.reducer;