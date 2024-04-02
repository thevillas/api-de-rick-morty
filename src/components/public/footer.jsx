import React , { useState} from 'react'

function Footer() {
  
  const [clicks , setclicks] = useState(0);
  
  const year = new Date().getFullYear();
  const companyName = "Company, Inc";
  
  
  
  
  return (
    <div>
      <div classname="container">
  <footer classname="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p classname="col-md-4 mb-0 text-body-secondary">&copy; {year} {companyName}</p>


    <ul classname="nav col-md-4 justify-content-end">
      <li classname="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
      <li classname="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
      <li classname="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
      <li classname="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
      <li classname="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
    </ul>
  </footer>
</div>
    </div>
  )
}

export default Footer
