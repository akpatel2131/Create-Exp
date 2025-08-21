import ClientListTable from "./components/ClientListTable";
import { UserProvider } from "./context/UserContext";
function App() {
  return (
    <UserProvider>
      <ClientListTable />
    </UserProvider>
  );
}

export default App;
