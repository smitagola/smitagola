import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel, Button, IconButton, Tooltip } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Pagination from '../Pagination/Pagination';

const HEADCELLS = [
    {
        id: "order_id",
        numeric: true,
        label: "Order ID"
    },
    {
        id: "customer_name",
        numeric: false,
        label: "Customer Name"
    },
    {
        id: "book_name",
        numeric: false,
        label: "Book Name"
    },
    {
        id: "numberOfBooks",
        numeric: true,
        label: "Quantity"
    },
    {
        id: "total_amount",
        numeric: true,
        label: "Amount"
    }
];

const DATA = [
    {
        order_id: 12345,
        customer_name: "John Doe",
        book_name: "Elon Musk",
        numberOfBooks: 5,
        total_amount: 1000
    },
    {
        order_id: 18763,
        customer_name: "Akash Patel",
        book_name: "Steve Jobs",
        numberOfBooks: 2,
        total_amount: 500.63
    },
    {
        order_id: 56724,
        customer_name: "John weak",
        book_name: "Story of Ratan Tata",
        numberOfBooks: 1,
        total_amount: 300
    },
    {
        order_id: 19876,
        customer_name: "How to win friends and influence people",
        book_name: "Dale Carnigi",
        numberOfBooks: 2,
        total_amount: 200.98
    },
    {
        order_id: 23497,
        customer_name: "Meet Panchal",
        book_name: "Elon Musk",
        numberOfBooks: 5,
        total_amount: 1000
    }
];

const OrderTable = () => {
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('id');
    const [currentPage, setCurrentPage] = useState(0);
    const [recordsPerPage, setRecordsPerPage] = useState(5);

    return (
        <>
            <TableContainer sx={{ maxHeight: 500, maxWidth: 1200, backgroundColor : 'white' }}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            {
                                HEADCELLS?.map(head => (
                                    <TableCell key={head.id} sx={{ fontWeight: 'bold' }}>
                                        <TableSortLabel
                                            active={orderBy === head.id}
                                            direction={orderBy === head.id ? order : 'asc'}
                                        >
                                            {head.label}
                                        </TableSortLabel>
                                    </TableCell>
                                ))
                            }
                            <TableCell sx={{ fontWeight: 'bold' }}>Action</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            DATA?.slice(currentPage * recordsPerPage, currentPage * recordsPerPage + recordsPerPage).map(order_record => {
                                let { order_id, customer_name, book_name, numberOfBooks, total_amount } = order_record
                                return (
                                    <TableRow key={order_id}>
                                        <TableCell>{order_id}</TableCell>
                                        <TableCell>{customer_name}</TableCell>
                                        <TableCell>{book_name}</TableCell>
                                        <TableCell>{numberOfBooks}</TableCell>
                                        <TableCell>{total_amount}</TableCell>
                                        <TableCell>
                                            <Tooltip title="Edit">
                                                <IconButton>
                                                    <EditIcon sx={{ color: "dodgerblue" }} />
                                                </IconButton>
                                            </Tooltip>

                                            <Tooltip title="Delete">
                                                <IconButton>
                                                    <DeleteIcon sx={{ color: "red" }} />
                                                </IconButton>
                                            </Tooltip>
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagination
                count={DATA.length}
                rowsPerPage={recordsPerPage}
                page={currentPage}
                setPage={setCurrentPage}
                setRowsPerPage={setRecordsPerPage}
            />
        </>
    )
}

export default OrderTable