import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import BlockContent from '@sanity/block-content-to-react';
import { ContactUs } from '../modelbox/ContactUs';
import Modal from "react-modal";
import { customStyles } from '../footer/footer';


const Inquire = ({data}) => {

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  Modal.setAppElement('*');

  return (
    <>
    <section>
          <div className='font-pstime text-3xl md:text-4xl lg:text-6xl'>  <BlockContent blocks={data} /></div>
          <button onClick={openModal} className='hover:text-gray text-xl font-light flex items-center gap-1 w-full justify-end mt-10 md:pr-10'>INQUIRE <BsArrowRight /></button>
    </section>
    <Modal
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    style={customStyles}
    contentLabel="Example Modal"
    id="modelbox"
  >
    <ContactUs closeModal={closeModal}/>
  </Modal>
    </>
  )
}

export default Inquire