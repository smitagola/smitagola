import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { fetchBooks, fetchBookDetails, browseBookDetails } from '../features/bookSlice';
import { BOOK_CATEGORY, BOOK_AUTHOR, BOOK_PUBLISHER } from '../constant/Constant';
import { Stack, Box, styled, Paper, FormLabel, FormControl, RadioGroup, FormControlLabel, Radio, InputLabel, Select, MenuItem, ImageList, useTheme, useMediaQuery, Typography } from "@mui/material";
import { DetailsCard } from "../component";
import ElonMusk from "../biography/Elon Musk How the Billionaire CEO of SpaceX and Tesla is Shaping our Future.jpg"
import { unwrapResult } from '@reduxjs/toolkit';

const Books = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let result;
  let bookDetails = useSelector(state => state.book.booksdetails);
  let bookDetail = useSelector(state => state.book.bookinformation);
  const theme = useTheme();
  const mediumSize = useMediaQuery(theme.breakpoints.down('md'));
  const smallSize = useMediaQuery(theme.breakpoints.down('sm'));
  const [bookData, setBookData] = useState([]);
  const [dummyArray, setDummyArray] = useState([]);
  const [browseBooks, setBrowseBooks] = useState({
    category: "",
    author: "",
    publisher: ""
  });
  let { category, author, publisher } = browseBooks;

  const getRecords = async () => {
    try {
      const records = await dispatch(fetchBooks());
      result = unwrapResult(records);
      setBookData(result);
      setDummyArray(result);
    } catch (rejectedValueOrSerializedError) {
      console.log(rejectedValueOrSerializedError);
    }
  }

  const showBookDetails = async (isbn) => {
    dispatch(fetchBookDetails(isbn));
    navigate(`/book/${isbn}`);
  }

  useEffect(() => {
    getRecords();
  }, [])

  const browseBookDetails = () => {
    let array;
    console.log(browseBooks)
    if (category !== "" && publisher === "" && author === "") {
      array = bookData.filter(book => {
        if (book.CategoryName === category) {
          return book;
        }
      });
      console.log(array);
      setBookData(array);
    }
  }


  // Style for main Box (MainContainer)
  const MainContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    padding: "5px 20px",
    gap: "2%",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column"
    }
  }));

  // Style for category container
  const CategoryBarside = styled(Paper)(({ theme }) => ({
    marginLeft: 4,
    marginTop: "30px",
    padding: 20,
    [theme.breakpoints.down("md")]: {
      display: "none"
    }
  }));

  const CategoryDropdown = styled(FormControl)(({ theme }) => ({
    marginTop: "10px",
    [theme.breakpoints.up("md")]: { display: "none" }
  }));

  return (
    <>
      <MainContainer>
        <Stack>
          <Stack direction="column" sx={{ ml: 4 }}>
            <CategoryBarside elevation={2}>
              <FormControl>
                <Typography variant="h5" sx={{ color: "black" }}>Categories</Typography>
                <RadioGroup value={category}>
                  {
                    BOOK_CATEGORY?.map((category) => (
                      <FormControlLabel sx={{ fontSize: "10px" }} name="category" key={category.id} value={category.key} control={<Radio />} label={category.key} onClick={(e) => { setBrowseBooks({ ...browseBooks, [e.target.name]: e.target.value }); browseBookDetails() }} />
                    ))
                  }
                </RadioGroup>
              </FormControl>
            </CategoryBarside>

            <CategoryBarside elevation={2}>
              <FormControl>
                <Typography variant="h5" sx={{ color: "black" }}>Famous Author</Typography>
                <RadioGroup value={author}>
                  {
                    BOOK_AUTHOR?.map((author) => (
                      <FormControlLabel sx={{ fontSize: "10px" }} name="author" key={author.id} value={author.key} control={<Radio />} label={author.key} onClick={(e) => { setBrowseBooks({ ...browseBooks, [e.target.name]: e.target.value }); browseBookDetails() }} />
                    ))
                  }
                </RadioGroup>
              </FormControl>
            </CategoryBarside>

            <CategoryBarside elevation={2}>
              <FormControl>
                <Typography variant="h5" sx={{ color: "black" }}>Famous Publisher</Typography>
                <RadioGroup value={publisher}>
                  {
                    BOOK_PUBLISHER?.map((publisher) => (
                      <FormControlLabel sx={{ fontSize: "10px" }} name="publisher" key={publisher.id} value={publisher.key} control={<Radio />} label={publisher.key} onClick={(e) => { setBrowseBooks({ ...browseBooks, [e.target.name]: e.target.value }); browseBookDetails() }} />
                    ))
                  }
                </RadioGroup>
              </FormControl>
            </CategoryBarside>
          </Stack>
        </Stack>

        <ImageList cols={3} sx={{ p: 1 }}>
          {
            bookData?.map((book) => (
              <DetailsCard
                key={book.BookISBNNumber}
                bookname={book.BookName}
                bookprice={book.BookPrice}
                bookauthor={book.AuthorName}
                bookcategory={book.CategoryName}
                img={book.BookImage}
                getBookDetail={() => showBookDetails(book.BookISBNNumber)}
              />
            ))
          }
        </ImageList>
      </MainContainer>
    </>
  )
}

export default Books