import React from 'react'
import './Contacts.scss'

const Contacts = () => {
  const onClickHandler = () => {

  }
  return (
    <div className='row'>
      <iframe className='col-lg-6' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.896330628285!2d105.78362121073249!3d21.03683368053369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab0ee01d7453%3A0x703ca517bf007ff6!2zMTI4IFh1w6JuIFRo4buneSwgROG7i2NoIFbhu41uZyBI4bqtdSwgQ-G6p3UgR2nhuqV5LCBIw6AgTuG7mWkgMTAwMDAwLCBWaWV0bmFt!5e0!3m2!1sen!2sin!4v1719307424852!5m2!1sen!2sin"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div className='col-lg-6'>
        <h1>Contact Us</h1>
        <p>As you might expect of a company that began as a high-end interiors contractor, we pay strict attention.</p>
        <hr />
        <p className='address_store'>Only 1 store at : <a href="https://maps.app.goo.gl/7juaqUN1ZEASX3nc6" target="_blank">
          <span onClick={onClickHandler}> 128 Xuan Thuy, Dich Vong Hau Ward, Cau Giay District, HaNoi,VietNam.</span>
        </a></p>
        <p>Open hour : 9AM to 9PM. (GPT- 8)</p>
        <hr />
        <p>Email : contact@gmail.com</p>
        <p>Phone Number : 0981626629</p>
        <hr />
        <p>If you have any question please feel free to contact to our store.</p>
      </div>

    </div>
  )
}

export default Contacts