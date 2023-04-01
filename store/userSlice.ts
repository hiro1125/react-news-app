import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type Clip = {
  url: string;
};

type UserState = {
  clips: Clip[];
};

const initialState: UserState = {
  clips: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addClip: (state, action: PayloadAction<Clip>) => {
      const newClip = action.payload;
      state.clips.push(newClip);
    },
    deleteClip: (state, action: PayloadAction<Clip>) => {
      const deletingClip = action.payload;
      const currentClips = state.clips;
      const filteredClips = currentClips.filter(
        (clip) => clip.url! == deletingClip.url,
      );
      state.clips = filteredClips;
    },
  },
});

export const {addClip, deleteClip} = userSlice.actions;
export default userSlice.reducer;
