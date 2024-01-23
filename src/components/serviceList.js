import React from 'react';
import { servicesData, categoriesData } from '../mock';
import Card from '../components/Card'
import './styles/serviceList.css'

const ServiceList = () => {
  const handleChangeCategory = (category) => {console.log(category)}
    return (
        <div className='serviceList'>
          <select onChange={e=>handleChangeCategory(e.target.value)}><option value=''>Filtre por categoria</option>{categoriesData.map(categoria=>(<option key={categoria.id} value={categoria.slug}>{categoria.name}</option>))}</select>
        <div className='servicesContainer'>  {servicesData.map(service=>(<Card
      service={service}
      key={service.id}
    />))}
        </div>
            </div>
   );
};

export default ServiceList;
