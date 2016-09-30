import ErrorAlert from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<ErrorAlert />', () => {
  it('should render with default props', () => {
    const errors = [
      { message: 'A bad, bad error has occured :(' },
      { message: 'An even worse error has occured' },
    ];
    const wrapper = shallow(
      <ErrorAlert onClose={(e) => e} errors={errors} />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
