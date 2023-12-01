import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';


export default function DenseTable({ renderData, dataProvider, enableEdit, onClickEdit }) {
  return (
    <>
    <TableContainer component={Paper}>
      <div style={{display: 'flex', justifyContent: "end"}}><Button onClick={onClickEdit}>Edit</Button></div>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {renderData && renderData.map((row) => <TableCell>{row.label}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {renderData && renderData.map((row) => (
           <TableCell>
            {dataProvider[row.field]}
            </TableCell>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
