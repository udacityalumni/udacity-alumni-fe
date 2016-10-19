import React, { PropTypes } from 'react';
import List from 'grommet-udacity/components/List';
import ListItem from 'grommet-udacity/components/ListItem';
import FormField from 'grommet-udacity/components/FormField';
import Box from 'grommet-udacity/components/Box';
import Form from 'grommet-udacity/components/Form';
import Button from 'grommet-udacity/components/Button';
import Carousel from 'grommet-udacity/components/Carousel';
import Anchor from 'grommet-udacity/components/Anchor';
import Section from 'grommet-udacity/components/Section';
import Value from 'grommet-udacity/components/Value';
import Heading from 'grommet-udacity/components/Heading';
import EditIcon from 'grommet-udacity/components/icons/base/Edit';
import TrashIcon from 'grommet-udacity/components/icons/base/Trash';
import CheckmarkIcon from 'grommet-udacity/components/icons/base/Checkmark';
import CloseIcon from 'grommet-udacity/components/icons/base/Close';
import AddIcon from 'grommet-udacity/components/icons/base/Add';
import DragIcon from 'grommet-udacity/components/icons/base/Drag';

import styles from './index.module.scss';
import cssModules from 'react-css-modules';

const CarouselWidget = ({
  images,
  onEditImage,
  onAddImage,
  onDeleteImage,
  newImageInput,
  editImageInput,
  currentlyEditing,
  setEditing,
  cancelEditing,
}) => (
  <div className={styles.carouselWidget}>
    <Box className={styles.carouselBox}>
      <Carousel>
        {images.map((image, i) =>
          <Box align="center" justify="center" key={i}>
            <img src={image.url} className={styles.carouselImage} />
            <div className={styles.overlay}>
              <Value
                value={i + 1}
                size="xlarge"
                className={styles.overlayValue}
              />
              <div className={styles.anchorOverlay}>
                <Anchor href={image.url}>
                  {image.url.length > 80 ? `${image.url.slice(0, 80)}...` : image.url}
                </Anchor>
              </div>
            </div>
          </Box>
        )}
      </Carousel>
    </Box>
    <Form className={styles.form}>
      <Box
        direction="row"
        align="center"
        justify="between"
        className={styles.inputBox}
      >
        <FormField>
          <input
            {...newImageInput}
            type="text"
            placeholder="Add an image URL for the carousel"
          />
        </FormField>
        <span>
          <Button
            icon={<AddIcon />}
            onClick={() => onAddImage({ url: newImageInput.value })}
            plain
          />
        </span>
      </Box>
    </Form>
    <Section pad={{ vertical: 'medium' }}>
      <Heading align="center" tag="h3">
        Current Images
      </Heading>
      <List>
        {images.map((image, i) =>
          <ListItem key={i}>
            {currentlyEditing !== null && currentlyEditing === i ?
              <Box
                direction="row"
                align="center"
                justify="between"
                className={styles.inputBox}
              >
                <FormField className={styles.editInputFormField}>
                  <input
                    {...editImageInput}
                    type="text"
                    placeholder={images[currentlyEditing].url}
                  />
                </FormField>
                <span>
                  <Button
                    icon={<CheckmarkIcon />}
                    onClick={() => onEditImage({
                      image: {
                        id: images[currentlyEditing].id,
                        url: editImageInput.value,
                      },
                      index: currentlyEditing,
                    })}
                    plain
                  />
                </span>
                <span>
                  <Button
                    plain
                    icon={<CloseIcon />}
                    onClick={() => cancelEditing(currentlyEditing)}
                  />
                </span>
              </Box>
            :
              <div className={styles.listItemBox}>
                <span className={styles.imageNum}>
                  <Value value={i + 1} size="medium" />
                </span>
                <span style={{ flex: 1 }}>
                  {image.url.length > 80 ? `${image.url.slice(0, 80)}...` : image.url}
                </span>
                <span>
                  <Button
                    plain
                    icon={<EditIcon />}
                    onClick={() => setEditing(i)}
                  />
                </span>
                <span>
                  <Button
                    plain
                    icon={<TrashIcon />}
                    onClick={() => onDeleteImage(i)}
                  />
                </span>
              </div>
            }
          </ListItem>
        )}
      </List>
    </Section>
  </div>
);

CarouselWidget.propTypes = {
  images: PropTypes.array.isRequired,
  onEditImage: PropTypes.func.isRequired,
  onAddImage: PropTypes.func.isRequired,
  onDeleteImage: PropTypes.func.isRequired,
  newImageInput: PropTypes.object.isRequired,
  editImageInput: PropTypes.object.isRequired,
  currentlyEditing: PropTypes.number,
  setEditing: PropTypes.func.isRequired,
  cancelEditing: PropTypes.func.isRequired,
};

export default cssModules(CarouselWidget, styles);
