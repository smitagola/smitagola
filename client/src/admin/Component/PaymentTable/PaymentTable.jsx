import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel } from "@mui/material";
import Pagination from "../Pagination/Pagination";

const HEADCELLS = [
    {
        id: "payment_id",
        numeric: true,
        label: "ID"
    },
    {
        id: "payment_type",
        numeric: false,
        label: "Type"
    },
    {
        id: "payment_amount",
        numeric: true,
        label: "Amount"
    },
    {
        id: "taransaction_id",
        numeric: false,
        label: "Transaction Id"
    },
    {
        id: "payment_time",
        numeric: false,
        label: "Time"
    },
    {
        id: "payment_date",
        numeric: false,
        label: "Date"
    },
    {
        id: "order_id",
        numeric: true,
        label: "Order Id"
    }
];

const data = [
    {
        payment_id: 1,
        payment_type: "COD",
        payment_amount: "₹500.30",
        taransaction_id: "",
        payment_time: "12:00:34 IST",
        payment_date: "02/02/2023",
        order_id: 1234
    },
    {
        payment_id: 2,
        payment_type: "ONLINE",
        payment_amount: "₹200",
        taransaction_id: "1234X345WQ",
        payment_time: "12:00:34 IST",
        payment_date: "02/02/2023",
        order_id: 4567
    },
    {
        payment_id: 3,
        payment_type: "COD",
        payment_amount: "₹200",
        taransaction_id: "",
        payment_time: "12:00:34 IST",
        payment_date: "02/02/2023",
        order_id: 4567
    },
    {
        payment_id: 4,
        payment_type: "COD",
        payment_amount: "₹200",
        taransaction_id: "",
        payment_time: "12:00:34 IST",
        payment_date: "02/02/2023",
        order_id: 4567
    },
    {
        payment_id: 5,
        payment_type: "COD",
        payment_amount: "₹200",
        taransaction_id: "",
        payment_time: "12:00:34 IST",
        payment_date: "02/02/2023",
        order_id: 4567
    },
];

const PaymentTable = () => {
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('id');
    const [currentPage, setCurrentPage] = useState(0);
    const [recordsPerPage, setRecordsPerPage] = useState(5);
    return (
        <>
            <TableContainer sx={{ maxHeight: 500, maxWidth : 1200, backgroundColor : "white", padding : "5px 10px" }}>
                <h2>Payment Table</h2>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            {
                                HEADCELLS?.map(head => (
                                    <TableCell key={head.id} sx={{ fontWeight : 'bold'}}>
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
                            data?.slice(currentPage * recordsPerPage, currentPage * recordsPerPage + recordsPerPage).map(payment => (
                                <TableRow key={payment.payment_id}>
                                    <TableCell>{payment.payment_id}</TableCell>
                                    <TableCell>{payment.payment_type}</TableCell>
                                    <TableCell>{payment.payment_amount}</TableCell>
                                    <TableCell>{payment.taransaction_id}</TableCell>
                                    <TableCell>{payment.payment_time}</TableCell>
                                    <TableCell>{payment.payment_date}</TableCell>
                                    <TableCell>{payment.order_id}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            <Pagination
                count={data.length}
                rowsPerPage={recordsPerPage}
                page={currentPage}
                setPage={setCurrentPage}
                setRowsPerPage={setRecordsPerPage}
            />
            </TableContainer>
        </>
    )
}

export default PaymentTable