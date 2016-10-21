import React, { PropTypes } from 'react';
import Menu from 'grommet-udacity/components/Menu';
import Button from 'grommet-udacity/components/Button';
import TrashIcon from 'grommet-udacity/components/icons/base/Trash';
import EditIcon from 'grommet-udacity/components/icons/base/Edit';
import ViewIcon from 'grommet-udacity/components/icons/base/View';

const DashboardTableButtonMenu = ({
  article,
  onDeleteArticle,
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
      href={`/admin/cms?action=edit&articleId=${article.id}`}
    />
    <Button
      style={{ padding: 5 }}
      plain
      onClick={onDeleteArticle}
      icon={<TrashIcon />}
    />
    <Button
      style={{ padding: 5 }}
      plain
      href={article.status === 'published' ? `/articles/${article.id}` : null}
      icon={<ViewIcon />}
    />
  </Menu>
);

DashboardTableButtonMenu.propTypes = {
  article: PropTypes.object.isRequired,
  onDeleteArticle: PropTypes.func.isRequired,
};

export default DashboardTableButtonMenu;
