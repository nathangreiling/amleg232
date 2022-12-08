import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Header from '../Header';
import Footer from '../Footer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Sidebar from '../Sidebar';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import Main from '../Main';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';

const sections = [
    { title: 'Contact Us', url: '#' },
    { title: 'Home', url: '#' },
    { title: 'Membership', url: '#' },
  ];

const theme = createTheme();

function Support() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header sections={sections} />
        <main>
          {/* <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
            </Grid>*/ }
          {/* <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="does it work?"/>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid> */}
           <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Grid sx={{ display: 'flex', boxShadow:'', mt:'2.5rem' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              Test
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              im testing
            </Typography>
            <Typography variant="subtitle1" paragraph>
              okay?
            </Typography>
            {/* <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography> */}
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image='https://source.unsplash.com/random'
            alt=''
          />
        </Grid>
      </CardActionArea>
    </Grid>
     
        </main>
      </Container>
      <Footer
        title="POST 232"
        description="Veterans Strengthening America"
      />
    </ThemeProvider>
  );
}

export default Support;