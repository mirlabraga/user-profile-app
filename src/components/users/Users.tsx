import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../dashboard/Title';
import { users } from '../../models/users';

function preventDefault(event: any) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Users() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Users</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Mobile</TableCell>
            <TableCell>Company</TableCell>
            <TableCell align="right">preferences</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.address.street} - {row.address.town} - {row.address.county}</TableCell>
              <TableCell>{row.mobile}</TableCell>
              <TableCell>{row.company}</TableCell>
              <TableCell align="right">{row.company}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}
