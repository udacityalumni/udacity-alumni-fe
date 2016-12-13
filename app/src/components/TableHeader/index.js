import React, { Component, PropTypes } from 'react';
import Button from 'grommet-udacity/components/Button';
import Box from 'grommet-udacity/components/Box';
import AscIcon from 'grommet-udacity/components/icons/base/LinkDown';
import DescIcon from 'grommet-udacity/components/icons/base/LinkUp';

export default class TableHeader extends Component {

  _onSort(index) {
    const { onSort, sortAscending, sortIndex } = this.props;
    let nextAscending;
    if (index !== sortIndex) {
      nextAscending = false;
    } else {
      nextAscending = ! sortAscending;
    }
    onSort(index, nextAscending);
  }

  render() {
    const { labels, onSort, sortAscending, sortIndex, ...props } = this.props;

    const cells = labels.map((label, index) => {
      let content = label;
      if (sortIndex >= 0) {
        let sortIndicator;
        if (index === sortIndex) {
          sortIndicator = (sortAscending ? <AscIcon /> : <DescIcon />);
        }
        content = (
          <Box
            direction="row"
            justify="start"
            align="center"
            pad={{ between: 'small' }}
          >
            <span>{content}</span>
            {sortIndicator}
          </Box>
        );

        if (onSort) {
          content = (
            <Button plain fill
              onClick={this._onSort.bind(this, index)}
            >
              {content}
            </Button>
          );
        }
      }

      return <th key={index}>{content}</th>;
    });

    return (
      <thead {...props}>
        <tr>
          {cells}
        </tr>
      </thead>
    );
  }
}

TableHeader.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.node).isRequired,
  onSort: PropTypes.func, // (index, ascending?)
  sortAscending: PropTypes.bool,
  sortIndex: PropTypes.number,
};
