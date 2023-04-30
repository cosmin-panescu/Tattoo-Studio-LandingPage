import React from 'react';
// contact data
import { contactData } from '../data';
// framer motion
import { motion } from 'framer-motion';
// animation
import { fadeIn } from '../variants';

const Contact = () => {
  // destructure contact data
  const { title, info, form } = contactData;

  return (
    <section className='section'>
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row gap-y-16'>
          {/* text */}
          <motion.div
            variants={fadeIn('right')}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.4 }}
            className='flex-1'
          >
            {/* title */}
            <h2 className='h2 max-w-[490px]'>{title}</h2>
            {/* information */}
            <div className='flex flex-col xl:flex-row gap-x-5 gap-y-16 xl:gap-y-0'>
              {info.map((item, i) => {
                // destructure data from item
                const { title, subtitle, address, phone, email, link } = item;

                return (
                  <div key={i}>
                    {/* title */}
                    <div className='mb-3 text-xl font-medium uppercase font-primary'>{title}</div>
                    {/* subtitle */}
                    <div className='mb-6 text-[#333] leading-[187%] tracking-[0.02em]'>{subtitle}</div>
                    {/* contact */}
                    <div className='flex flex-col mb-8 gap-y-3'>
                      <div className='flex items-center gap-[10px]'>
                        <div>{address.icon}</div>
                        <div className='font-medium'>{address.name}</div>
                      </div>
                      <div className='flex items-center gap-[10px]'>
                        <div>{phone.icon}</div>
                        <div className='font-medium'>{phone.number}</div>
                      </div>
                      <div className='flex items-center gap-[10px]'>
                        <div>{email.icon}</div>
                        <div className='font-medium'>{email.address}</div>
                      </div>
                    </div>
                    {/* get location link */}
                    <a className='font-medium border-b border-dark pb-[5px]' href="#">{link}</a>
                  </div>
                )
              })}
            </div>
          </motion.div>
          {/* form */}
          <motion.div
            variants={fadeIn('left')}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.4 }}
            className="flex-1 xl:pl-[40px] flex justify-center items-center"
          >
            <form className="flex flex-col w-full gap-y-10">
              {/* fields */}
              <input
                type="text"
                placeholder={form.name}
                className='border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4'
              />
              <input
                type="text"
                placeholder={form.email}
                className='border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4'
              />
              <input
                type="text"
                placeholder={form.message}
                className='border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4'
              />
              {/* send button */}
              <button className='self-start btn btn-sm btn-dark'>
                {form.btnText}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default Contact;
