import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

function FeaturedPost(props) {
  const { post } = props;

  return (
    <Grid item xs={12} md={6} margin='top' minWidth={352.5} align='left'>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex', boxShadow:'12', backgroundColor: 'white', }}>
          <CardContent sx={{ flex: 1 }}>
            <Grid container>
              <Grid item sm={12} md={6} sx={{ textAlign: "left"}}>
                <Typography component="h2" variant="h5">
                  {post.title}
                </Typography>
               <Typography variant="subtitle1" color="text.secondary">
                  {post.date} {post.time}
               </Typography>
               <Typography variant="subtitle1" color="text.secondary" align="left">
                <pre>
                  {post.location}
                </pre>
               </Typography>
              </Grid>
                <Grid item sm={12} md={6} sx={{ textAlign: "left", pl: 10, pb:2 }}>
                  <CardMedia
                    component="img"
                    sx={{ maxWidth: 200, maxHeight: 200, display: { xs: 'none', sm: 'none', md:'none', lg:'block'},  }}
                    image={post.image}
                    alt={post.imageLabel}
                  />
               </Grid>
            </Grid>
          
            <Typography variant="subtitle1" paragraph align='left'>
              {post.description}
            </Typography>
            <Typography variant="subtitle1" paragraph align='left'>
              {post.descriptionContd}
            </Typography>
            <Typography sx={{textDecoration:'underline', fontStyle:'italic'}} variant="subtitle1" paragraph align='left'>
              {post.maddress}
            </Typography>
            <Typography variant="subtitle1" paragraph align='left'>
              {post.ps}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
    
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedPost;