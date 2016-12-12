import React, { PropTypes } from 'react';
import Box from 'grommet-udacity/components/Box';
import Table from 'grommet-udacity/components/Table';
import Heading from 'grommet-udacity/components/Heading';
import Tile from 'grommet-udacity/components/Tile';
import List from 'grommet-udacity/components/List';
import Label from 'grommet-udacity/components/Label';
import ListItem from 'grommet-udacity/components/ListItem';
import Timestamp from 'grommet-udacity/components/Timestamp';
import Anchor from 'grommet-udacity/components/Anchor';
import { Pagination, TableHeader, Avatar } from 'components';
import {
  TableRow,
  ListWrapper,
  FlexGrow,
  InnerWrapper,
  BoxWrapper,
} from './styles';

const FeedbackTable = ({
  items,
  perPage,
  currentPage,
  allItems,
  onChangePage,
  isMobile,
  sortIndex,
  sortAscending,
  onSort,
  onItemClick,
}) => (
  <ListWrapper
    pad="large"
    color="light-2"
  >
    <FlexGrow>
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
                    <InnerWrapper
                      direction="column"
                      justify="center"
                      align="center"
                      pad={{ horizontal: 'small', vertical: 'medium' }}
                    >
                      <Box style={{ marginBottom: 40 }}>
                        <Avatar src={item.user.avatar} />
                      </Box>
                      <BoxWrapper>
                        <Label>
                          Name:
                        </Label>
                        <Heading align="center" tag="h4">
                          {item.user.name}
                        </Heading>
                      </BoxWrapper>
                      <BoxWrapper>
                        <Label>
                          Email:
                        </Label>
                        <Heading align="center" tag="h4">
                          <Anchor href={`mailto:${item.user.email}`}>
                            {item.user.email}
                          </Anchor>
                        </Heading>
                      </BoxWrapper>
                      <BoxWrapper>
                        <Label>
                          Date:
                        </Label>
                        <Timestamp value={item.created_at} fields={['date', 'month', 'year']} />
                      </BoxWrapper>
                      <BoxWrapper>
                        <Label style={{ flex: 1 }}>
                          Description:
                        </Label>
                        <Heading align="center" tag="h4">
                          {item.description}
                        </Heading>
                      </BoxWrapper>
                      <BoxWrapper>
                        <Label style={{ flex: 1 }}>
                          Url:
                        </Label>
                        <Heading align="center" tag="h4">
                          {item.url}
                        </Heading>
                      </BoxWrapper>
                    </InnerWrapper>
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
            labels={['', 'Name', 'Email', 'Date', 'Description', 'Url']}
          />
          <tbody style={{ minHeight: 500 }}>
            {items && items.length > 0 && items.map((item) =>
              <TableRow key={item.id} onClick={() => onItemClick(item)}>
                <td>
                  <Box
                    style={{ width: 50 }}
                  >
                    <Avatar
                      src={item.user.avatar}
                      size="xsmall"
                    />
                  </Box>
                </td>
                <td>
                  <Box>
                    <Heading tag="h4">
                      {item.user.name}
                    </Heading>
                  </Box>
                </td>
                <td>
                  <Box>
                    <Heading tag="h4">
                      <Anchor href={`mailto:${item.user.email}`}>
                        {item.user.email}
                      </Anchor>
                    </Heading>
                  </Box>
                </td>
                <td style={{ width: 120 }}>
                  <Timestamp value={item.created_at} fields={['date', 'month', 'year']} />
                </td>
                <td style={{ width: 400 }}>
                  <Box>
                    <Heading tag="h5">
                      {item.description}
                    </Heading>
                  </Box>
                </td>
                <td>
                  <Box>
                    <Heading tag="h5">
                      {item.url}
                    </Heading>
                  </Box>
                </td>
              </TableRow>
            )}
          </tbody>
        </Table>
      }
    </FlexGrow>
    {allItems > perPage &&
      <Pagination
        onChange={onChangePage}
        pageSize={perPage}
        currentPage={currentPage}
        total={allItems.length}
      />
    }
  </ListWrapper>
);

FeedbackTable.propTypes = {
  items: PropTypes.array.isRequired,
  isMobile: PropTypes.bool.isRequired,
  perPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  allItems: PropTypes.array.isRequired,
  onChangePage: PropTypes.func.isRequired,
  sortIndex: PropTypes.number.isRequired,
  sortAscending: PropTypes.bool.isRequired,
  onSort: PropTypes.func.isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default FeedbackTable;
