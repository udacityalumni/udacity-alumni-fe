import React, { PropTypes } from 'react';
import Menu from 'grommet-udacity/components/Menu';
import Button from 'grommet-udacity/components/Button';
import TrashIcon from 'grommet-udacity/components/icons/base/Trash';
import EditIcon from 'grommet-udacity/components/icons/base/Edit';
import ViewIcon from 'grommet-udacity/components/icons/base/View';

const DashboardTableButtonMenu = ({
  onDelete,
  onEdit,
  onShow,
}) => (
  <Menu
    inline
    responsive={false}
    direction="row"
    justify="center"
    align="center"
    style={{ width: '100%' }}
  >
    <Button
      style={{ padding: 5 }}
      plain
      icon={<EditIcon />}
      onClick={onEdit}
    />
    {typeof onDelete === 'function' &&
      <Button
        style={{ padding: 5 }}
        plain
        onClick={onDelete}
        icon={<TrashIcon />}
      />
    }
    <Button
      style={{ padding: 5 }}
      plain
      onClick={onShow}
      icon={<ViewIcon />}
    />
  </Menu>
);

DashboardTableButtonMenu.propTypes = {
  onDelete: PropTypes.func,
  onEdit: PropTypes.func.isRequired,
  onShow: PropTypes.func.isRequired,
};

export default DashboardTableButtonMenu;
