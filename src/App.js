import './App.css';
import Mobile from './components/Mobile';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Window from './components/Window';

function App() {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ width: '100vw' }}>
          <Topbar />
          <div style={{display: 'flex'}}>
            <Window />
            <Mobile />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
