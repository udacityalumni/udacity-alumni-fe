import About from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';


const data = [
  {
    label: 'Anything you want',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/33/White_square_with_question_mark.png',
    heading: 'Hei You!',
    githubUrl: 'https://github.com/udacityalumni',
    description: 'There surely is something you can do to make this better! : )',
  },
];

describe('<About />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <About contributorVoices={data} />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
