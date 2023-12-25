import React from "react";
import {styled} from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import {IconButton} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const StyledTableCell = styled(TableCell)(({theme}) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const InventoryList = ({products, onDelete, onEdit}) => {
  return (
    <div>
      <h2>Inventory List</h2>
      <TableContainer component={Paper}>
        <Table sx={{minWidth: 700}} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Product name</StyledTableCell>
              <StyledTableCell align="right">Category</StyledTableCell>
              <StyledTableCell align="right">Brand</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
              <StyledTableCell align="right">Unit</StyledTableCell>
              <StyledTableCell align="right">Qty</StyledTableCell>
              <StyledTableCell align="right">Created_by</StyledTableCell>
              <StyledTableCell align="right">Click</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <StyledTableRow key={product.id}>
                <StyledTableCell component="th" scope="product">
                  {product.product_name}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {product.Category}
                </StyledTableCell>
                <StyledTableCell align="right">{product.Brand}</StyledTableCell>
                <StyledTableCell align="right">{product.Price}TK</StyledTableCell>
                <StyledTableCell align="right">{product.Unit}</StyledTableCell>
                <StyledTableCell align="right">{product.Qty}</StyledTableCell>
                <StyledTableCell align="right">
                  {product.Created_by}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <IconButton aria-label="delete" size="large">
                    <EditIcon onClick={() => onEdit(product)} />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    size="large"
                    onClick={() => onDelete(product.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <ul>
        {products.map((product) => (
          <li key={product.id}>
            <button onClick={() => onDelete(product.id)}>Delete</button>
            <button onClick={() => onEdit(product)}>Edit</button>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default InventoryList;