import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Header from '../Header';
import Footer from '../Footer';
import MainFeaturedPost from '../MainFeatured';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import flag from '../../images/hero/flag.jpg'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import Divider from'@mui/material/Divider'



const sections = [
    { title: 'Contact Us', url: '/' },
    { title: 'Show Your Support', url: '/support' },
    { title: 'Home', url: '/' },
  ];
  const mainFeaturedPost = {
    title: 'Longview American Legion, Post 232',
    description:
      "2201 HORSESHOE LN, LONGVIEW 75605-5650 TX USA",
    image: `${flag}`,
    imageText: 'main image description',
  };  

const theme = createTheme();

function Membership () {

    return (
        <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header sections={sections} />
        <main>
        <MainFeaturedPost post={mainFeaturedPost} />
              <Typography
               variant='h4'
               sx={{pb:2,
                    pt:3}}
               >
                Join The American Legion
              </Typography>
              <Divider/>
              <Grid container>
          <Grid item sm={12} md={6} sx={{ textAlign: 'left', py:3, pr:4 }}>
            <Typography variant='h6'>How To Join:</Typography>
            <Typography className='' sx={{pt:2,  }} >
            To join the American Legion, you must have served at least one day of active military duty in the United States Armed Forces since December 7, 1941.
            If you meet the eligibility criteria, you can fill out an application for membership at our local post here in Longview, online, or by mail. 
            You will need to provide proof of eligibility, such as a copy of your DD-214.
            </Typography>
            <Typography className='' sx={{  pt:2}} >
            If you prefer to join in person, you can visit us at Post 232 and fill out an application here, where we would be happy to assist you with the process. 
            You will need to bring your eligibility documentation with you for us to verify proof of prerequisite.
            </Typography>
            <Typography className='' sx={{  pt:2 }} >
            To apply online, visit this link to the <a href='https://www.legion.org/join' target='__blank'>[Offical American Legion Website]</a>. 
            Complete the online application and submit the necessary documents. The membership fees for the American Legion vary by post, 
            so you will need to contact your local post for the cost of membership.
            </Typography>
            <Typography className='' sx={{  pt:2 }} >
            Once you have submitted your application and paid the membership fee, you will become a member 
            of the American Legion and gain access to a variety of benefits and resources.
            </Typography>
            
          </Grid>
          <Grid item sm={12} md={6} sx={{ textAlign: "left", py:3, pl:4 }}>
            <Typography variant='h6'>Benefits for Members:</Typography>
            <ul>
              <li>Advocacy: The American Legion is a powerful advocate for veterans' rights, benefits, and needs.</li>
              <li>Financial assistance: The American Legion offers a variety of financial assistance programs for veterans and their families.</li>
              <li>Health care: The American Legion is committed to helping veterans access quality health care.</li>
              <li>Career assistance: The American Legion offers a range of career assistance programs, including job fairs, resume writing workshops, and networking events.</li>
              <li>Community involvement: The American Legion is active in communities across the country, and members have the opportunity to participate in a variety of community service projects, volunteer opportunities, and social events.</li>
              <li>Discounts and perks: Members of the American Legion are eligible for a variety of discounts and perks.</li>
              <li>Networking: The American Legion provides members with opportunities to network with other veterans, business leaders, and community members.</li>
            </ul>
          </Grid>
        </Grid>
        </main>
        </Container>
        <Footer
        title="POST 232"
        description="Veterans Strengthening America"
      />
      </ThemeProvider>
    )
}

export default Membership;
    
