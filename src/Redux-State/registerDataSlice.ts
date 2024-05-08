import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RegisterData {
  name: string;
  selectedGender: string | null;
  mobileNumber: string;
  address: string;
  city: string;
  district: string;
  ABHA:string;
}

const initialState: RegisterData = {
  name: '',
  selectedGender: null,
  mobileNumber: '',
  address: '',
  city: '',
  district: '',
  ABHA:'',
};

const registerDataSlice = createSlice({
  name: 'registerData',
  initialState,
  reducers: {
    updateRegisterData(state, action: PayloadAction<RegisterData>) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});
export default registerDataSlice.reducer;
export const { updateRegisterData } = registerDataSlice.actions;

