import styled from 'styled-components/macro'
import Tree from './components/Tree'
import { treeData } from './treeData'
import { DragDropContext } from 'react-beautiful-dnd'
import { useState } from 'react'

function App() {
  const [data, setData] = useState(treeData)

  const handleOnDragEnd = (result) => {
    console.log('result :>> ', result)
    console.log(`data`, data)
    if (!result.destination) return
    const items = Array.from(data)
    const newData = [...data]
    const [reorderedItem] = items.splice(result.source.index, 1)
    console.log(`reorderedItem`, reorderedItem)
    // items.splice(result.destination.index, 0, reorderedItem)
    // setData(items)
    const sourceIndex = result.source.index

    const destinationIndex = result.destination.index

    // console.log(`items`, items)
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
