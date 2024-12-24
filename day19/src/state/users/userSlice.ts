
import { createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

interface User {
    id: number;
    name: string;
    email: string;
    username: string
}

interface UserState{
    users: User[],
    loading: boolean,
    error: string | null
    
}

const initialState: UserState = {
    users: [],
    loading: false,
    error: null
}

export const fetchUsers = createAsyncThunk<User[]>(
    "users/fetchUsers",
    async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if(!res.ok){
        throw new Error(`Failed to fetch data: ${res.statusText}`)
    }
    return res.json()
  
    }
)

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder
        .addCase(fetchUsers.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>)=>{
            state.loading = false;
            state.error = null;
            state.users = action.payload
        })
        .addCase(fetchUsers.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error.message || "Failed to fetch user"
        })
    }
})

export default userSlice.reducer