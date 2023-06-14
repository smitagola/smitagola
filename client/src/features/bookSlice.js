import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = `http://localhost:7001`;

export const fetchBooks = createAsyncThunk(
    "book/fetchBooks",
    async () => {
        const response = await axios.get(`${URL}/books`);
        return response.data;
    }
);

export const fetchBookDetails = createAsyncThunk(
    "book/fetchBookDetails",
    async (ISBN) => {
        const response = await axios.get(`${URL}/books/${ISBN}`);
        return response.data;
    }
)

export const bookSlice = createSlice({
    name: "book",
    initialState: {
        bookdetails: [],
        categories : [],
        authors : [],
        publishers : [],
        bookinformation: {
            BookISBNNumber: "",
            BookName: "",
            AuthorName: "",
            BookPrice: 0,
            PublisherName: "",
            BookEdition: "",
            BookLanguage: "",
            BookImage: "",
            CategoryId: 0,
            CategoryName: ""
        },
        loading: false,
        error: ""
    },
    reducers: {
        browseBookDetails : (state, action) => {
            console.log(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            state.loading = false;
            state.bookdetails = action.payload;
            state.error = "";
        });

        builder.addCase(fetchBooks.rejected, (state, action) => {
            state.loading = false;
            state.bookdetails = [];
            state.error = action.error.message;
        });

        builder.addCase(fetchBookDetails.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(fetchBookDetails.fulfilled, (state, action) => {
            state.loading = false;
            state.bookinformation = action.payload;
            state.error = "";
        });

        builder.addCase(fetchBookDetails.rejected, (state, action) => {
            state.loading = false;
            state.bookinformation = {};
            state.error = action.error.message;
        });
    }
});

export const { browseBookDetails } = bookSlice.actions;
export default bookSlice.reducer;