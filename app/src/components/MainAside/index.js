import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Heading from 'grommet-udacity/components/Heading';
import Box from 'grommet-udacity/components/Box';
import Button from 'grommet-udacity/components/Button';
import Menu from 'grommet-udacity/components/Menu';
import EditIcon from 'grommet-udacity/components/icons/base/Edit';
import DashboardIcon from 'grommet-udacity/components/icons/base/Dashboard';
import ImageIcon from 'grommet-udacity/components/icons/base/Image';
import { Thumbnail } from 'components';

const MainAside = ({
  user,
}) => (
  <Box
    basis="1/4"
    pad={{ vertical: 'large', horizontal: 'small' }}
    align="center"
    className={styles.aside}
  >
   {user &&
     <div>
       <div className={styles.avatarWrapper}>
         <Thumbnail
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
           className={styles.button}
           label="Post an Article"
           onClick={e => e}
           plain
           href={user.role === 'admin' ? '/admin/cms?action=new' : 'author/cms?action=new'}
           icon={<EditIcon />}
         />
         <Button
           className={styles.button}
           label="Dashboard"
           onClick={e => e}
           plain
           href={user.role === 'admin' ? '/admin/dashboard' : '/author/dashboard'}
           icon={<DashboardIcon />}
         />
       </Box>
       {user.role === 'admin' &&
         <Box className={styles.widgetBox}>
           <Heading align="center" tag="h3">
             Widgets
           </Heading>
           <Box
             pad={{ horizontal: 'small' }}
             className={styles.innerWidgetBox}
           >
             <Menu inline>
               <Button
                 className={styles.button}
                 label="Carousel"
                 onClick={e => e}
                 plain
                 href="/admin/carousel"
                 icon={<ImageIcon />}
               />
             </Menu>
           </Box>
         </Box>
       }
     </div>
   }
  </Box>
);

MainAside.propTypes = {
  user: PropTypes.object.isRequired,
};

export default cssModules(MainAside, styles);
