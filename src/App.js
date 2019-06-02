import React, { Component } from 'react'
import axios from 'axios'
import { Grid } from '@material-ui/core'
import uri from './utils/api'
import UserList from './components/users/UserList'
import UserForm from './components/users/UserForm'

class App extends Component {
  constructor() {
    super()
    this.state = {
      users: [],
    }
  }

  validateForm = (newUser, setValues, e) => {
    e.preventDefault()
    const zipcodeExpression = new RegExp('^[0-9]{5}')
    const isValidZipcode = zipcodeExpression.test(parseInt(newUser.zipcode, 10))
    let isFormValid = true

    const hasDuplicate = this.state.users
      .filter(user => user.email === newUser.email)
      .length > 0

    if (hasDuplicate) {
      isFormValid = false
      alert('A user already exists with that email address. Please use another.')
    }
    if (!isValidZipcode) {
      isFormValid = false
      alert('Zipcode must contain only numbers and must be 5 digits in length.')
    }

    if (isFormValid) {
      this.addUser(newUser)
    }
  }

  addUser = (user) => {
    const nextId = this.state.users.length + 1
    const data = { id: nextId, ...user }
    axios.post(uri, data).then(newUser => {
      let updatedUsersList = this.state.users
      updatedUsersList.push(newUser.data)
      this.setState({
        users: updatedUsersList
      })
    })
    .catch(error => {
      console.log(error.message)
    })
  }

  deleteUser = (id) => {
    axios.delete(`${uri}/${id}`).then(() => {
      const updatedUsersList = this.state.users.filter(user => user.id !== parseInt(id, 10))
      this.setState({
        users: updatedUsersList
      })
    })
    .catch(error => {
      console.log(error.message)
    })
  }

  toggleSortFn = (order, orderBy) => {
    return order === 'desc'
      ? (a, b) => this.desc(a, b, orderBy)
      : (a, b) => this.desc(a, b, orderBy) * -1
  }

  desc(a, b, orderBy) {
    const c = typeof a[orderBy] === 'string' ? a[orderBy].toLowerCase() : a[orderBy]
    const d = typeof b[orderBy] === 'string' ? b[orderBy].toLowerCase() : b[orderBy]
    if (d < c) {
      return -1
    }
    if (d > c) {
      return 1
    }
    return 0
  }
  
  stableSort(array, cmp) {
    const stabilizedThis = array.map((el, index) => [el, index])
    stabilizedThis.sort((a, b) => {
      const order = cmp(a[0], b[0])
      if (order !== 0) {
        return order
      }
      return a[1] - b[1]
    })
    return stabilizedThis.map(el => el[0])
  }

  componentDidMount() {
    axios.get(uri).then(results => {
      this.setState({
        users: results.data
      })
    })
  }

  render() {
    return (
      <Grid container>
        <Grid item xs={12} sm={6}>
          <UserForm
            validateForm={this.validateForm}
          />
        </Grid>

        <Grid item sm={6}>
          <h1>User List</h1>
          <UserList
            users={this.state.users}
            deleteUser={this.deleteUser}
            stableSort={this.stableSort}
            toggleSortFn={this.toggleSortFn}
          />
        </Grid>
      </Grid>
    )
  }
}

export default App
