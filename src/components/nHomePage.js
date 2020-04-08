import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
//import components
import MissionStatement from './nMissionStatement'
import ValueList from './nValueList'
import Layout from './Layout'
import ContainerB from './ContainerB'

const HomePage = () => {
  return (
    <ContainerB>
      <MissionStatement />
      <ValueList />
    </ContainerB>
  )
}

export default HomePage
