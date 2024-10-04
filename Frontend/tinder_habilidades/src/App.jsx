import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { UserCard } from './components/UserCard';

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/users');
      
      // Verifica si la respuesta es exitosa
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json(); // Transforma la respuesta en JSON
      setData(data); // Asigna los datos a tu estado
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  useEffect(() => {
    fetchData(); // Llama a fetchData cuando el componente se monta
  }, []); // El segundo argumento vacío significa que se ejecutará una vez al montar el componente

  console.log(data); // Muestra los datos en la consola

  return (
    <>
      {data.map((user) => (
        <UserCard key={user.id} user={user} /> // Pasa cada usuario como prop
      ))}
    </>
  );
}

export default App;
