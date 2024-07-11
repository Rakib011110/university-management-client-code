import Mainlayouts from "./components/layouts/Mainlayouts";
import ProtectedRoute from "./components/layouts/ProtectedRoute";

function App() {
  return (
    <>
      <ProtectedRoute>
        {" "}
        <Mainlayouts />
      </ProtectedRoute>
    </>
  );
}

export default App;
