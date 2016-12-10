import About from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe('<About />', () => {
  it('should render with default props', () => {
  	const contributorVoices = [
      {
    	label: 'this',
  		image: 'https://here',
  		heading: 'h2',
  		githubUrl: 'https://git/here',
  		description: 'hi',
  	  },
  	  {
    	label: 'that',
  		image: 'https://there',
  		heading: 'h2',
  		githubUrl: 'https://git/there',
  		description: 'ho',
  	  }
  	];
    const wrapper = shallow(
      <About contributorVoices={contributorVoices} />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
