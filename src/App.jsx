import Tree from './components/Tree'
import { treeData } from './treeData'
function App() {
  return (
    <div style={{ margin: '2rem 4rem' }}>
      <h2>Tree Nodes</h2>
      <Tree data={treeData} />
    </div>
  )
}

export default App

// const data = {
//   id: '1',
//   title: 'Node 1',
//   children: [
//     {
//       id: '1.1',
//       title: 'Node 1.1',
//       children [],
//     },
//     {
//       id: '1.2',
//       title: 'Node 1.2',
//       children []
//     },
//   ]
//   // And so on...
// }
