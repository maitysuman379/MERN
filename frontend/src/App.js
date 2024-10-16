// import logo from './logo.svg';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './componants/Header';
import Footer from './componants/Footer';

function App() {
  return ( 
    <>
      <Header/>
      <main className='min-h-[calc(100vh-120px)]'><Outlet/></main>
      <Footer/>
    </>
  );
}

export default App;
