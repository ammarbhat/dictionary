import React from 'react'

function SearchR(props) {
    
    

    return (
       <>
       <div className='text-center text-4xl p-10'>{props.name}</div>
       <div className='p-6 bg-yellow-200 rounded-xl text-gray-800 mx-10 sm:mx-20'>
           <div className='text-xl '>Meanings</div>
           <div className='p-2'>{props.def}</div>
       </div>
       </>
    )
}

export default SearchR