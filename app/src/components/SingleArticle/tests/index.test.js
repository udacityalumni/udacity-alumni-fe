import SingleArticle from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
/* eslint-disable */
describe('<SingleArticle />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <SingleArticle
        article={{"id":1,"title":"Creditable coverage Hcfa common procedure coding system Group health plan","featured":false,"spotlighted":true,"content":"Care plan eligible dependent free-look period waiting period incurral date board certified health care provider HCPCS. Agent of record PCP limited policy morbidity medigap health savings account credentialing medical necessity open enrollment. Creditable coverage agent of record renewal disenroll IPA medicare. Accumulation period contract year policy benefit cap medicare supplement creditable coverage.","feature_image":"https://robohash.org/magnietnon.png?size=300x300","status":"published","slug":"creditable-coverage-hcfa-common-procedure-coding-system-group-health-plan","user":{"id":3,"email":"andreas@gmail.com","created_at":"2016-09-30T02:39:57.297Z","updated_at":"2016-10-03T18:49:42.965Z","name":"Andreas Daimainger","avatar":"https://avatars3.githubusercontent.com/u/13679375?v=3&s=466","role":"user"},"created_at":"2016-09-30T02:39:57.333Z","updated_at":"2016-09-30T02:42:00.487Z"}}
      />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
