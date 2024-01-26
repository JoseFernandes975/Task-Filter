import { useState } from 'react';
import './styles.css'

type FormData = {
    priceMin?: number;
    priceMax?: number;
}

type OnFilter = {
    onFilter: Function;
}

export default function Filter({onFilter}: OnFilter) {

   const [formData, setFormData] = useState<FormData>({
      priceMin: undefined,
      priceMax: undefined
   });

   function handleChangePrice(event: any){
      const value = event.target.value;
      const name = event.target.name;
      setFormData({...formData, [name]: value});
   }

   function handleSubmit(event: any){
     event.preventDefault();
     onFilter(formData.priceMin || 0, formData.priceMax || Number.MAX_VALUE);
   }


    return(
     <div className="ds-filter-container ds-mb20">
        <form onSubmit={handleSubmit}>
         <input name='priceMin' value={formData.priceMin || ""} className='ds-mb20' type="text" onChange={handleChangePrice} placeholder='Preço mínimo' />
         <input name='priceMax' value={formData.priceMax || ""} className='ds-mb20' type="text" onChange={handleChangePrice} placeholder='Preço máximo'/>
         <button type='submit' onSubmit={handleSubmit}>Filtrar</button>
        </form>

     </div>
    );
}