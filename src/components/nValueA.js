import React, { Component } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const Value = styled.li`
  flex-direction: colum;
  position: relative;
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 2px;
  margin: 0 0 1em 0;
  width: 100%;
  transition: background 0.2s;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 49%')};
    margin: 0 0 2vw 0;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 32%')};
  }
  &:hover {
    background: ${props => props.theme.colors.tertiary};
  }
  a {
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
    color: ${props => props.theme.colors.text};
    text-decoration: none;
    .gatsby-image-wrapper {
      height: 0;
      padding-bottom: 60%;
      @media screen and (min-width: ${props => props.theme.responsive.small}) {
        padding-bottom: ${props => (props.featured ? '40%' : '60%')};
      }
    }
  }
`
const Title = styled.h2`
  font-size: 1.5em;
  font-weight: 600;
  text-transform: capitalize;
  margin: 1rem 1rem 0.5rem 1rem;
`
const Des = styled.h3`
  font-size: 1em;
  font-weight: 400;
  text-transform: capitalize;
  margin: 1rem 1rem 0.5rem 1rem;
`
const Button = styled.button`
  color: turquoise;
  position: relative;
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 2px;
  margin: 1em 1em 1em 1em;
`
class ValueA extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Your Money or Your Life',
      description: 'Guide of Personal Finance',
    }
  }

  render() {
    return (
      <Value>
        <Title>{this.state.title}</Title>
        <Des>{this.state.description}</Des>
        <Button>Contents</Button>
      </Value>
    )
  }
}

export default ValueA
