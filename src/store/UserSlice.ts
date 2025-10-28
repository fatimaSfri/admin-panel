import { createSlice,type PayloadAction} from "@reduxjs/toolkit";


interface UserInfo {
 userName:string,
 email:string,
 password:number,
}

const initialState ={
    items:[]  as UserInfo[]
}

const userSlice =createSlice({
  name:'user' ,
  initialState,
  reducers:{
   addUser(state , action:PayloadAction<UserInfo>){
    state.items.push(action.payload);
   }
  }
}) 

export const {addUser} =userSlice.actions;
export default userSlice.reducer;