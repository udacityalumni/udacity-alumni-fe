import React, { PropTypes, Component } from 'react';
import { FabContainer, Fab, FabButton, FabIcon } from './styles';

class BackButton extends Component {
  render() {
    return (
      <FabContainer>
        <Fab>
          <FabButton
            icon={
              <FabIcon
                a11yTitle="Back button"
                a11yTitleId="back-button-floating-button-icon"
              />
            }
            onClick={() => this.context.router.goBack()}
            a11yTitle="Add Review Floating"
            a11yTitleId="add-review-floating-button"
          />
        </Fab>
      </FabContainer>
    );
  }
}

BackButton.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default BackButton;
