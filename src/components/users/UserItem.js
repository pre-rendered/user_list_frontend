import React from 'react'
import PropTypes from 'prop-types'
import { IconButton, TableBody, TableCell, TableRow } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'

const UserItem = ({ users, deleteUser, order, orderBy, tableSort, toggleSortFn }) => {
  const deleteHandler = userId => () => {
    deleteUser(userId)
  }

  return (
    <TableBody>
      {tableSort(users, toggleSortFn(order, orderBy))
        .map((user, index) => (
          <TableRow key={`userItem-${index}`}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.birthday}</TableCell>
            <TableCell>{user.zipcode}</TableCell>
            <TableCell component="th" scope="row">
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={deleteHandler(user.id)}
              >
                <DeleteIcon/>
              </IconButton>
            </TableCell>
          </TableRow>
        ))
      }
    </TableBody>
  )
}

UserItem.propTypes = {
  users: PropTypes.array,
  deletUser: PropTypes.func,
  order: PropTypes.string,
  orderBy: PropTypes.string,
  tableSort: PropTypes.func,
  getSorting: PropTypes.func,
}

export default UserItem
