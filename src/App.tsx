import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Card from './components/card';

function App() {


  return (
    <>
    <div className="container-fluid vh-100">
      <div className="row">
        <Header/>
        <Card/>
      </div>
      <div className='col-sm-12'>
        <Card/>
      </div>
    </div>
     

    </>
  )
}

export default App
