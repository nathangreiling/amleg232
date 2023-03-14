import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import icon from '../../images/icons/legionicon.gif'

function Header(props) {


  const handleCLickScroll = (e) => {
    
    const contacts = document.getElementById('contact');
    const contactHeader = document.getElementById('Contact Us');
    if(e.target === contactHeader && contacts) {contacts.scrollIntoView({behavior : 'smooth'})}
    else {return}
  }


  const { sections } = props; 
  
  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Typography
          component="h2"
          variant="h3"
          color="indigo.800"
          align="center"
          noWrap
          sx={{ flex: 1, fontWeight:'bold' }}
        >
          <div className='float'>POST <img className='icon' src={icon} alt=''></img> 232</div>
        
        </Typography>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto', padding:'1px'}}
      >
        {sections.map((section) => (
        
          <Link
            id={section.title}
            to={section.url}
            key={section.title}
            onClick = {handleCLickScroll}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Header;