import React from 'react'
import PropTypes from 'prop-types'
import { Table } from '@material-ui/core'
import UserItem from './UserItem'
import SortableTableHead from '../table/SortableTableHead'

const UserList = ({ users, deleteUser, toggleSortFn, tableSort }) => {
  const [order, setOrder] = React.useState('asc')
  const [orderBy, setOrderBy] = React.useState('name')

  const handleSort = (column) => {
    const isDesc = orderBy === column && order === 'desc'
    setOrder(isDesc ? 'asc' : 'desc')
    setOrderBy(column)
  }

  return (
    <Table style={{maxWidth: 250}}>
      <SortableTableHead
        order={order}
        orderBy={orderBy}
        onSort={handleSort} />
      <UserItem
        users={users}
        deleteUser={deleteUser}
        order={order}
        orderBy={orderBy}
        tableSort={tableSort}
        toggleSortFn={toggleSortFn} />
    </Table>
  )
}

UserList.propTypes = {
  users: PropTypes.array,
  deleteUser: PropTypes.func,
  getSorting: PropTypes.func,
  tableSort: PropTypes.func,
}

export default UserList
