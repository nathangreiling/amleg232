import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Header from '../Header';
import Footer from '../Footer';
import MainFeaturedPost from '../MainFeatured';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import dono from '../../images/hero/donohand.png'
import flag from '../../images/hero/flag.jpg'
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';

const sections = [
    { title: 'Contact Us', url: '/' },
    { title: 'Home', url: '/' },
    { title: 'Membership', url: '/membership' },
  ];
  const mainFeaturedPost = {
    title: 'Longview American Legion, Post 232',
    description:
      "FRIENDSHIP ROOM -\nADMINISTRATION BUILDING \nBUCKNER WESTMINISTER PLACE \n2201 HORSESHOE LN,\nLONGVIEW TX 75605",
    image: `${flag}`,
    imageText: 'main image description',
  };  

const theme = createTheme();

function Support() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header sections={sections} />
        <main>
        <MainFeaturedPost post={mainFeaturedPost} />
        <Typography variant='h4'
               sx={{pb:2,
                    pt:3}}
            >
              Show Your Support
            </Typography>
            <Divider/>
        <Grid container sx={{ alignItems: "center", }}>  
          <Grid item xs={6} sx={{
            backgroundImage:`url(${dono})`,
            height:'600px', 
            backgroundSize:'contain',
            backgroundRepeat:'no-repeat',
            display: {xs: 'none', sm: 'none', md:'block'}
          }}>
           
          </Grid>
          <Grid item xs={12} sm={12} md={6} sx={{ textAlign: "left", pb:5 }} margin='auto'>
            <Typography
              
              sx={{
                py:2,
              }}
            >
As a veterans' organization, the American Legion is dedicated to serving veterans, their families, 
and communities through various programs and services. The support we recieve allows us to continue our mission
providing assistance to those who have served our country.</Typography>
<Typography sx={{pb:1}}>
There are many ways to show your support to the American Legion. You can make a one-time or recurring donation 
using a credit or debit card, or you can mail a check or money order to our national headquarters.
All donations are tax-deductible and go directly towards supporting our mission. Here are just a few examples 
of what your donation will support: </Typography>

<ul>
<li>Veterans' assistance with education, employment, and healthcare</li>
<li>Advocacy for veterans' rights and benefits at the local, state, and national levels</li>
<li>Community service and development programs such as Boys State and Girls State</li>
<li>Disaster relief efforts for veterans and their families</li>
<li>Support for military families and children of fallen service members</li>
</ul>

          </Grid>
          <Grid item xs={12}><a className='btn'href='https://mylegion.org/PersonifyEbusiness/Donate' target='__blank'>DONATE</a></Grid>
        </Grid>
        <Typography component='div' sx={{pt:5, pb:3, textAlign:'left', fontStyle:'italic'}}>
To make a donation, please click the button above. You will be redirected to a secure payment portal where you can make a 
donation using a credit or debit card. If you prefer to mail a check or money order, please send it to the following address: 
<Typography sx={{textDecoration:'underline'}} display="inline"> American Legion National Headquarters, PO Box 1055, Indianapolis, IN 46206.</Typography>
          </Typography>
        <Typography sx={{pt:3, pb:2}}>Thank you for your support! Together, we can continue to serve and honor our nation's veterans and their families.</Typography>
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