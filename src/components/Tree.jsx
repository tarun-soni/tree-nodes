import { useState } from 'react'
import NodeButton from './NodeButton'
const Tree = ({ data = [] }) => {
  return (
    <>
      <ul
        style={{
          listStyle: 'none',
          padding: '0',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {data.map((tree) => (
          <TreeNode node={tree} />
        ))}
      </ul>
    </>
  )
}
const TreeNode = ({ node }) => {
  const [isChildVisible, setIsChildVisible] = useState(false)

  const hasChild = node.children ? true : false

  return (
    <li style={{ padding: '0.75rem 1.25rem' }}>
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
          <ul
            style={{
              listStyle: 'none',
              padding: '0',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Tree data={node.children} />
          </ul>
        </div>
      )}
    </li>
  )
}

export default Tree
