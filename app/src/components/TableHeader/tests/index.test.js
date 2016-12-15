import TableHeader from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<TableHeader />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <TableHeader 
      	sortIndex={2}
        sortAscending={true}
        onSort={(e) => e}
        labels={['', 'Title', 'Posted On', 'Status', 'Author', 'Actions']}
      />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
