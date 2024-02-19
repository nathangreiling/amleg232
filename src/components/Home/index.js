import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import FacebookIcon from '@mui/icons-material/Facebook';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../Header';
import MainFeaturedPost from '../MainFeatured';
import FeaturedPost from '../Featured';
import Main from '../Main';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import flag from '../../images/hero/flag.jpg'
import meet from '../../images/events/meeting.png'
import idea from '../../images/events/idea.png'
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import EmailIcon from '@mui/icons-material/Email';

const sections = [
  { title: 'Contact Us', url: '/' },
  { title: 'Show Your Support', url: '/support' },
  { title: 'Membership', url: '/membership' },
];

const mainFeaturedPost = {
  title: 'Longview American Legion, Post 232',
  description:
    "FRIENDSHIP ROOM -\nADMINISTRATION BUILDING \nBUCKNER WESTMINISTER PLACE \n2201 HORSESHOE LN,\nLONGVIEW TX 75605",
  image: `${flag}`,
  imageText: 'main image description',
};

const featuredPosts = [
  
  {
    title: 'Collaborate with us!',
    date: '',
    time:'',
    location:'',
    description:
      'Have an idea, or looking to host an event? We would love to collaborate with you! Contact us to let us know the details and to go over information.',
    image: `${idea}`,
    imageLabel: 'Image Text',
  },
  {
    title: 'Monthly Meeting',
    date: 'Tuesday, February 20th',
    time:'7:00 PM',
    location:'BUCKNER WESTMINSTER CENTER \nFRIENDSHIP ROOM',
    description:
      'This February General Meeting for Post 232 will cover several interesting programs and activities coming up this year. The training program will be on Serving as an Officer in the Local Post. We are looking for people to step up, and serve where there is a need. Being a part of the Post allows for involvement in day-to-day plans, actions, and decisions. ',
    image: `${meet}`,
    imageLabel: 'Image Text',
  },
  
];

const sidebar = {
  title: 'POST EVERLASTING',
  description:
    'desc here',
  social: [
    { name: '(903)452-2741', url:'tel:9034522741', target:'', icon: LocalPhoneRoundedIcon},
    { name: '(903)452-7068', url:'tel:9034527068', target:'', icon: LocalPhoneRoundedIcon},
    { name: 'darqusta1@msn.com', url:'mailto: darqusta1@msn.com', icon: EmailIcon},
    { name: 'Facebook', url:'https://www.facebook.com/pages/category/non-profit/American-Legion-Post-232-Longview-TX-1505926166176404/', target:'_blank', icon: FacebookIcon },
  ],
};

const theme = createTheme();

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={8}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="The American Legion"/>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
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

export default Home;