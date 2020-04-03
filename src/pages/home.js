import React from 'react'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'

const Home = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" description="Contact description goes here" />
      <Container>
        <PageTitle>Home</PageTitle>
        <ContactForm />
      </Container>
    </Layout>
  )
}

export default Home
