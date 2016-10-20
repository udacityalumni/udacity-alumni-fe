import { createFragment } from 'apollo-client';
import gql from 'graphql-tag';

const articleDataFragment = createFragment(
  gql`
    fragment articleDataFragment on Article {
      title
      status
      content
      json
      spotlighted
      featured
      feature_image
      tags {
        id
        tag
      }
    }
  `
);

export default articleDataFragment;
