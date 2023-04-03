import {createSlice} from "@reduxjs/toolkit";
import {UserStateProps} from "../types/type";

type InitialState = {
  clips: UserStateProps[];
};

const initialState: InitialState = {
  clips: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addClip: (state, action) => {
      const newClip = action.payload;
      state.clips.push(newClip);
    },
    deleteClip: (state, action) => {
      const deletingClip = action.payload;
      const currentClips = state.clips;
      const filteredClip = currentClips.filter(
        (clip: any) => clip.url! == deletingClip.url,
      );
      state.clips = filteredClip;
    },
  },
});

// Action creators are generated for each case reducer function
export const {addClip, deleteClip} = userSlice.actions;

export default userSlice.reducer;
