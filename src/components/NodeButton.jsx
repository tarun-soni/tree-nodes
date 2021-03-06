import React from 'react'
import styled from 'styled-components/macro'
import { THEME } from '../constants'
import { Draggable } from 'react-beautiful-dnd'

const NodeButton = ({
  title,
  childVisible,
  setHovered,
  hovered,
  setIsChildVisible,
  id,
  arrOfParents,
  tree
}) => {
  const mouseEntered = () => {
    setHovered(true)
    arrOfParents?.map((p) => {
      if (p)
        document.getElementById(p).style['backgroundColor'] = THEME.hoverColor
      return p
    })
    document.getElementById(id).style['backgroundColor'] = THEME.hoverColor
  }
  const mouseLeaved = () => {
    setHovered(false)

    arrOfParents?.map((p) => {
      if (p)
        document.getElementById(p).style['backgroundColor'] = THEME.nodebgColor
      return p
    })
    document.getElementById(id).style['backgroundColor'] = THEME.nodebgColor
  }
  return (
    <Draggable
      // draggableId={k ? `${k}_key_${index}` : `key_${index}`}
      draggableId={tree.id}
      index={tree.uuid}
      key={tree.uuid}
    >
      {(provided) => (
        <Button
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          id={id}
          onClick={(e) => setIsChildVisible((isVisible) => !isVisible)}
          childVisible={childVisible}
          onMouseEnter={mouseEntered}
          onMouseLeave={mouseLeaved}
          hovered={hovered}
        >
          <Indicator childVisible={childVisible} />
          {title}
        </Button>
      )}
    </Draggable>
  )
}

const Button = styled.div`
  background-color: ${(props) =>
    props.hovered ? `${THEME.hoverColor}` : `${THEME.nodebgColor}`};

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
export default NodeButton
