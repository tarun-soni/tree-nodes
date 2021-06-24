import { useState } from 'react'
import styled from 'styled-components/macro'
import { THEME } from '../constants'
import NodeButton from './NodeButton'

const Tree = ({ data = [] }) => {
  return (
    <>
      <UL>
        {data.map((tree) => (
          <TreeNode node={tree} key={tree.id} id={tree.id} />
        ))}
      </UL>
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

const TreeNode = ({ node, id }) => {
  const [isChildVisible, setIsChildVisible] = useState(false)
  const [hovered, setHovered] = useState(false)

  const hasChild = node.children ? true : false

  const arrOfParents = getParent(node.id)

  return (
    <LI>
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
        />
      </div>

      {hasChild && isChildVisible && (
        <div
          style={{
            borderLeft: isChildVisible ? `4px solid ${THEME.nodebgColor}` : ''
          }}
        >
          <UL>
            <Tree data={node.children} />
          </UL>
        </div>
      )}
    </LI>
  )
}

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
