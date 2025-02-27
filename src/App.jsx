import ItemList from "./components/ItemList";
import { useState, useEffect } from "react";
import axios from "axios";

// use the following link to get the data
// `/doors` will give you all the doors.
const API_URI = `http://localhost:8000/doors`;

function App() {
  // Get the existing item from the server
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URI);
        setItems(response.data);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URI}/${id}`);
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleEdit = async (item) => {
    try {
      const response = await axios.put(`${API_URI}/${item.id}`, item);
      setItems((prevItems) =>
        prevItems.map((prevItem) =>
          prevItem.id === item.id ? { ...prevItem, ...response.data } : prevItem
        )
      );
    } catch (error) {
      console.error('Error editing item:', error);
    }
  };

  return <ItemList items={items} onDelete={handleDelete} onEdit={handleEdit} />;
}

export default App;
