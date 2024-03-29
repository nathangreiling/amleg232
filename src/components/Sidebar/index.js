import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Sidebar(props) {
  const { social } = props;
  return (
    <Grid item xs={12} md={4}>
      <Typography variant="h6" id="contact" gutterBottom sx={{ mt: 3 }}>
        Reach Us Here
      </Typography>
      {social.map((network) => (
        <Link
          display="block"
          variant="body1"
          href={network.url}
          target={network.target}
          key={network.name}
          sx={{ mb: 0.5 }}
        >
          
          <Stack direction="row" spacing={1} alignItems="center"  sx={{ }}>
            <network.icon />
            <span>{network.name}</span>
          </Stack>
        </Link>
      ))}
    </Grid>
  );
}

Sidebar.propTypes = {
  social: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Sidebar;