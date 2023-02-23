import './App.css';
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer';
import { Navbar } from './componentes/navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar /> 

      <ItemListContainer greeting="Bienvenidos"/>
    </div>
  );
}

export default App;
