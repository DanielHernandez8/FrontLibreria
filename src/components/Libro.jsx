import { useState } from "react";
import { deletePerson, updatePerson } from "../services/api";

const Libro = ({book,queryData}) => {
const[libro, setLibro] = useState(book);
// const [titulo, setTitulo] = useState(book.titulo);
// const [precio, setPrecio] = useState(book.precio);

const handleClick = () => {
  updatePerson(libro);
}

const handleBorrar = async () =>{
  await deletePerson(book.id);
  queryData()
}

  return (
    <tbody>
    <tr>
      <td>

      </td>
      <td>
      <input type="text" value={libro.titulo} onChange={e=>setLibro({...libro,"titulo":e.target.value})}placeholder="Titulo" />
      </td>
      <td>
      <input type="text" value={libro.precio} onChange={e=>setLibro({...libro,"precio":e.target.value})}placeholder="Titulo" />
      </td>
      <td>
      <button onClick={handleClick}>Modificar</button>
      
      <button onClick={handleBorrar}>Baja</button>
      </td>
    </tr>
    </tbody>

  );
};

export default Libro;