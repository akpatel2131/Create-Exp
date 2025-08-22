import ClientDashboard from "./components/ClientDashboard";
import { UserProvider } from "./context/UserContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <UserProvider>
      <ClientDashboard />
      <ToastContainer
        closeButton={false}
        closeOnClick
      />
    </UserProvider>
  );
}

export default App;
