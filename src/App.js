import logo from './logo.svg';
import './App.css';
import { Videocard } from './components/videoCard';
import { VideoCardContainer } from './containers/videoCardContainer';
import { Home } from './pages/Home';
import { Footer } from './widget/Footer';

function App() {
  return (
    <>
    <div className='container'>
       <Home/>
    </div>
    <Footer style={{margin:'0',padding:'0'}}/>
    </>
  );
}

export default App;
