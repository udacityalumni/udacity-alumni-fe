import React, { PropTypes } from 'react';
import Box from 'grommet-udacity/components/Box';
import Table from 'grommet-udacity/components/Table';
import Heading from 'grommet-udacity/components/Heading';
import Tile from 'grommet-udacity/components/Tile';
import List from 'grommet-udacity/components/List';
import Select from 'grommet-udacity/components/Select';
import ListItem from 'grommet-udacity/components/ListItem';
import Menu from 'grommet-udacity/components/Menu';
import CheckBox from 'grommet-udacity/components/CheckBox';
import Footer from 'grommet-udacity/components/Footer';
import Button from 'grommet-udacity/components/Button';
import EditIcon from 'grommet-udacity/components/icons/base/Edit';
import CheckmarkIcon from 'grommet-udacity/components/icons/base/Checkmark';
import CloseIcon from 'grommet-udacity/components/icons/base/Close';
import Pulse from 'grommet-udacity/components/icons/Pulse';
import { Pagination, Avatar, TableHeader } from 'components';
import isEditing from './utils';
import {
  BoxWrapper,
  ListWrapper,
  InnerWrapper,
  GrowBox,
  UserName,
  TD,
  TRow,
  Input,
  TextArea,
  Label,
  SelectBig,
  BoxWrapperCenter,
} from './styles';

const UserDashboardTable = ({
  users,
  perPage,
  currentPage,
  allUsers,
  onChangePage,
  onEdit,
  onSave,
  onClear,
  isMobile,
  editingIndex,
  fields,
  userRoles,
  onSort,
  sortIndex,
  sortAscending,
  onAvatarClick,
}) => (
  <ListWrapper color="light-2">
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
                        align="center"
                        pad={{ horizontal: 'small', vertical: 'medium' }}
                      >
                        <Box
                          onClick={() => isEditing(user, editingIndex) ? onAvatarClick(user) : null}
                        >
                          <Avatar
                            src={user.avatar}
                          />
                        </Box>
                        <BoxWrapper>
                          {editingIndex && editingIndex === user.id &&
                            <Label>
                              Name:
                            </Label>
                          }
                          {editingIndex && editingIndex === user.id ?
                            <Input {...fields.nameInput} type="text" />
                          :
                            <UserName align="center" tag="h3">
                              {user.name}
                            </UserName>
                          }
                        </BoxWrapper>
                        <BoxWrapper>
                          <Label>
                            Email:
                          </Label>
                          {editingIndex && editingIndex === user.id ?
                            <Input {...fields.emailInput} type="text" name="email" />
                          :
                            <Heading align="center" tag="h4">
                              {user.email}
                            </Heading>
                          }
                        </BoxWrapper>
                        <BoxWrapper>
                          <Label>
                            Role:
                          </Label>
                          {editingIndex && editingIndex === user.id ?
                            <SelectBig
                              value={fields.roleInput.value}
                              onChange={({ option }) => fields.roleInput.onChange(option.label)}
                              options={userRoles && userRoles.map((item) =>
                                ({
                                  label: `${item.slice(0, 1).toUpperCase()}${item.slice(1)}`,
                                  value: item.toLowerCase(),
                                })
                              )}
                            />
                          :
                            <Heading align="center" tag="h4">
                              {`${user.role.charAt(0).toUpperCase()}${user.role.slice(1)}`}
                            </Heading>
                          }
                        </BoxWrapper>
                        <BoxWrapper>
                          <Label>
                            Public:
                          </Label>
                          <CheckBox
                            onChange={(e) => fields.publicInput.onChange(e.target.checked)}
                            checked={editingIndex === user.id ?
                              fields.publicInput.value : user.public
                            }
                            toggle={false}
                            disabled={editingIndex !== user.id}
                          />
                        </BoxWrapper>
                        <BoxWrapperCenter>
                          {editingIndex && editingIndex === user.id &&
                            <Label>
                              Bio:
                            </Label>
                          }
                          {editingIndex && editingIndex === user.id ?
                            <TextArea
                              {...fields.bioInput}
                              rows={isMobile ? 4 : 2}
                              coluns="40"
                              type="text"
                            />
                          :
                            <Heading align="center" tag="h4">
                              {user.bio}
                            </Heading>
                          }
                        </BoxWrapperCenter>
                        <Footer justify="center" pad="medium">
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
                                icon={<Pulse icon={<CheckmarkIcon />} />}
                                onClick={onSave}
                              />
                            :
                              <Button
                                plain
                                label="Edit User"
                                icon={<EditIcon />}
                                onClick={() => onEdit(user)}
                              />
                            }
                            {editingIndex === user.id &&
                              <Button
                                plain
                                icon={<CloseIcon />}
                                onClick={onClear}
                              />
                            }
                          </Menu>
                        </Footer>
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
          <TableHeader
            sortIndex={sortIndex}
            sortAscending={sortAscending}
            onSort={onSort}
            labels={['', 'Name', 'Email', 'Role', 'Bio', 'Public', 'Actions']}
          />
          <tbody>
            {users && users.length > 0 && users.map((user, i) =>
              <TRow
                isEditing={editingIndex === user.id}
                key={i}
                onClick={() => editingIndex !== user.id ?
                  onEdit(user) : null
                }
              >
                <td>
                  <Box
                    style={{ width: 50 }}
                    focusable={isEditing(user, editingIndex)}
                    onClick={() => isEditing(user, editingIndex) ? onAvatarClick(user) : null}
                  >
                    <Avatar
                      onClick={() => isEditing(user, editingIndex) ? onAvatarClick(user) : null}
                      src={user.avatar}
                      size="xsmall"
                    />
                  </Box>
                </td>
                <TD>
                  {editingIndex && editingIndex === user.id ?
                    <input {...fields.nameInput} type="text" />
                  :
                    <Heading tag="h4">
                      {user.name}
                    </Heading>
                  }
                </TD>
                <TD>
                  {editingIndex && editingIndex === user.id ?
                    <input {...fields.emailInput} type="text" name="email" />
                  :
                    <Heading tag="h5">
                      {user.email}
                    </Heading>
                  }
                </TD>
                <TD>
                  {editingIndex && editingIndex === user.id ?
                    <Select
                      value={fields.roleInput.value}
                      onChange={({ option }) => fields.roleInput.onChange(option.label)}
                      options={userRoles && userRoles.map((item) =>
                        ({
                          label: `${item.slice(0, 1).toUpperCase()}${item.slice(1)}`,
                          value: item.toLowerCase(),
                        })
                      )}
                    />
                  :
                    <Heading tag="h5">
                      {`${user.role.charAt(0).toUpperCase()}${user.role.slice(1)}`}
                    </Heading>
                  }
                </TD>
                <TD>
                  {editingIndex && editingIndex === user.id ?
                    <textarea {...fields.bioInput} rows="4" coluns="40" type="text" />
                  :
                    <p>
                      {user.bio ? `${user.bio.slice(0, 30)}...` : 'N/A'}
                    </p>
                  }
                </TD>
                <td>
                  <CheckBox
                    onChange={(e) => fields.publicInput.onChange(e.target.checked)}
                    checked={editingIndex === user.id ? fields.publicInput.value : user.public}
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
                        icon={<Pulse icon={<CheckmarkIcon />} />}
                        onClick={onSave}
                      />
                    :
                      <Button
                        plain
                        icon={<EditIcon />}
                        onClick={() => onEdit(user)}
                      />
                    }
                    {editingIndex === user.id &&
                      <Button
                        plain
                        icon={<CloseIcon />}
                        onClick={onClear}
                      />
                    }
                  </Menu>
                </td>
              </TRow>
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
  fields: PropTypes.array.isRequired,
  onEdit: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
  editingIndex: PropTypes.number,
  userRoles: PropTypes.array,
  onSort: PropTypes.func.isRequired,
  sortIndex: PropTypes.number.isRequired,
  sortAscending: PropTypes.bool.isRequired,
  onAvatarClick: PropTypes.func.isRequired,
};

export default UserDashboardTable;
