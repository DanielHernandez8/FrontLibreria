import { useEffect, useState } from "react";
import {getPersons, savePersonName } from "./services/api";
import Libro from "./components/libro";
const App = () => {
 const [libro, setLibro] = useState();
 const [libros , setLibros] = useState();

 const handleClick =async () => {
  await savePersonName(libro);
  setLibro ({"titulo":"","precio":""});
  getLibros();
 }

const getLibros = () =>{
  getPersons().then(data=>{
    console.log('111',data)
    setLibros(data.data)    
  })
}


 useEffect(()=>{
 getLibros();
},[])




  return (
    <>
    <table border="1px">
      
    <thead>
    <tr>
            <th>ID</th>
            <th>Titulo</th>
            <th>Precio</th>
            <th>Opciones</th>
    </tr>
    </thead>
      {libros?.map((libro)=>(
      <Libro key={libro.id} book={libro} queryData={getLibros}/>
      ))}
    
    <tbody>
    <tr>
          <td>
            
          </td>
          <td>
        <input type="text" value={libro?.titulo} onChange={e => setLibro({...libro,"titulo":e.target.value})} placeholder="titulo"/>
        </td>
        <td>
        <input type="text" value={libro?.precio} onChange={e => setLibro({...libro,"precio":e.target.value})} placeholder="precio"/>
        </td>

        <td>
        <button onClick={handleClick}>Añadir</button>
        </td>
        </tr>
        </tbody>
</table>
    </>
  );
};

export default App;