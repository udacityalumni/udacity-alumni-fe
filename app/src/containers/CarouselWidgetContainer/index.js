import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CarouselWidgetActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Heading from 'grommet-udacity/components/Heading';
import Box from 'grommet-udacity/components/Box';
import Section from 'grommet-udacity/components/Section';
import { CarouselWidget, MainAside } from 'components';
import { reduxForm } from 'redux-form';

const formFields = [
  'newImageInput',
  'editImageInput',
];

class CarouselWidgetContainer extends Component {
  constructor() {
    super();
    this.handleSaveImages = this.handleSaveImages.bind(this);
  }
  handleSaveImages() {
    // Need this to work with api.
  }
  render() {
    const {
      images,
      fields,
      actions,
      currentlyEditing,
      user,
    } = this.props;
    return (
      <div className={styles.carouselWidget}>
        <Section
          primary
          alignContent="center"
          align="center"
          className={styles.mainSection}
        >
          <Box direction="row">
            <Box
              basis="2/3"
              pad="large"
              align="center"
              justify="center"
              className={styles.mainContent}
            >
              <Heading align="center">
                Carousel Widget
              </Heading>
              <CarouselWidget
                {...fields}
                setEditing={(index) => actions.carouselSetEditing(index)}
                currentlyEditing={currentlyEditing}
                onEditImage={({ index, image }) => actions.carouselEditImage(index, image)}
                cancelEditing={(index) => actions.carouselCancelEditing(index)}
                onDeleteImage={(index) => actions.carouselRemoveImage(index)}
                onAddImage={(image) => actions.carouselAddImage(image)}
                onSaveImages={this.handleSaveImages}
                images={images}
              />
            </Box>
            {user &&
              <MainAside
                user={user}
              />
            }
          </Box>
        </Section>
      </div>
    );
  }
}

CarouselWidgetContainer.propTypes = {
  images: PropTypes.array.isRequired,
  fields: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  currentlyEditing: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  images: state.carouselWidgetContainer.images,
  user: state.app.user,
  currentlyEditing: state.carouselWidgetContainer.currentlyEditing,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    CarouselWidgetActionCreators,
    dispatch
  ),
});

const Container = cssModules(CarouselWidgetContainer, styles);

const FormContainer = reduxForm({
  form: 'CarouselWidget',
  fields: formFields,
})(Container);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormContainer);
