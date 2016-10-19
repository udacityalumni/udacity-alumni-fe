import { createFragment } from 'apollo-client'

const articleDataFragment = createFragment`
fragment articleData on Article {
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
`;

export default articleDataFragment;
