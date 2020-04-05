import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
//import components
import MissionStatement from './nMissionStatement'
import ValueList from './nValueList'
import Layout from './Layout'
import Container from './Container'

const HomePage = () => {
  return (
    <Container>
      <MissionStatement />
      <ValueList />
    </Container>
  )
}

export default HomePage
