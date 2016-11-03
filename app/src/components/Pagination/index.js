import React, { PropTypes } from 'react';
import Footer from 'grommet-udacity/components/Footer';
import RCPagination from 'rc-pagination';

const Pagination = ({
  onChange,
  pageSize,
  currentPage,
  total,
}) => (
  <Footer align="center" justify="center" pad="medium">
    <RCPagination
      style={{ color: 'white' }}
      onChange={(newPage) => onChange(newPage)}
      defaultCurrent={1}
      pageSize={pageSize}
      current={currentPage}
      total={total}
    />
  </Footer>
);

Pagination.propTypes = {
  onChange: PropTypes.func.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

Pagination.defaultProps = {
  pageSize: 10,
};

export default Pagination;
