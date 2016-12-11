import React, { PropTypes } from 'react';
import Box from 'grommet-udacity/components/Box';
import Table from 'grommet-udacity/components/Table';
import Heading from 'grommet-udacity/components/Heading';
import Tile from 'grommet-udacity/components/Tile';
import List from 'grommet-udacity/components/List';
import Label from 'grommet-udacity/components/Label';
import ListItem from 'grommet-udacity/components/ListItem';
import Timestamp from 'grommet-udacity/components/Timestamp';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import { DashboardTableButtonMenu, Pagination, TableHeader, Thumbnail } from 'components';
import { TableRow, ArticleHeadingWrapper, ArticleHeading } from './styles';

const DashboardTable = ({
  items,
  perPage,
  currentPage,
  allItems,
  onChangePage,
  onDelete,
  onEdit,
  onShow,
  isMobile,
  sortIndex,
  sortAscending,
  onSort,
}) => (
  <Box
    pad="large"
    className={styles.listWrapper}
    color="light-2"
  >
    <Box className={styles.flexGrow}>
      {isMobile ?
        <List>
          <Box justify="center" align="start" pad="small">
            {items && items.length > 0 && items.map((item, i) =>
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
                      <ArticleHeadingWrapper>
                        <Thumbnail size="medium" src={item.image} />
                        <ArticleHeading align="center" tag="h2">
                          {item.title}
                        </ArticleHeading>
                      </ArticleHeadingWrapper>
                      <Box className={styles.boxWrapper}>
                        <Label>
                          Posted By:
                        </Label>
                        <Heading align="center" tag="h4">
                          {item.user.name}
                        </Heading>
                      </Box>
                      <Box className={styles.boxWrapper}>
                        <Label style={{ flex: 1 }}>
                          Status:
                        </Label>
                        <Heading align="center" tag="h4">
                          {`${item.status.charAt(0).toUpperCase()}${item.status.slice(1)}`}
                        </Heading>
                      </Box>
                      <DashboardTableButtonMenu
                        item={item}
                        onDelete={() => onDelete(item)}
                        onEdit={() => onEdit(item)}
                        onShow={() => onShow(item)}
                      />
                    </Box>
                  </Box>
                </Tile>
              </ListItem>
            )}
          </Box>
        </List>
      :
        <Table>
          <TableHeader
            sortIndex={sortIndex}
            sortAscending={sortAscending}
            onSort={onSort}
            labels={['', 'Title', 'Posted On', 'Status', 'Author', 'Actions']}
          />
          <tbody style={{ minHeight: 500 }}>
            {items && items.length > 0 && items.map((item) =>
              <TableRow key={item.id}>
                <td>
                  <Thumbnail size="xsmall" src={item.image} />
                </td>
                <td style={{ width: 400, color: '#333' }}>
                  <Box className={styles.tableItemWrapper}>
                    <Heading tag="h4">
                      {item.title}
                    </Heading>
                  </Box>
                </td>
                <td style={{ width: 120 }}>
                  <Timestamp value={item.updated_at} fields={['date', 'month', 'year']} />
                </td>
                <td>
                  <Box className={styles.tableItemWrapper}>
                    <Heading tag="h5">
                      {`${item.status.charAt(0).toUpperCase()}${item.status.slice(1)}`}
                    </Heading>
                  </Box>
                </td>
                <td>
                  <Box className={styles.tableItemWrapper}>
                    <Heading tag="h5">
                      {item.user.name}
                    </Heading>
                  </Box>
                </td>
                <td>
                  <DashboardTableButtonMenu
                    onDelete={() => onDelete(item)}
                    onEdit={() => onEdit(item)}
                    onShow={() => onShow(item)}
                  />
                </td>
              </TableRow>
            )}
          </tbody>
        </Table>
      }
    </Box>
    {allItems > perPage &&
      <Pagination
        onChange={onChangePage}
        pageSize={perPage}
        currentPage={currentPage}
        total={allItems.length}
      />
    }
  </Box>
);

DashboardTable.propTypes = {
  items: PropTypes.array.isRequired,
  isMobile: PropTypes.bool.isRequired,
  perPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  allItems: PropTypes.array.isRequired,
  onChangePage: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onShow: PropTypes.func.isRequired,
  sortIndex: PropTypes.number.isRequired,
  sortAscending: PropTypes.bool.isRequired,
  onSort: PropTypes.func.isRequired,
};

export default cssModules(DashboardTable, styles);
