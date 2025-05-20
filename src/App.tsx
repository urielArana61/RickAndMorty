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
        <Card/>
    </div>
    </>
  )
}

export default App
