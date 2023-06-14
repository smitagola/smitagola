import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel, Button, IconButton, Tooltip, Box } from "@mui/material";
import Pagination from '../Pagination/Pagination';

const columns = [
    { field: 'id', headerName: 'ID', width: 80 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'mail', headerName: 'Email', width: 230 },
    { field: 'gender', headerName: 'Gender', width: 100 },
    { field: 'streetname', headerName: 'Street Name', width: 250 },
    { field: 'nearplace', headerName: 'Near Place', width: 170 },
    { field: 'city', headerName: 'City', width: 140 },
    { field: 'state', headerName: 'State', width: 110 },
];

const rows = [
    { id: 1, name: "Meet", mail: "meetpanchal@mail.com", gender: "Male", streetname: "B-202, sona hi sona", nearplace: "200ft. S.P.Ring Road", city: "Ahmedabad", state: "Gujrat" },
    { id: 2, name: "Smit", mail: "smit@mail.com", gender: "Male", streetname: "B-202, sona hi sona", nearplace: "200ft. S.P.Ring Road", city: "Ahmedabad", state: "Gujrat" },
    { id: 3, name: "Harshul", mail: "harshul_patel@mail.com", gender: "Male", streetname: "Panchavati", nearplace: "Navrangpura", city: "Ahmedabad", state: "Gujrat" },
    { id: 4, name: "musharraf", mail: "musharraf@mail.com", gender: "Male", streetname: "Panchavati", nearplace: "Navrangpura", city: "Ahmedabad", state: "Gujrat" },
    { id: 5, name: "Hiren Patel", mail: "hirenpatel@mail.com", gender: "Male", streetname: "nikol", nearplace: "nikol", city: "Ahmedabad", state: "Gujrat" },
    { id: 6, name: "Hiren Patel", mail: "hirenpatel@mail.com", gender: "Male", streetname: "nikol", nearplace: "nikol", city: "Ahmedabad", state: "Gujrat" },
    { id: 7, name: "Hiren Patel", mail: "hirenpatel@mail.com", gender: "Male", streetname: "nikol", nearplace: "nikol", city: "Ahmedabad", state: "Gujrat" },
    { id: 8, name: "Hiren Patel", mail: "hirenpatel@mail.com", gender: "Male", streetname: "nikol", nearplace: "nikol", city: "Ahmedabad", state: "Gujrat" },
];

const CustomerTable = () => {
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('id');
    const [currentPage, setCurrentPage] = useState(0);
    const [recordsPerPage, setRecordsPerPage] = useState(5);

    return (
        <>
            <Box sx={{ boxShadow: "1px 2px 5px lightgray" }}>
                <TableContainer sx={{ height: 400, maxWidth: 1300, backgroundColor: "white", padding : "10px" }}>
                <h2>Customer Table</h2>
                    <Table sx={{ borderRadius: 10 }} stickyHeader>
                        <TableHead>
                            <TableRow>
                                {
                                    columns?.map(column => {
                                        let { field, headerName } = column;
                                        return (
                                            <TableCell key={field} sx={{ fontWeight: 'bold' }}>
                                                <TableSortLabel
                                                // active={orderBy === head.id}
                                                // direction={orderBy === head.id ? order : 'asc'}
                                                >
                                                    {headerName}
                                                </TableSortLabel>
                                            </TableCell>
                                        )
                                    })
                                }
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {
                                rows?.slice(currentPage * recordsPerPage, currentPage * recordsPerPage + recordsPerPage).map(row => {
                                    let { id, name, mail, gender, streetname, nearplace, city, state } = row;
                                    return (
                                        <TableRow key={id}>
                                            <TableCell>{id}</TableCell>
                                            <TableCell>{name}</TableCell>
                                            <TableCell>{mail}</TableCell>
                                            <TableCell>{gender}</TableCell>
                                            <TableCell>{streetname}</TableCell>
                                            <TableCell>{nearplace}</TableCell>
                                            <TableCell>{city}</TableCell>
                                            <TableCell>{state}</TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>

                <Pagination
                    count={rows.length}
                    rowsPerPage={recordsPerPage}
                    page={currentPage}
                    setPage={setCurrentPage}
                    setRowsPerPage={setRecordsPerPage}
                />
            </Box>
        </>
    )
}

export default CustomerTable;