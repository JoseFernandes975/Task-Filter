import './styles.css';
import { useEffect, useState } from 'react';
import Filter from '../Filter';
import Listing from '../Listing';
import * as productService from '../../services/product-service';
import { ProductDTO } from '../../models/products';

type FormData = {
  priceMin: number,
  priceMax: number
}

export default function ListingBody(){

  const [formData, setFormData] = useState<FormData>({
     priceMin: 0,
     priceMax: Number.MAX_VALUE
  })
  
  const [products, setProducts] = useState<ProductDTO[]>();

  function OnPrices(min: number, max: number){
     setFormData({priceMin: min, priceMax: max});
  }   


  useEffect(() => {
   setProducts(productService.findByPrice(formData.priceMin, formData.priceMax));
  }, [formData.priceMin, formData.priceMax]);

    return(
     <main>
        <section id='ds-listing-body-section' className='ds-container'>
          <Filter onFilter={OnPrices} />

          <Listing products={products} />
        </section>
     </main>
    );
}