import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
      <Navbar title="TextUtils" about = "About Us" />
      <Textform heading="Enter text here"/>
    </>
  )
}

export default App;
