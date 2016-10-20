import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Heading from 'grommet-udacity/components/Heading';
import Image from 'grommet-udacity/components/Image';
import Box from 'grommet-udacity/components/Box';
import Button from 'grommet-udacity/components/Button';
import Menu from 'grommet-udacity/components/Menu';
import EditIcon from 'grommet-udacity/components/icons/base/Edit';
import ArticleIcon from 'grommet-udacity/components/icons/base/Article';
import ImageIcon from 'grommet-udacity/components/icons/base/Image';

const MainAside = ({
  user,
}) => (
  <Box
    basis="1/3"
    pad={{ vertical: 'large', horizontal: 'small' }}
    align="center"
    className={styles.aside}
  >
   {user &&
     <div>
       <div className={styles.avatarWrapper}>
         <Image
           className={styles.avatarImage}
           size="medium"
           src={user.avatar}
         />
       </div>
       <Box
         className={styles.careerResourcesBlurb}
         align="center"
         pad={{ horizontal: 'small', vertical: 'small' }}
       >
         <Heading tag="h3" align="center">
           {`Hello, ${user.name}!`}
         </Heading>
       </Box>
       <Box
         className={styles.careerResourcesBlurb}
         basis="2/3"
         align="center"
         pad={{ horizontal: 'small', vertical: 'small' }}
       >
         <Button
           label="Post an Article"
           onClick={e => e}
           plain
           href="/admin/cms?action=new"
           icon={<EditIcon />}
         />
         <Button
           label="Manage Articles"
           onClick={e => e}
           plain
           href="/admin/content-dashboard"
           icon={<ArticleIcon />}
         />
       </Box>
       <Box className={styles.widgetBox}>
         <Heading align="center" tag="h3">
           Widgets
         </Heading>
         <Box className={styles.innerWidgetBox}>
           <Menu inline>
             <Button
               label="Carousel"
               onClick={e => e}
               plain
               href="/admin/carousel"
               icon={<ImageIcon />}
             />
           </Menu>
         </Box>
       </Box>
     </div>
   }
  </Box>
);

MainAside.propTypes = {
  user: PropTypes.object.isRequired,
};

export default cssModules(MainAside, styles);
