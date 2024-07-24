import React, { useState } from 'react';
import { TableContainer, TableHead, TableBody, TableCell, TableRow, TableSortLabel, TablePagination } from '@mui/material';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { Helmet } from "react-helmet";

const withTableEnhancements = (WrappedComponent) => {
  return function WithTableEnhancements({ data, columns, ...props }) {
    const [sortDirection, setSortDirection] = useState('asc');
    const [orderBy, setOrderBy] = useState(columns[0].id);
    const [filterText, setFilterText] = useState('');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleRequestSort = (property) => {
      const isAsc = orderBy === property && sortDirection === 'asc';
      setSortDirection(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    };

    const handleFilterChange = (event) => {
      setFilterText(event.target.value);
      setPage(0); // Reset page on filter change
    };

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    const filteredData = data.filter(row =>
      columns.some(column =>
        row[column.id]?.toString().toLowerCase().includes(filterText.toLowerCase())
      )
    );

    const sortedData = filteredData.sort((a, b) => {
      if (a[orderBy] < b[orderBy]) return sortDirection === 'asc' ? -1 : 1;
      if (a[orderBy] > b[orderBy]) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });

    const paginatedData = sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
      <div>
        <Helmet>
        <title>React Task-5</title>
        <meta name="description" />
      </Helmet>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search"
            value={filterText}
            onChange={handleFilterChange}
          />
          <Button variant="outline-secondary">Search</Button>
        </InputGroup>

        <TableContainer>
          <TableContainer>
            <TableHead>
              <TableRow>
                {columns.map(column => (
                  <TableCell key={column.id}>
                    <TableSortLabel
                      active={orderBy === column.id}
                      direction={orderBy === column.id ? sortDirection : 'asc'}
                      onClick={() => handleRequestSort(column.id)}
                    >
                      {column.label}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData.map((row, index) => (
                <TableRow key={index}>
                  {columns.map(column => (
                    <TableCell key={column.id}>{row[column.id]}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </TableContainer>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    );
  };
};

export default withTableEnhancements;
