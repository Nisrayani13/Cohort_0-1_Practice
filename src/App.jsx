import './App.css'
import { Overview } from './components/Overview'
import { Table } from './components/Table'
import { TableTop } from './components/TableTop'
import { Transactions } from './components/Transactions'
import { Header } from './components/Header'

function App() {

  return (
      <div>
          <Header></Header>
          <Overview></Overview>
          <Transactions></Transactions>
          <TableTop></TableTop>
          <Table></Table>
      </div>
  )
}

export default App
