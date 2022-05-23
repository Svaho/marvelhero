import React from 'react'
import LikoviItems from './LikoviItems'
import Loading from './Loading'

const ListaLikova = ({items, isLoading}) => {
  return isLoading ? (<Loading/>) : (
  <section className='contents'>
      {
          items.map(item => (
              <LikoviItems key={item.id} item={item}></LikoviItems>
          ))
      }
  </section>
  );
};

export default ListaLikova