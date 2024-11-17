import React from 'react'

const Contact = () => {
  return (
    <div className='lg:px-36 px-14 my-5'>
      <h1 className='text-5xl underline'>Contact <span className='text-red-600'>Us</span>!</h1>
      <p className='my-12 flex flex-col gap-3'>
        <p>
          We're here to help! If you have any questions, need support, or want to learn more about our products, feel free to reach out to us. Our team is dedicated to providing prompt and friendly assistance to ensure you have the best experience possible. You can contact us via email, phone. We look forward to hearing from you and helping you achieve your goals with our plugins and themes.
        </p>
        <p>Email: <span className='text-red-600'>wvantage@gmail.com</span></p>
        <p>Contact: <span className='text-red-600'>9800000000</span></p>
      </p>
    </div>
  )
}

export default Contact