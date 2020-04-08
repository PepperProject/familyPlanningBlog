import React from 'react'
import Layout from '../components/Layout'
import ContainerB from '../components/ContainerB'
import PageTitle from '../components/PageTitle'
import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'

const Contact = ({ data }) => {
  return (
    <Layout>
      <SEO title="Contact" description="Contact description goes here" />
      <ContainerB>
        <PageTitle>Contact</PageTitle>
        <ContactForm />
      </ContainerB>
    </Layout>
  )
}

export default Contact
