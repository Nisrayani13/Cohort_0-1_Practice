import './App.css'
import { Overview } from './components/Overview'
import { Table } from './components/Table'
import { TableTop } from './components/TableTop'
import { Transactions } from './components/Transactions'
import { Header } from './components/Header'
import { SideBar } from './components/SideBar'

function App() {

  return (
      <div className="app-container">
          <SideBar availableCredits={"222.10"}></SideBar>
          <div className="main-content">
              <Header></Header>
              <Overview></Overview>
              <Transactions></Transactions>
              <TableTop></TableTop>
              <Table></Table>
          </div>
      </div>
  )
}

export default App
