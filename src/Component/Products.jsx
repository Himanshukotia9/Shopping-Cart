import React from 'react'
import Card from './Card'
import list from '../../public/Content/List'

export default function Products() {
  return (
    <div className='flex flex-wrap gap-12 items-center justify-around m-5'>
      {list.map((item) =>{
        return <Card item={item} key={item.id}/>
      })}
    </div>
  )
}
