import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, TextField } from '@material-ui/core'

const UserForm = ({ validateForm }) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    birthday: '',
    zipcode: '',
  })

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  return (
    <form
      className="form--add-user"
      onSubmit={validateForm.bind(this, values)}
    >
      <TextField
        id="outlined-name"
        label="Name"
        value={values.name}
        onChange={handleChange('name')}
        margin="normal"
        variant="outlined"
        required
      />
      <TextField
        id="outlined-name"
        label="E-mail"
        type="email"
        value={values.email}
        onChange={handleChange('email')}
        margin="normal"
        variant="outlined"
        required
      />
      <TextField
        id="outlined-name"
        label="Birthday"
        type="date"
        value={values.birthday}
        onChange={handleChange('birthday')}
        margin="normal"
        InputLabelProps={{shrink: true}}
        required
      />
      <TextField
        id="outlined-name"
        label="Zipcode"
        value={values.zipcode}
        onChange={handleChange('zipcode')}
        margin="normal"
        variant="outlined"
        required
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
      >
        Add User
      </Button>
    </form>
  )
}

UserForm.propTypes = {
  addUser: PropTypes.func
}

export default UserForm
