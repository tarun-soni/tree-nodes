import { useState } from 'react'
import styled from 'styled-components/macro'
import NodeButton from './NodeButton'

const Tree = ({ data = [] }) => {
  return (
    <>
      <UL>
        {data.map((tree) => (
          <TreeNode node={tree} />
        ))}
      </UL>
    </>
  )
}
const TreeNode = ({ node }) => {
  const [isChildVisible, setIsChildVisible] = useState(false)

  const hasChild = node.children ? true : false

  return (
    <LI>
      <div
        style={{ display: 'flex' }}
        onClick={(e) => setIsChildVisible((isVisible) => !isVisible)}
      >
        <NodeButton
          title={node.title}
          childVisible={isChildVisible}
          hasChild={hasChild}
        />
      </div>

      {hasChild && isChildVisible && (
        <div
          style={{
            borderLeft: isChildVisible ? '4px solid #E9CDCD' : ''
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
`
const LI = styled.li`
  padding: 0.75rem 1.25rem;
`

export default Tree
