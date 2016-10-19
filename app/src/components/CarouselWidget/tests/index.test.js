import CarouselWidget from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import { mockedImages, mockedFields } from './mocks';

describe('<CarouselWidget />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <CarouselWidget
        {...mockedFields}
        images={mockedImages}
        onEditImage={e => e}
        onAddImage={e => e}
        onDeleteImage={e => e}
        currentlyEditing={1}
        setEditing={e => e}
        cancelEditing={e => e}
      />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
