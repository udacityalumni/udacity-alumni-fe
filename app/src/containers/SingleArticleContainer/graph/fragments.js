import { createFragment } from 'apollo-client';
import gql from 'graphql-tag';

const singleArticleFragment = createFragment(
  gql`
    fragment singleArticleFragment on Article {
      title
      status
      content
      spotlighted
      feature_image
      created_at
      updated_at
      tags {
        id
        tag
      }
      user {
        name
        bio
        avatar
      }
    }
  `
);

export default singleArticleFragment;
