import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../../services/apiGeocoding";

const initialState = {
	userName: "",
	status: "idle",
	position: {},
	address: "",
	error: "",
	isAuthenticated: false,
};

function getPosition() {
	return new Promise(function (resolve, reject) {
		navigator.geolocation.getCurrentPosition(resolve, reject);
	});
}

export const fetchAddress = createAsyncThunk(
	"user/fetchAddress",
	async function () {
		// 1) We get the user's geolocation position
		const positionObj = await getPosition();
		const position = {
			latitude: positionObj.coords.latitude,
			longitude: positionObj.coords.longitude,
		};

		// 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
		const addressObj = await getAddress(position);
		const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

		console.log("gotten Position");
		// 3) Then we return an object with the data that we are interested in
		// the returned result will be the 'action.payload'
		return { position, address };
	}
);

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		updateName(state, action) {
			state.userName = action.payload;
			state.isAuthenticated = true;
		},
	},
	extraReducers: (builder) =>
		builder
			.addCase(fetchAddress.pending, (state, action) => {
				state.status = "loading";
			})
			.addCase(fetchAddress.fulfilled, (state, action) => {
				state.position = action.payload.position;
				state.address = action.payload.address;
				state.status = "idle";
			})
			.addCase(fetchAddress.rejected, (state, action) => {
				state.error = action.error.message;
				state.status = "error";
			}),
});

export const { updateName } = userSlice.actions;
export default userSlice.reducer;

export const getUsername = (state) => state.user.userName;

export const getUser = (state) => state.user;

export const getUserFirstname = (state) => state.user.userName.split(" ")[0];
