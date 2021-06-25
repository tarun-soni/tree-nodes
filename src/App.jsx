import styled from 'styled-components/macro'
import Tree from './components/Tree'
import { treeData } from './treeData'
import { useState } from 'react'

function App() {
  const [data, setData] = useState(treeData)

  const handleOnDragEnd = (result) => {
    if (!result.destination) return
    // const items = Array.from(data)
    // const [reorderedItem] = items.splice(result.source.index, 1)
    // const sourceIndex = result.source.index
    // const destinationIndex = result.destination.index
  }
  return (
    <Container>
      <h2>Tree Nodes</h2>
      <Tree data={data} setData={setData} handleOnDragEnd={handleOnDragEnd} />
    </Container>
  )
}

const Container = styled.div`
  margin: 2rem 4rem;
  font-family: 'Roboto', sans-serif;
`

export default App
