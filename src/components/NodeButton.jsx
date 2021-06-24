import React from 'react'
import styled from 'styled-components/macro'
import { THEME } from '../constants'

const Button = styled.div`
  background-color: ${THEME.nodebgColor};
  /* border-left: ${(props) =>
    props.childVisible ? `2px solid ${THEME.nodebgColor}` : ``}; */
  color: ${THEME.textColor};
  padding: 0.75rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: ${(props) =>
    props.childVisible ? '0.25rem 0.25rem 0.25rem 0' : '0.25rem'};
`
const Indicator = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  margin-right: 0.5rem;
  display: inline-block;
  border-radius: 50%;
  background-color: ${(props) =>
    props.childVisible ? `${THEME.nodebgColor}` : `${THEME.indicatorColor}`};
  border: 2px solid ${THEME.indicatorColor};
`

const NodeButton = ({ title, childVisible }) => {
  return (
    <Button childVisible={childVisible}>
      <Indicator childVisible={childVisible} />
      {title}
    </Button>
  )
}

export default NodeButton
