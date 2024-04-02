import React,  {useState , useEffect} from 'react'
import Card from './card';
import rmServiceInstance from '../../services/RM.service';


const Cards = () => {
  
  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {
    rmServiceInstance.getCharacters()
      .then((data) => setMascotas((prevMascotas) => [...prevMascotas, ...data.results]))
      .catch((error) => console.log(error));
  }, [mascotas]);


  const cardsList = mascotas.map((m) => <Card mascota={m} key={m.id} />)


  return (
    <div>
      <div className="album py-5 bg-body-tertiary">
    <div className="container">

    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {cardsList}
    </div>
  </div>
</div>
 
    </div>
  )
}

export default Cards;
