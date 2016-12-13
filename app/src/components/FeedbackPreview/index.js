import React, { PropTypes } from 'react';
import Layer from 'grommet-udacity/components/Layer';
import Heading from 'grommet-udacity/components/Heading';
import Box from 'grommet-udacity/components/Box';
import Label from 'grommet-udacity/components/Label';
import Timestamp from 'grommet-udacity/components/Timestamp';
import Anchor from 'grommet-udacity/components/Anchor';
import { BoxWrapper } from './styles';

const FeedbackPreview = ({
  isVisible,
  onClose,
  feedbackItem,
}) => (
  <Layer
    onClose={onClose}
    closer
    align="center"
    hidden={!isVisible}
  >
    {feedbackItem &&
      <Box
        size="large"
        pad="large"
      >
        <Heading align="center">
          {feedbackItem.user.name}
        </Heading>
        <BoxWrapper>
          <Label>
            Email:
          </Label>
          <Heading align="center" tag="h4">
            <Anchor href={`mailto:${feedbackItem.user.email}`}>
              {feedbackItem.user.email}
            </Anchor>
          </Heading>
        </BoxWrapper>
        <BoxWrapper>
          <Label>
            Date:
          </Label>
          <Timestamp value={feedbackItem.created_at} fields={['date', 'month', 'year']} />
        </BoxWrapper>
        <BoxWrapper>
          <Label style={{ flex: 1 }}>
            Description:
          </Label>
          <Heading align="center" tag="h4">
            {feedbackItem.description}
          </Heading>
        </BoxWrapper>
        <BoxWrapper>
          <Label style={{ flex: 1 }}>
            Url:
          </Label>
          <Heading align="center" tag="h4">
            {feedbackItem.url}
          </Heading>
        </BoxWrapper>
      </Box>
    }
  </Layer>
);

FeedbackPreview.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  feedbackItem: PropTypes.object.isRequired,
};

export default FeedbackPreview;
