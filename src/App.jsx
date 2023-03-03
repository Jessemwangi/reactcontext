
import './App.css';
import CompA from './CompA';
import { GlobalContextProvider } from './Context/Context';
 import { UserContextProvider } from './Context/UserContext';

const info = "info will be here"
function App() {
  return (
   <GlobalContextProvider>

<UserContextProvider>

    <div className="App">
      <h1>hell0 context</h1>
      <CompA info={info}></CompA>
    </div>
</UserContextProvider>
   </GlobalContextProvider>
     
  );
}

export default App;
