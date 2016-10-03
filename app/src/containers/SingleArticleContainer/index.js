import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SingleArticleActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Heading from 'grommet-udacity/components/Heading';
import { SingleArticle as SingleArticleComponent } from 'components';


const article = {
    id: 1,
    title: "Creditable coverage Hcfa common procedure coding system Group health plan",
    "featured": false,
    "spotlighted": true,
    "content": "Care plan eligible dependent free-look period waiting period incurral date board certified health care provider HCPCS. Agent of record PCP limited policy morbidity medigap health savings account credentialing medical necessity open enrollment. Creditable coverage agent of record renewal disenroll IPA medicare. Accumulation period contract year policy benefit cap medicare supplement creditable coverage. Care plan eligible dependent free-look period waiting period incurral date board certified health care provider HCPCS. Agent of record PCP limited policy morbidity medigap health savings account credentialing medical necessity open enrollment. Creditable coverage agent of record renewal disenroll IPA medicare. Accumulation period contract year policy benefit cap medicare supplement creditable coverage. Care plan eligible dependent free-look period waiting period incurral date board certified health care provider HCPCS. Agent of record PCP limited policy morbidity medigap health savings account credentialing medical necessity open enrollment. Creditable coverage agent of record renewal disenroll IPA medicare. Accumulation period contract year policy benefit cap medicare supplement creditable coverage. Care plan eligible dependent free-look period waiting period incurral date board certified health care provider HCPCS. Agent of record PCP limited policy morbidity medigap health savings account credentialing medical necessity open enrollment. Creditable coverage agent of record renewal disenroll IPA medicare. Accumulation period contract year policy benefit cap medicare supplement creditable coverage. Care plan eligible dependent free-look period waiting period incurral date board certified health care provider HCPCS. Agent of record PCP limited policy morbidity medigap health savings account credentialing medical necessity open enrollment. Creditable coverage agent of record renewal disenroll IPA medicare. Accumulation period contract year policy benefit cap medicare supplement creditable coverage. Care plan eligible dependent free-look period waiting period incurral date board certified health care provider HCPCS. Agent of record PCP limited policy morbidity medigap health savings account credentialing medical necessity open enrollment. Creditable coverage agent of record renewal disenroll IPA medicare. Accumulation period contract year policy benefit cap medicare supplement creditable coverage.",
    "feature_image": "https://robohash.org/magnietnon.png?size=300x300",
    "status": "published",
    "slug": "creditable-coverage-hcfa-common-procedure-coding-system-group-health-plan",
    "user": {
      "id": 3,
      "email": "andreas@gmail.com",
      "created_at": "2016-09-30T02:39:57.297Z",
      "updated_at": "2016-10-03T18:49:42.965Z",
      "name": "Andreas Daimainger",
      "avatar": "https://avatars3.githubusercontent.com/u/13679375?v=3&s=466",
      "role": "user"
    },
    "created_at": "2016-09-30T02:39:57.333Z",
    "updated_at": "2016-09-30T02:42:00.487Z",
    "tags": [
      'Open Source',
      'Demonstration',
      'Accomplishments',
      'Collaboration',
    ],
};

class SingleArticle extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    alert(`Hello ${name}`);
  }
  render() {
    return (
      <div className={styles.singleArticle}>
        <SingleArticleComponent name="Ryan" onClickButton={this.handleClick} article={article} />
      </div>
    );
  }
}

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  //
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    SingleArticleActionCreators,
    dispatch
  ),
});

const Container = cssModules(SingleArticle, styles);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
