import React from 'react'
import PropTypes from 'prop-types'
import { TableCell, TableHead, TableRow, TableSortLabel } from '@material-ui/core'

const SortableTableHead = ({ order, orderBy, onSort }) => {
  const headerCols = [
    { id: 'name', label: 'Name' },
    { id: 'email', label: 'E-mail' },
    { id: 'birthday', label: 'Birthday' },
    { id: 'zipcode', label: 'Zipcode' },
    { id: 'actions', label: 'Actions' },
  ]

  const sortHandler = column => () => {
    onSort(column)
  }

  return (
    <TableHead>
      <TableRow>
        {headerCols.map(col => (
          <TableCell
            key={col.id}
            sortDirection={orderBy === col.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === col.id}
              direction={order}
              onClick={sortHandler(col.id)}
            >
              {col.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

SortableTableHead.propTypes = {
  order: PropTypes.string,
  orderBy: PropTypes.string,
  onRequestSort: PropTypes.func,
}

export default SortableTableHead
