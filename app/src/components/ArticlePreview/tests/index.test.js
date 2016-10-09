import ArticlePreview from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

// eslint-disable
const article = {
  id: 4,
  title: 'Current procedural terminology Benefit Impaired risk',
  featured: false,
  spotlighted: false,
  content: 'Diagnostic related group HIPAA accreditation',
  feature_image: 'https://robohash.org/sapienteeaoptio.png?size=300x300',
  status: 'published',
  slug: 'current-procedural-terminology-benefit-impaired-risk',
  user: {
    id: 3,
    email: 'andreas@gmail.com',
    created_at: '2016-09-30T02:39:57.297Z',
    updated_at: '2016-10-03T18:49:42.965Z',
    name: 'Andreas Daimainger',
    avatar: 'https://avatars3.githubusercontent.com/u/13679375?v=3&s=466',
    bio: 'Hello world',
    role: 'user',
  },
  created_at: '2016-09-30T02:39:57.352Z',
  updated_at: '2016-09-30T02:39:57.352Z',
};

describe('<ArticlePreview />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <ArticlePreview article={article} />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
