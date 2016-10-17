import React, { PropTypes } from 'react';
import Box from 'grommet-udacity/components/Box';
import Table from 'grommet-udacity/components/Table';
import TableRow from 'grommet-udacity/components/TableRow';
import Anchor from 'grommet-udacity/components/Anchor';

const DashboardTable = ({
  articles,
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
              <Anchor href={`/admin/cms/${article.id}`}>
                {`${article.status.charAt(0).toUpperCase()}${article.status.slice(1)}`}
              </Anchor>
            </td>
            <td>
              <Anchor href={`/admin/cms/${article.id}`}>
                {article.user.name}
              </Anchor>
            </td>
            <td>
              <span>
                <Anchor href={`/admin/cms/${article.id}/edit`}>
                  Edit
                </Anchor>
                {' / '}
                <Anchor href={`/admin/cms/${article.id}/delete`}>
                  Delete
                </Anchor>
              </span>
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
