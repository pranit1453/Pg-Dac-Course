import PswCallBack from "./PswGenerator/PswCallBack";
import ErrorBoundary from "./PswGenerator/ErrorBoundary";
function App() {
  return (
 
    <>
    <ErrorBoundary>
    <PswCallBack></PswCallBack>
    </ErrorBoundary>
    </>
  );
}

export default App;
