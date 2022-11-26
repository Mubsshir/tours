import { useEffect, useState } from 'react';
import './App.css';
import TourCard from './components/TourCard';

const url = "https://course-api.com/react-tours-project";
const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, SetIsLoading] = useState(null);
  const fetchTours = async () => {
    try {
      SetIsLoading(true);
      const res = await fetch(url);
      if (!res.ok) {
        // do something
        throw new Error("Somthing went wrong");
      }
      const data = await res.json();
      setTours(data);
      SetIsLoading(false);
    } catch (ex) {
      console.log(ex.message);
    }
  }
  const RemoveTour = (id) => {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }
  const tourLists = tours.map(
    tour =>
      <TourCard
        key={tour.id}
        id={tour.id}
        img={tour.image}
        title={tour.name}
        description={tour.info}
        price={tour.price}
        clickHandler={RemoveTour}
      />);

  useEffect(() => {
    fetchTours();
  }, []);
  let titleText = "";
  if (!loading) {
    titleText = tourLists.length === 0 ? "No tour left" : "Our Tours";
  }
  else {
    titleText = loading ? "Tours Loading" : "Our Tours";
  }
  return (
    <div className='App'>
      <h3 className='Title'>{titleText}</h3>
      {tourLists.length !== 0 || loading ? tourLists : <button className='ref-btn' onClick={fetchTours}>Refresh</button>}
    </div>
  )
}

export default App