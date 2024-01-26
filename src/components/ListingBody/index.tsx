import './styles.css';
import { useContext, useEffect, useState } from 'react';
import Filter from '../Filter';
import Listing from '../Listing';
import * as productService from '../../services/product-service';
import { ProductDTO } from '../../models/products';
import { ContextCounterProduct } from '../../utils/context-product';

type FormData = {
  priceMin: number,
  priceMax: number
}

export default function ListingBody(){

  const [formData, setFormData] = useState<FormData>({
     priceMin: 0,
     priceMax: Number.MAX_VALUE
  })

  const { setContextProductCount } = useContext(ContextCounterProduct);
  
  const [products, setProducts] = useState<ProductDTO[]>();

  function OnPrices(min: number, max: number){
     setFormData({priceMin: min, priceMax: max});
  }   


  useEffect(() => {
    const list = productService.findByPrice(formData.priceMin, formData.priceMax);
    setProducts(list);
    setContextProductCount(list.length);
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