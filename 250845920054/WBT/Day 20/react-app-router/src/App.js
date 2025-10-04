import IncrementCallBack from "./CallBack/IncrementCallBack";
import { MyProvider } from "./Context/Context";
import Profile from "./Context/Profile";
import Linking from "./WebPage/Linking";
function App() {
  return (
    <div className="App">
      <IncrementCallBack></IncrementCallBack>
      <MyProvider>
        <Profile></Profile>
      </MyProvider>
      <Linking></Linking>
    </div>
  );
}

export default App;
