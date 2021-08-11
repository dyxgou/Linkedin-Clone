import './App.css';
import Header from "./components/JS/Header"
import Sitebar from './components/JS/Sitebar';
import Feed from './components/JS/Feed';
function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* App Body */}

        <div className="app__body">
          {/* Sitebar */}
          <Sitebar name="! ImDiego" email="diego5614yt@gmail.com" banner="https://cdn.discordapp.com/attachments/804331682923937875/874664407785939004/ShorttermShockingGossamerwingedbutterfly-max-1mb.gif" avatar="https://cdn.discordapp.com/avatars/852671849145172009/28ea70b271628f1492d2f672d7bc2afb.webp?size=1024"/>
          {/* Feed*/}
          <Feed />
          {/* Widgets */}
        </div>
        
    </div>
  );
}

export default App;
