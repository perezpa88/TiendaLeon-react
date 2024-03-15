
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/navbar/NavBar"
import ItemListContainer from "./components/itemlistcontainer/ItemListContainer"
function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting = "Tierra de Leones"/>


    </div>
  );
}

export default App;
