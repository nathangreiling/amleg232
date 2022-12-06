import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Markdown from '../Markdown';

function Main(props) {
  const { posts, title } = props;

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
    { <Typography variant="h4" gutterBottom>
        {title}
      </Typography> }
      <Divider/>
      
      <Typography className='tab'>"The American Legion is a social and mutual-aid veterans' organization including members of the United States armed forces. 
      The organization was founded in 1919 by veterans returning from Europe after World War I, and was later chartered as an official American patriotic 
      society under Title 36 of the United States Code. The organization is headquartered in Indianapolis, Indiana, and also has offices in Washington, DC. 
      The group has nearly 3 million members in over 14,000 Posts worldwide."
      </Typography>
      
      
      <Typography className='tab'>"In addition to organizing commemorative events and volunteer veteran support 
      activities, the American Legion is active in issue-oriented U.S. politics. Its primary political activity is lobbying on behalf of the interests of 
      veterans and service members, including support for veterans benefits such as pensions and the Veterans Affairs hospital system."
      <a className='sourcelink' href='https://military-history.fandom.com/wiki/American_Legion#cite_note-2' target='_blank'>[Source]</a>
      </Typography>
      

      <Typography className='tab'> Here at the Longview American Legion, we support believe in giving support back to the public.

      </Typography>
      

    </Grid>
  );
}

Main.propTypes = {
  // posts: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default Main;