import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetailContainer';
import { Navbar } from './componentes/navbar/Navbar'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>

      <Navbar /> 
        <Routes>
          <Route path='/' element={ <ItemListContainer/> } />
          <Route path='/productos/:categoryId' element={ <ItemListContainer/> } />
          <Route path='/detail/:itemId' element={ <ItemDetailContainer/> } />
          <Route path='*' element={ <Navigate to='/' /> } />
        </Routes>

    </BrowserRouter>
  );
}

export default App;