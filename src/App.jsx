import styled from 'styled-components/macro'
import Tree from './components/Tree'
import { treeData } from './treeData'
function App() {
  return (
    <Container>
      <h2>Tree Nodes</h2>
      <Tree data={treeData} />
    </Container>
  )
}

const Container = styled.div`
  margin: 2rem 4rem;
  font-family: 'Roboto', sans-serif;
`

export default App
