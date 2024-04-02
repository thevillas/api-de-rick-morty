import React, {useState, useEffect} from 'react'
import { Link , useParams , useLocation } from 'react-router-dom'
import rmServiceInstance from '../../services/RM.service'



function Details() {


    const [mascota, setMascota] = useState({})
    const {id} = useParams()
    const {pathname} = useLocation();


    useEffect(() => {
        console.log(pathname)
        rmServiceInstance.getCharacterById(id)
        .then((data) => setMascota(data))
    }, [id])



  return (
    <div>
      <div className="col">
        <div className="card shadow-sm">
          <img className="bd-placeholder-img card-img-top" width="800%" height="325"  src={mascota.image} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"/>
            
            
          
          <h3>{mascota.name}</h3>
          
          <div className="card-body">
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <Link to="/" type="button" className="btn btn-sm btn-outline-secondary">volver</Link>
                
              </div>
              <small className="text-body-secondary">9 mins</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details