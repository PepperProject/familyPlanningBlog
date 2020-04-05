import React from 'react'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'
import HomePage from '../components/nHomePage'

const Home = () => {
  return (
    <Layout>
      <SEO title="Home" description="Contact description goes here" />
      <Container>
        <HomePage />
      </Container>
    </Layout>
  )
}

export default Home
