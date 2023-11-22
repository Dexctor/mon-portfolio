import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage'
//import CardContainer from './components/CardContainer';


function App() {
  return (
    <div id="content">
            <Header />
            <main className="main fillHeight counter">
              <HomePage/>   
            </main>
        </div>
  );
}

export default App;
