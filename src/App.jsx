
import './App.css'
import Footer from './components/Footer'
import Overview from './components/Overview'
import Sidebar from './components/Sidebar'
import Table from './components/Table'
import Topbar from './components/Topbar'
import Transaction from './components/Transaction'

function App() {

  return (
    <div className='flex'>
      <Sidebar />

      <div className='flex flex-col flex-grow ml-56 p-5'>
        <Topbar />
        <Overview />
        <div className='flex flex-col gap-6 ml-7'>
          <Transaction />
          <Table />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
