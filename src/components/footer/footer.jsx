import Link from "next/link";
import React, { useState } from "react";
import Modal from "react-modal";
import { ContactUs } from "../modelbox/ContactUs";

const Footer = () => {
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
      <footer className="md:grid grid-cols-2 bg-yellow p-4 pt-10 mt-32">
        <div>
          <p>
            For inquiries or more info, please <button onClick={openModal} className="underline">
              send me a message
            </button>
            .
          </p>
          <ul className="flex items-center gap-2 text-gray text-[12px] font-light mt-16">
            <li className="hover:underline">
              <Link href="">Privacy</Link>
            </li>
            <li className="hover:underline">
              <Link href="">Accessibility</Link>
            </li>
            <li className="hover:underline">
              <Link href="">Colophon</Link>
            </li>
            <li>©2024 All rights reserved</li>
          </ul>
        </div>
        <div className=" md:mt-0 flex justify-end items-start">
          <ul className="flex items-end gap-3 text-sx">
          <li className="hover:underline capitalize">
              <Link href="">Email</Link>
            </li>
            <li className="hover:underline capitalize">
              <Link href="">Instagram</Link>
            </li>
            <li className="hover:underline capitalize">
              <Link href="">Join List</Link>
            </li>
          </ul>
        </div>
      </footer>

      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          id="modelbox"
        >
          <ContactUs closeModal={closeModal}/>
        </Modal>
      </div>
    </>
  );
};

export default Footer;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
