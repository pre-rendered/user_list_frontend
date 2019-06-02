# Preqrequisites
## Node.js
Go to the [node.js](https://nodejs.org/en/) homepage and download and install the latest LTS version of Node.js (version 10.16.0 as of this writing)

# How to run
After getting the [server code](https://github.com/StraylightSky/user_list_backend) to run, navigate to this project's root directory and run:

### `npm start`

Then navigate to [http://localhost:3000](http://localhost:3000)

# Testing
- Submiting a blank form should not be allowed
- It should only submit once all form fields are filled in
- Only a 5 digit number is allowed for zipcode
- Unique constraints on email addresses
- You should be able to sort by each column

# Approach
- Used create-react-app to get up and running quickly
- Wanted to use React's hooks in some way
- Original sorting was done on name only, but I wanted to find a more robust way to sort by every column
- Decided to go with in-memory storage for the list of users since it would be faster than setting up sqlite
- Decided not to prompt the user to confirm on delete; UX didn't feel quite right with it in place

# Callouts
## Sorting
- Sorting by all columns was a mixture of code borrowed from the [Material-UI tables](https://material-ui.com/components/tables/) documentation and [this question](https://stackoverflow.com/questions/54997369/creating-a-function-to-sort-table-react-jsx) from StackOverflow.
