import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Helmet } from  'react-helmet';
import Topsection from '../sections/TopSection';
import AboutMe from '../sections/AboutMe';
import Experience from '../sections/Experience';
import Projects from '../sections/Projects';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

export const query = graphql`
  {
    allSanityProject {
      edges {
        node {
          title
          description
          githubUrl
          liveDemoUrl
          slug {
            current
          }
          image {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
    allSanityAbout {
      edges {
        node {
          name
          description
          slug {
            current
          }
          image {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
    allSanityExperience {
      edges {
        node {
          title
          description
          slug {
            current
          }
          image {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const { edges: aboutData } = data.allSanityAbout;
  const { edges: experienceData } = data.allSanityExperience;
  const { edges: projectData } = data.allSanityProject;
  return (
    <Layout>
      <SEO title="Jay Giang" keywords={[`gatsby`, `application`, `react`]} />
      <Helmet>
        <meta property="og:site_name" content="Jay Giang Portfolio"/>
        <meta property="og:image" content="https://i.imgur.com/ALD6Gkm.png"/>
        <meta property="og:url" content="https://jaygiang.dev/"/>
      </Helmet>
      <Topsection />
      <AboutMe aboutData={aboutData} />
      <Experience experienceData={experienceData} />
      <Projects projectData={projectData} />
    </Layout>
  );
};

export default IndexPage;
