import { useState } from 'react'
import styled from 'styled-components/macro'
import { THEME } from '../constants'
import NodeButton from './NodeButton'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import React from 'react'

const Tree = ({ data = [], no = 0, handleOnDragEnd }) => {
  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters">
          {(provided) => (
            <UL {...provided.droppableProps} ref={provided.innerRef}>
              {data?.map((tree, index) => {
                console.log(`tree`, tree)
                console.log(`index`, index)
                return (
                  <LI key={tree.id}>
                    <TreeNode
                      key={tree.id}
                      node={tree}
                      id={tree.id}
                      uuid={tree.uuid}
                      no={++no}
                      tree={tree}
                      handleOnDragEnd={handleOnDragEnd}
                    />
                  </LI>
                )
              })}

              {provided.placeholder}
            </UL>
          )}
        </Droppable>
      </DragDropContext>
    </>
  )
}
const getParent = (node) => {
  if (!node) return []
  else {
    return [
      document.getElementById(node)?.parentElement.parentElement.parentElement
        .parentElement.parentElement.parentElement.children[0].children[0]?.id,
      ...getParent(
        document.getElementById(node)?.parentElement.parentElement.parentElement
          .parentElement.parentElement.parentElement.children[0].children[0]?.id
      )
    ]
  }
}

const TreeNode = React.forwardRef((props, _ref) => {
  const [isChildVisible, setIsChildVisible] = useState(false)
  const [hovered, setHovered] = useState(false)
  const { node, id, tree, handleOnDragEnd } = props

  const hasChild = node.children ? true : false

  const arrOfParents = getParent(node.id)

  return (
    <>
      <div style={{ display: 'flex' }}>
        <NodeButton
          title={node.title}
          childVisible={isChildVisible}
          hasChild={hasChild}
          hovered={hovered}
          setHovered={setHovered}
          setIsChildVisible={setIsChildVisible}
          id={id}
          arrOfParents={arrOfParents}
          tree={tree}
        />
      </div>

      {hasChild && isChildVisible && node.children.length && (
        <div
          style={{
            borderLeft: isChildVisible ? `4px solid ${THEME.nodebgColor}` : ''
          }}
        >
          <UL>
            <Tree data={node.children} handleOnDragEnd={handleOnDragEnd} />
          </UL>
        </div>
      )}
    </>
  )
})

const UL = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  /* border: 1px solid green; */
`
const LI = styled.li`
  padding: 0.75rem 1.25rem;
`

export default Tree

{
  /* <Draggable
// draggableId={k ? `${k}_key_${index}` : `key_${index}`}
draggableId={tree.id}
index={tree.uuid}
key={tree.uuid}
>
{(provided) => (
  <LI
    ref={provided.innerRef}
    {...provided.draggableProps}
    {...provided.dragHandleProps}
  >
    <TreeNode
      key={tree.id}
      node={tree}
      id={tree.id}
      uuid={tree.uuid}
      no={++no}
    />
  </LI>
)}
</Draggable> */
}
