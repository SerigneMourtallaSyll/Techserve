import React from 'react'

function IconService({img, title}) {
  return (
    <div className='d-flex flex-wrap col-md-6 py-3'>
        <div className='icon mx-3'>
            <img src={img} alt='img'/>
        </div>
        <div className='description text-start'>
            <h5>{title}</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
            <p>Quisque dignissim, surpis so connectetur somper...</p>
            <p><a href='#discovery' className=''>ReadMore...</a></p>
        </div>
    </div>
  )
}

export default IconService