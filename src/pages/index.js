import React from 'react';
// import { Link } from 'gatsby';

import { Button, Box, Text } from 'elemental-react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Link = ({ children, to }) => <a href={to}>{children}</a>;

// const Footer = () => (
//   <Box bg="black">
//     <Link to="/page-2/">Go to page 2</Link>
//   </Box>
// );

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Box
      height="100vh"
      width="100vw"
      bg="white"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      p={40}
    >
      <Box />
      <Text
        mb={0}
        fontSize={[2, 2, 0]}
        lineHeight={[2, 2, 0]}
        fontFamily="Helvetica"
        color="black"
        center
      >
        Elemental Design System
      </Text>
      <Link to="https://github.com/elemental-design">
        <Button outlined={false}>
          <Button.Text color="blue" fontFamily="Helvetica" fontSize={[6, 5, 4]}>
            Find Out More
            <Text bold fontSize={[6, 5, 4]}>
              {` >`}
            </Text>
          </Button.Text>
        </Button>
      </Link>
    </Box>
    {/* <Footer /> */}
  </Layout>
);

export default IndexPage;
