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
import gospelgroup from '../../images/events/gospelgroup.jpg'
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import EmailIcon from '@mui/icons-material/Email';

const sections = [
  { title: 'Contact Us', url: '#' },
  { title: 'Show Your Support', url: '/support' },
  { title: 'Membership', url: '#' },
];

const mainFeaturedPost = {
  title: 'Longview American Legion, Post 232',
  description:
    "2201 HORSESHOE LN, LONGVIEW 75605-5650 TX USA",
  image: `${flag}`,
  imageText: 'main image description',
};

const featuredPosts = [
  {
    title: 'Upcoming event #1',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: `${flag}`,
    imageLabel: 'Image Text',
  },
  {
    title: 'Annual Gospel Fest',
    date: 'July 2',
    description:
      'This years Annual Gospel Fest will be held on July 2nd, 2023. Money raised for this event will be donated towards veterans in need, financial aid, and disabilty ramps for the public. We would love for you to come enjoy the Gospel Festival and show your support!',
    image: `${gospelgroup}`,
    imageLabel: 'Image Text',
  },
];

const sidebar = {
  title: 'POST EVERLASTING',
  description:
    'desc here',
  archives: [
    { title: ' John Doe, March 2020', url: '#', short: 'A brief passage describing said persons significance, and etc.' },
    { title: 'Joe Smith, February 2020', url: '#', short:'A brief passage describing said persons significance, and etc.' },
    { title: 'Jane Doe, January 2020', url: '#', short:'A brief passage describing said persons significance, and etc.' },
  ],
  social: [
    { name: '(903)***-****', url:'tel:5554280940', target:'', icon: LocalPhoneRoundedIcon},
    { name: 'youremail@example.com', url:'mailto: abc@example.com', icon: EmailIcon},
    { name: 'Facebook', url:'https://www.facebook.com/pages/category/non-profit/American-Legion-Post-232-Longview-TX-1505926166176404/', target:'_blank', icon: FacebookIcon },
  ],
};

const theme = createTheme();

function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
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

export default Blog;