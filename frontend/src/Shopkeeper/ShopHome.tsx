import React from 'react'
import { Link } from 'react-router-dom'
const ShopHome = () => {
  return (
    <div>
       Hey shp owner create your shop in our auracuts platform
       <Link to='/profilebuilder' className='text-[blue]'>
           click Here
       </Link>
    </div>
  )
}

export default ShopHome
