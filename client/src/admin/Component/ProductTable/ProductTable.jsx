import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel, Typography } from "@mui/material";
import Pagination from "../Pagination/Pagination";

export const HEADCELLS = [
    {
        id: "book_url",
        numeric: false,
        disablePadding: false,
        label: "Image"
    },
    {
        id: 'book_name',
        numeric: false,
        disablePadding: true,
        label: 'Book Name',
    },
    {
        id: 'isbn_number',
        numeric: true,
        disablePadding: false,
        label: 'ISBN',
    },
    {
        id: 'book_price',
        numeric: true,
        disablePadding: false,
        label: 'Price',
    },
    {
        id: 'author_name',
        numeric: false,
        disablePadding: false,
        label: 'Author',
    },
    {
        id: 'publisher_name',
        numeric: false,
        disablePadding: false,
        label: 'Pulisher Name',
    },
    {
        id: 'book_edition',
        numeric: true,
        disablePadding: true,
        label: 'Edition',
    },
    {
        id: 'category',
        numeric: false,
        disablePadding: true,
        label: 'Category',
    }
];

const TABLE_DATA = [
    {
        book_id: 1,
        book_name: "Five Survive",
        isbn_number: 9780008507237,
        book_price: "₹200.50",
        author_name: "john doe",
        publisher_name: "Electric Monkey",
        book_edition: "1st edition",
        category: "self-improvement",
        book_url: "https://m.media-amazon.com/images/I/71lkayG+yqL.jpg",
    },
    {
        book_id: 2,
        book_name: "Five Survive",
        isbn_number: 9780008507237,
        book_price: "₹200.50",
        author_name: "john doe",
        publisher_name: "Electric Monkey",
        book_edition: "1st edition",
        category: "self-improvement",
        book_url: "https://m.media-amazon.com/images/I/81s2XYP2D6L.jpg",
    },
    {
        book_id: 3,
        book_name: "Five Survive",
        isbn_number: 9780008507237,
        book_price: "₹200.50",
        author_name: "john doe",
        publisher_name: "Electric Monkey",
        book_edition: "1st edition",
        category: "self-improvement",
        book_url: "https://m.media-amazon.com/images/I/713jIoMO3UL.jpg",
    }
]

const ProductTable = () => {
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('id');
    const [currentPage, setCurrentPage] = useState(0);
    const [recordsPerPage, setRecordsPerPage] = useState(5);
    return (
        <>
            <TableContainer sx={{ maxHeight: 500, backgroundColor : "white", padding: "10px" }}>
                <h2>Product Table</h2>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            {
                                HEADCELLS?.map(head => (
                                    <TableCell key={head.id}>
                                        <TableSortLabel
                                            active={orderBy === head.id}
                                            direction={orderBy === head.id ? order : 'asc'}
                                        >
                                            {head.label}
                                        </TableSortLabel>
                                    </TableCell>
                                ))
                            }
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            TABLE_DATA?.slice(currentPage * recordsPerPage, currentPage * recordsPerPage + recordsPerPage).map(book => (
                                <TableRow key={book.id}>
                                    <TableCell>
                                        <img src={book.book_url} alt={book.book_name} style={{ height: 110, width: 80 }} />
                                    </TableCell>
                                    <TableCell>{book.book_name}</TableCell>
                                    <TableCell>{book.isbn_number}</TableCell>
                                    <TableCell>{book.book_price}</TableCell>
                                    <TableCell>{book.author_name}</TableCell>
                                    <TableCell>{book.publisher_name}</TableCell>
                                    <TableCell>{book.book_edition}</TableCell>
                                    <TableCell>{book.category}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagination
                count={TABLE_DATA.length}
                rowsPerPage={recordsPerPage}
                page={currentPage}
                setPage={setCurrentPage}
                setRowsPerPage={setRecordsPerPage}
            />
        </>
    )
}

export default ProductTable