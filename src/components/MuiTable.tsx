import React, { useState, useEffect } from 'react';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';








export const MuiTable = () => {
    return <TableContainer component={Paper} >
        <Table aria-label='simple table' stickyHeader>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>First name</TableCell>
                    <TableCell>Last name</TableCell>
                    <TableCell align='center'>Email</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    tableData.map((row) => (
                        <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0}}}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.first_name}</TableCell>
                            <TableCell>{row.last_name}</TableCell>
                            <TableCell align='center'>{row.email}</TableCell>
                        </TableRow>
                    ))}
            </TableBody>
        </Table>
    </TableContainer>
}








const tableData = [{
    "id": 1,
    "first_name": "Joanie",
    "last_name": "Setch",
    "email": "jsetch0@admin.ch",
    "gender": "Genderqueer",
    "ip_address": "1.216.171.40"
}, {
    "id": 2,
    "first_name": "Victor",
    "last_name": "Sloper",
    "email": "vsloper1@independent.co.uk",
    "gender": "Genderfluid",
    "ip_address": "131.63.197.5"
}, {
    "id": 3,
    "first_name": "Briana",
    "last_name": "Chamberlaine",
    "email": "bchamberlaine2@examiner.com",
    "gender": "Female",
    "ip_address": "79.144.233.45"
}, {
    "id": 4,
    "first_name": "Darius",
    "last_name": "Bulter",
    "email": "dbulter3@angelfire.com",
    "gender": "Bigender",
    "ip_address": "196.56.250.185"
}, {
    "id": 5,
    "first_name": "Jeth",
    "last_name": "Mayward",
    "email": "jmayward4@weibo.com",
    "gender": "Male",
    "ip_address": "242.38.56.248"
}, {
    "id": 6,
    "first_name": "Min",
    "last_name": "Naldrett",
    "email": "mnaldrett5@i2i.jp",
    "gender": "Female",
    "ip_address": "81.206.156.83"
}, {
    "id": 7,
    "first_name": "Norah",
    "last_name": "Antonignetti",
    "email": "nantonignetti6@gravatar.com",
    "gender": "Female",
    "ip_address": "88.164.118.18"
}, {
    "id": 8,
    "first_name": "Larry",
    "last_name": "Deer",
    "email": "ldeer7@buzzfeed.com",
    "gender": "Male",
    "ip_address": "114.216.216.234"
}, {
    "id": 9,
    "first_name": "Thom",
    "last_name": "Read",
    "email": "tread8@hubpages.com",
    "gender": "Male",
    "ip_address": "175.13.174.73"
}, {
    "id": 10,
    "first_name": "Binny",
    "last_name": "Turneaux",
    "email": "bturneaux9@tuttocitta.it",
    "gender": "Female",
    "ip_address": "14.109.6.144"
}]

