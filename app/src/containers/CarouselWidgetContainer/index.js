import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CarouselWidgetActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Heading from 'grommet-udacity/components/Heading';
import Box from 'grommet-udacity/components/Box';
import Section from 'grommet-udacity/components/Section';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { reduxForm } from 'redux-form';
import calculateLoading from './utils/loading';
import {
  LoadingIndicator,
  ErrorAlert,
  MainAside,
  CarouselWidget,
} from 'components';

const formFields = [
  'newImageInput',
  'editImageInput',
];

class CarouselWidgetContainer extends Component {
  componentWillReceiveProps({ spotlightImages }) {
    if (spotlightImages !== this.props.images) {
      this.props.actions.carouselSetImages(spotlightImages);
    }
  }
  handleCreatingImage(image) {
    const {
      authToken,
      createMutation,
      actions,
      refetch,
    } = this.props;
    const data = {
      variables: {
        token: authToken,
        url: image.url,
      },
    };
    createMutation(data)
      .then(res => {
        const newImage = res.data.CreateSpotlightImage.spotlight_image;
        actions.carouselAddImage(newImage);
        actions.carouselResetForm();
        refetch();
      });
  }
  handleUpdatingImage(index, image) {
    const {
      authToken,
      updateMutation,
      actions,
      refetch,
    } = this.props;
    const data = {
      variables: {
        token: authToken,
        id: image.id,
        url: image.url,
      },
    };
    updateMutation(data)
      .then(res => {
        const newImage = res.data.UpdateSpotlightImage.spotlight_image;
        actions.carouselEditImage(index, newImage);
        actions.carouselResetForm();
        refetch();
      });
  }
  handleDeletingImage(index) {
    const {
      deleteMutation,
      actions,
      images,
      authToken,
      refetch,
    } = this.props;
    const id = parseInt(images[index].id, 10);
    const data = {
      variables: {
        token: authToken,
        id,
      },
    };
    deleteMutation(data)
      .then(() => {
        actions.carouselRemoveImage(index);
        refetch();
      });
  }
  render() {
    const {
      images,
      fields,
      actions,
      currentlyEditing,
      user,
      imagesError,
      imagesLoading,
      createLoading,
      updateLoading,
      deleteLoading,
    } = this.props;
    return (
      <div className={styles.carouselWidget}>
        <Section
          primary
          alignContent="center"
          align="center"
          className={styles.mainSection}
        >
          {imagesError &&
            <ErrorAlert
              errors={[imagesError]}
              onClose={this.handleCloseErrorAlert}
            />
          }
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
              {calculateLoading(
                images,
                imagesLoading,
                createLoading,
                updateLoading,
                deleteLoading,
              ) ?
                <LoadingIndicator
                  isLoading
                />
              :
                <CarouselWidget
                  {...fields}
                  setEditing={(index) => actions.carouselSetEditing(index)}
                  currentlyEditing={currentlyEditing}
                  onEditImage={({ index, image }) => this.handleUpdatingImage(index, image)}
                  cancelEditing={(index) => actions.carouselCancelEditing(index)}
                  onDeleteImage={(index) => this.handleDeletingImage(index)}
                  onAddImage={(image) => this.handleCreatingImage(image)}
                  images={images}
                />
              }
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
  images: PropTypes.array,
  refetch: PropTypes.func.isRequired,
  imagesError: PropTypes.object,
  imagesLoading: PropTypes.bool,
  spotlightImages: PropTypes.array,
  fields: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  currentlyEditing: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  createMutation: PropTypes.func.isRequired,
  updateMutation: PropTypes.func.isRequired,
  deleteMutation: PropTypes.func.isRequired,
  authToken: PropTypes.string.isRequired,
  createLoading: PropTypes.bool.isRequired,
  updateLoading: PropTypes.bool.isRequired,
  deleteLoading: PropTypes.bool.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  images: state.carouselWidgetContainer.images,
  user: state.app.user,
  authToken: state.app.authToken,
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

const allSpotlightImageQuery = gql`
query allSpotlightImages {
  spotlightImages {
    id
    url
  }
}
`;

const ContainerWithData = graphql(allSpotlightImageQuery, {
  props: ({ data: { loading, spotlightImages, error, refetch } }) => ({
    imagesLoading: loading,
    spotlightImages,
    imageError: error,
    refetch,
  }),
})(Container);

const createSpotlightImageMutation = gql`
mutation createSpotlightImage($token: String!, $url: String!) {
  CreateSpotlightImage(input: { auth_token: $token, url: $url }) {
    spotlight_image {
      id
      url
    }
  }
}
`;
const updateSpotlightImageMutation = gql`
mutation updateSpotlightImage($token: String!, $url: String!, $id: ID!) {
  UpdateSpotlightImage(input: { auth_token: $token, url: $url, id: $id }) {
    spotlight_image{
      id
      url
    }
  }
}
`;
const deleteSpotlightImageMutation = gql`
mutation deleteSpotlightImage($token: String!, $id: ID!) {
  DeleteSpotlightImage(input: { auth_token: $token, id: $id }) {
    id: deleted_id
  }
}
`;

const ContainerWithCreateMutation = graphql(createSpotlightImageMutation, {
  props: ({ loading, mutate, error }) => ({
    createMutation: mutate,
    createLoading: loading,
    createError: error,
  }),
})(ContainerWithData);
const ContainerWithUpdateMutation = graphql(updateSpotlightImageMutation, {
  props: ({ loading, mutate, error }) => ({
    updateMutation: mutate,
    updateLoading: loading,
    updateError: error,
  }),
})(ContainerWithCreateMutation);
const ContainerWithDeleteMutation = graphql(deleteSpotlightImageMutation, {
  props: ({ loading, mutate, error }) => ({
    deleteMutation: mutate,
    deleteLoading: loading,
    deleteError: error,
  }),
})(ContainerWithUpdateMutation);

const FormContainer = reduxForm({
  form: 'CarouselWidget',
  fields: formFields,
})(ContainerWithDeleteMutation);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormContainer);
