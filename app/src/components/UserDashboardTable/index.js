import React, { PropTypes } from 'react';
import Box from 'grommet-udacity/components/Box';
import Table from 'grommet-udacity/components/Table';
import TableRow from 'grommet-udacity/components/TableRow';
import Heading from 'grommet-udacity/components/Heading';
import Tile from 'grommet-udacity/components/Tile';
import List from 'grommet-udacity/components/List';
import Label from 'grommet-udacity/components/Label';
import Value from 'grommet-udacity/components/Value';
import Select from 'grommet-udacity/components/Select';
import ListItem from 'grommet-udacity/components/ListItem';
import Menu from 'grommet-udacity/components/Menu';
import Checkbox from 'grommet-udacity/components/Checkbox';
import Button from 'grommet-udacity/components/Button';
import EditIcon from 'grommet-udacity/components/icons/base/Edit';
import CheckmarkIcon from 'grommet-udacity/components/icons/base/Checkmark';
import { Pagination } from 'components';
import { BoxWrapper, ListWrapper, InnerWrapper, GrowBox } from './styles';

const UserDashboardTable = ({
  users,
  perPage,
  currentPage,
  allUsers,
  onChangePage,
  onEdit,
  onSave,
  isMobile,
  editingIndex,
  fields,
  userRoles,
}) => (
  <ListWrapper
    pad="large"
    color="light-2"
  >
    <GrowBox>
      {isMobile ?
        <List>
          <Box justify="center" align="start" pad="small">
            <tbody>
              {users && users.length > 0 && users.map((user, i) =>
                <ListItem>
                  <Tile
                    key={i}
                    align="start"
                    direction="row" pad={{ horizontal: 'small', vertical: 'small' }}
                  >
                    <Box
                      align="center"
                      justify="center"
                      direction="row"
                    >
                      <InnerWrapper
                        direction="column"
                        justify="center"
                        pad={{ horizontal: 'small', vertical: 'medium' }}
                      >
                        <Value value={i} />
                        <BoxWrapper>
                          <Heading align="center" tag="h3">
                            {user.name}
                          </Heading>
                        </BoxWrapper>
                        <BoxWrapper>
                          <Label>
                            Email:
                          </Label>
                          <Heading align="center" tag="h4">
                            {user.email}
                          </Heading>
                        </BoxWrapper>
                        <BoxWrapper>
                          <Label style={{ flex: 1 }}>
                            Role:
                          </Label>
                          <Heading align="center" tag="h4">
                            {`${user.role.charAt(0).toUpperCase()}${user.role.slice(1)}`}
                          </Heading>
                        </BoxWrapper>
                      </InnerWrapper>
                    </Box>
                  </Tile>
                </ListItem>
              )}
            </tbody>
          </Box>
        </List>
      :
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Bio</th>
              <th>Public</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users && users.length > 0 && users.map((user, i) =>
              <TableRow key={i}>
                <td>
                  {editingIndex && editingIndex === user.id ?
                    <input {...fields.nameInput} type="text" />
                  :
                    <Heading tag="h4">
                      {user.name}
                    </Heading>
                  }
                </td>
                <td>
                  {editingIndex && editingIndex === user.id ?
                    <input {...fields.emailInput} type="text" name="email" />
                  :
                    <Heading tag="h5">
                      {user.email}
                    </Heading>
                  }
                </td>
                <td>
                  {editingIndex && editingIndex === user.id ?
                    <Select
                      value={fields.roleInput.value}
                      onChange={fields.roleInput.onChange}
                      options={userRoles && userRoles.map((item) =>
                        ({ label: item, value: item.toLowerCase() })
                      )}
                    />
                  :
                    <Heading tag="h5">
                      {`${user.role.charAt(0).toUpperCase()}${user.role.slice(1)}`}
                    </Heading>
                  }
                </td>
                <td>
                  {editingIndex && editingIndex === user.id ?
                    <input type="text" />
                  :
                    <p>
                      {user.bio ? `${user.bio.slice(0, 30)}...` : 'N/A'}
                    </p>
                  }
                </td>
                <td>
                  <Checkbox
                    checked={user.public}
                    toggle={false}
                    disabled={editingIndex !== user.id}
                  />
                </td>
                <td>
                  <Menu
                    inline
                    responsive={false}
                    direction="row"
                    justify="center"
                    align="center"
                    style={{ width: '100%' }}
                  >
                    {editingIndex === user.id ?
                      <Button
                        plain
                        icon={<CheckmarkIcon />}
                        onClick={onSave}
                      />
                    :
                      <Button
                        plain
                        icon={<EditIcon />}
                        onClick={() => onEdit(user)}
                      />
                    }
                  </Menu>
                </td>
              </TableRow>
            )}
          </tbody>
        </Table>
      }
    </GrowBox>
    <Pagination
      onChange={onChangePage}
      pageSize={perPage}
      currentPage={currentPage}
      total={allUsers.length}
    />
  </ListWrapper>
);

UserDashboardTable.propTypes = {
  users: PropTypes.array.isRequired,
  perPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  allUsers: PropTypes.array.isRequired,
  onChangePage: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
  editingIndex: PropTypes.number,
  userRoles: PropTypes.array,
};

export default UserDashboardTable;
