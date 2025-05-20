import './App.css'
import Header from './components/header';
import Card from './components/card';

function App() {


  return (
    <>
    <div className="container-fluid bg-dark">
      <div className="row">
        <Header/>
      </div>
      <div className='row'>
        <Card/>
      </div>
    </div>
    </>
  )
}

export default App
