// import logo from './logo.svg';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './componants/Header';
import Footer from './componants/Footer';

function App() {
  return ( 
    <>
      <Header/>
      <main><Outlet/></main>
      <Footer/>
    </>
  );
}

export default App;
