import { createSlice,  PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface Post{
    userId: number
    id: number;
    title: string;
    body: string
}

interface PostsState{
    posts: Post[];
    loading: boolean;
    error: string | null
    
}


const initialState: PostsState = {
    posts: [],
    loading: false,
    error: null
}

export const fetchPosts = createAsyncThunk<Post[]>(
    "posts/fetchPosts",
    async()=>{
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if(!res.ok){
            throw new Error(`Failed to fetch posts: ${res.statusText}`)
        }
        return res.json()

    }
)

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchPosts.fulfilled,(state, action: PayloadAction<Post[]>)=>{
            state.loading = false;
            state.posts = action.payload;
        })
        .addCase(fetchPosts.rejected,(state, action)=>{
            state.loading = false;
            state.error = action.error.message || "Failed to fetch posts"
        })
        
    },
})

export default postsSlice.reducer;