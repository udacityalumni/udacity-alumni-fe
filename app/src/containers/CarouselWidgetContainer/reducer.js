import * as types from './constants';
import update from 'react-addons-update';

export const initialState = {
  currentlyEditing: null,
  images: [
    {
      id: 1,
      url:"https://github.com/RyanCCollins/cdn/blob/master/alumni-webapp/Udacity-Self-Driving-Car-Engineer-Nanodegree-800x333.jpg?raw=true",
    },
    {
      id: 2,
      url: "https://github.com/RyanCCollins/cdn/blob/master/alumni-webapp/VRDeveloperNanodegreeProgram.png?raw=true",
    },
    {
      id: 3,
      url: "https://github.com/RyanCCollins/cdn/blob/master/alumni-webapp/deeplearning.jpg?raw=true",
    },
  ],
};

const carouselWidgetReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.CAROUSEL_SET_EDITING:
        return update(state, {
          currentlyEditing: {
            $set: action.index,
          },
        });
      case types.CAROUSEL_CANCEL_EDITING:
        return update(state, {
          currentlyEditing: {
            $set: null,
          },
        });
      case types.CAROUSEL_ADD_IMAGE:
        return update(state, {
          images: {
            $set: [...state.images, action.image],
          },
        });
      case types.CAROUSEL_REMOVE_IMAGE:
        return update(state, {
          images: {
            $set: [
              ...state.images.slice(0, action.index),
              ...state.images.slice(action.index + 1),
            ],
          },
        });
      case types.CAROUSEL_EDIT_IMAGE:
        return update(state, {
          images: {
            $set: [
              ...state.images.slice(0, action.index),
              action.image,
              ...state.images.slice(action.index + 1),
            ],
          },
          currentlyEditing: {
            $set: null,
          },
        });
      default:
        return state;
    }
  };

export default carouselWidgetReducer;
