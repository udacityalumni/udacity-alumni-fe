import React, { PropTypes } from 'react';
import Box from 'grommet-udacity/components/Box';
import Menu from 'grommet-udacity/components/Menu';
import Table from 'grommet-udacity/components/Table';
import Button from 'grommet-udacity/components/Button';
import TrashIcon from 'grommet-udacity/components/icons/base/Trash';
import EditIcon from 'grommet-udacity/components/icons/base/Edit';
import TableRow from 'grommet-udacity/components/TableRow';
import Anchor from 'grommet-udacity/components/Anchor';

const DashboardTable = ({
  articles,
  onDeleteArticle,
}) => (
  <Box
    pad="large"
    style={{ minHeight: 300, minWidth: 600, border: '1px solid black' }}
    color="light-2"
  >
    <Table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Status</th>
          <th>Author</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {articles.map((article, i) =>
          <TableRow key={i}>
            <td>
              <Anchor href={`/articles/${article.id}`}>
                {article.title.slice(0, 15)}
              </Anchor>
            </td>
            <td>
              {`${article.status.charAt(0).toUpperCase()}${article.status.slice(1)}`}
            </td>
            <td>
              {article.user.name}
            </td>
            <td>
              <Menu inline direction="row">
                <Button
                  style={{ padding: 5 }}
                  plain
                  icon={<EditIcon />}
                  href={`/admin/cms?action=edit&articleId=${article.id}`}
                />
                <Button
                  style={{ padding: 5 }}
                  plain
                  onClick={() => onDeleteArticle(article.id)}
                  icon={<TrashIcon />}
                />
              </Menu>
            </td>
          </TableRow>
        )}
      </tbody>
    </Table>
  </Box>
);

DashboardTable.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default DashboardTable;
