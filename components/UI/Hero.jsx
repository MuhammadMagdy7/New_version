

import { ButtonBase, ButtonPill } from '../Layout/Button'
 

const Hero = () => {

return (
<div data-aos="fade-down">


          <div className="text-center bg-white py-16">
      <h1 className="text-4xl font-bold text-gray-900">
      Welcome to  <span className="text-secondaryColor">Version AVI</span>
      </h1>
      <p className="text-paragraphColor  mt-4">
       where we bring your events to life with cutting-edge audio-visual solutions.
      </p>

      <div className='mt-8 space-x-5'>
        <ButtonBase text="About us" link='/about' />
        <ButtonPill text="Our services" link='/services' />
      </div>
      <div className="mt-12">
        <div

          className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] max-w-[100vh] h-[50vh] md:container md:w-[50vw] md:h-[50vh] bg-center "

        ></div>
      </div>
    </div>
    </div>
  )
}

export default Hero