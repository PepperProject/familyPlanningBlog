import React from 'react'
import ValueA from './nValueA'
import ValueB from './nValueB'
import ValueC from './nValueC'
import styled from '@emotion/styled'

const ValueWrapper = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 0 auto;
  &::after {
    content: '';
    flex: 0 0 32%;
  }
`
const ValueList = () => {
  return (
    <ValueWrapper>
      <ValueA />
      <ValueB />
      <ValueC />
    </ValueWrapper>
  )
}

export default ValueList
