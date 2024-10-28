// import logo from './logo.svg';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './componants/Header';
import Footer from './componants/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return ( 
    <>
      <ToastContainer />
      <Header/>
      <main className='min-h-[calc(100vh-120px)]'><Outlet/></main>
      <Footer/>
    </>
  );
}

export default App;
