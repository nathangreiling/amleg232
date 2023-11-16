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
import blooddrive from '../../images/events/bloodrive.jpg'
import christmasparty from '../../images/events/christmasparty.jpg'
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
    title: 'Giving Tuesday Drive',
    date: 'November 28th,',
    time: '5:00pm-8:00pm',
    location:' Friendship Room -\n Administration Building \n Buckner Westminister Place \n 2201 Horeshoe Ln \n Longview, TX 75605',
    description:
      'American Legion Post #232 will be collaborating with Carter BloodCare to host a Blood Drive for those in need. Blood donors will recieve a fleece blanket.',
    image: `${blooddrive}`,
    imageLabel: 'Image Text',
  },
  {
    title: 'Christmas Party',
    date: 'December 12th,',
    time:'5:00pm-7:00pm',
    location:' Friendship Room -\n Administration Building \n Buckner Westminister Place \n 2201 Horeshoe Ln \n Longview, TX 75605',
    description:
      'Post #232 would like to invite you to come to our 2023 Christmas Party. Food and Activities will be provided. Come join the fun and spread the Christmas Cheer!',
    image: `${christmasparty}`,
    imageLabel: 'Image Text',
  },
  {
    title: 'Monthly Meeting',
    date: 'November 21',
    time:'',
    location:'',
    description:
      'On the 3rd Tuesday of every month, the Longview American Legion, Post 232 gathers to discuss what can be done for the good of the legion. It would be a pleasure to have you there! Come sit in, give your input, or simply socialize. The meeting will commence at 7pm.',
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