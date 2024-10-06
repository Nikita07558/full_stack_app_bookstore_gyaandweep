import React from 'react'

function Cards({item}) {
  return (
    <>
    <div className="mt-4 my-3 p-3">
     <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white ">
  <figure>
    <img 
      src="https://pngimg.com/d/book_PNG2111.png" className='w-70 h-40'
      alt="Book" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions flex justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="cursor-pointer hover:bg-pink-500 hover:text-white px-2 py-1 rounded-full border-[2px] duration-200">Buy Now</div>
    </div>
  </div>
</div> 
    </div>
    </>
  )
}

export default Cards
