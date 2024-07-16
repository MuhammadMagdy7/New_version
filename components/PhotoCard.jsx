import Image from 'next/image'
import React from 'react'

const PhotoCard = ({url, onClick}) => {
  return (
    <div >
        <div  style={{border: "2px solid red", padding: 5}}>
        <Image src={url} width={100} alt='image' height={60} priority />
        <button type='button' className='mx-auto btn' onClick={onClick}  > Delete</button>

        </div>
    </div>
  )
}

export default PhotoCard