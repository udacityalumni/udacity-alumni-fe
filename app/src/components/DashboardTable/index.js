import React, { PropTypes } from 'react';
import Box from 'grommet-udacity/components/Box';
import Menu from 'grommet-udacity/components/Menu';
import Table from 'grommet-udacity/components/Table';
import Button from 'grommet-udacity/components/Button';
import TrashIcon from 'grommet-udacity/components/icons/base/Trash';
import EditIcon from 'grommet-udacity/components/icons/base/Edit';
import ViewIcon from 'grommet-udacity/components/icons/base/View';
import TableRow from 'grommet-udacity/components/TableRow';
import Anchor from 'grommet-udacity/components/Anchor';
import Heading from 'grommet-udacity/components/Heading';
import Tile from 'grommet-udacity/components/Tile';
import List from 'grommet-udacity/components/List';
import Label from 'grommet-udacity/components/Label';
import Value from 'grommet-udacity/components/Value';
import ListItem from 'grommet-udacity/components/ListItem';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';

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

const DashboardTable = ({
  articles,
  onDeleteArticle,
  isMobile,
}) => (
  <Box
    pad="large"
    className={styles.listWrapper}
    color="light-2"
  >
    {isMobile ?
      <List>
        <Box justify="center" align="start" pad="small">
          <tbody>
            {articles.map((article, i) =>
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
                    <Box
                      direction="column"
                      justify="center"
                      className={styles.innerWrapper}
                      pad={{ horizontal: 'small', vertical: 'medium' }}
                    >
                      <Value value={i} />
                      <Box
                        className={styles.boxWrapper}
                      >
                        <Heading align="center" tag="h3">
                          {article.title}
                        </Heading>
                      </Box>
                      <Box
                        className={styles.boxWrapper}
                      >
                        <Label>
                          Posted By:
                        </Label>
                        <Heading align="center" tag="h4">
                          {article.user.name}
                        </Heading>
                      </Box>
                      <Box
                        className={styles.boxWrapper}
                      >
                        <Label style={{ flex: 1 }}>
                          Status:
                        </Label>
                        <Heading align="center" tag="h4">
                          {`${article.status.charAt(0).toUpperCase()}${article.status.slice(1)}`}
                        </Heading>
                      </Box>
                      <DashboardTableButtonMenu
                        article={article}
                        onDeleteArticle={() => onDeleteArticle(article.id)}
                      />
                    </Box>
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
                <Heading tag="h4">
                  {article.title.slice(0, 15)}
                </Heading>
              </td>
              <td>
                <Heading tag="h5">
                  {`${article.status.charAt(0).toUpperCase()}${article.status.slice(1)}`}
                </Heading>
              </td>
              <td>
                <Heading tag="h5">
                  {article.user.name}
                </Heading>
              </td>
              <td>
                <DashboardTableButtonMenu
                  article={article}
                  onDeleteArticle={() => onDeleteArticle(article.id)}
                />
              </td>
            </TableRow>
          )}
        </tbody>
      </Table>
    }
  </Box>
);

DashboardTable.propTypes = {
  articles: PropTypes.array.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default cssModules(DashboardTable, styles);
