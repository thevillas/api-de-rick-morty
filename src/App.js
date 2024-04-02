import './App.css';
import Footer from './components/public/footer';
import Main from './components/public/main';
import Navbar from './components/public/navbar';
import { Routes, Route } from 'react-router-dom';
import UserForm from './components/public/userForm';
import Details from './components/public/details';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/user-form" element={<UserForm />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;