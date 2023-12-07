import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import PageHeader from '@/components/header/page-header'
import Layout from '@/components/layout'
import Image from 'next/image'
import React, { useState } from 'react'
import { client } from '../../../sanity/lib/client'
import { singleWork } from '../../../sanity/lib/queries'
import { urlForImage } from '../../../sanity/lib/image'
import Modal from "react-modal";
import WorkDetails from '@/components/modelbox/work_details'
import BlockContent from "@sanity/block-content-to-react";


const Category = ({ work }) => {
     const sortedData = work.portfolio.slice().sort((a, b) => b.projectyear - a.projectyear);
     const [modalIsOpen, setIsOpen] = React.useState(false);
     const [data, setData] = useState()

     function openModal() {
          setIsOpen(true);
          document.body.style.overflow = 'hidden';
     }
     function closeModal() {
          setIsOpen(false);
          document.body.style.overflow = 'auto';
     }
     Modal.setAppElement('*');

     return (
          <>
               <Header />
               <Layout>
                    <PageHeader title={work?.title} subTitle={work?.title} />
                    <div className='mt-10 flex flex-col gap-10 md:gap-20'>
                         {
                              sortedData?.map((item, idx) => (
                                   <div key={idx}>
                                        <div className='text-xl mb-7 flex gap-1'>
                                             <BlockContent blocks={item?.detail} />
                                        </div>
                                        <div className={`grid gap-3 md:gap-5 grid-cols-2 ${item?.imageslist.length > 2 ? item?.imageslist.length > 4 ? 'md:grid-cols-4' : `md:grid-cols-${item?.imageslist.length}` : 'md:grid-cols-3'}`}>
                                             {
                                                  item?.imageslist?.map((img, i) => (
                                                       <div key={i} onClick={()=>{openModal(); setData(item)}} > <Image src={urlForImage(img?.image?.asset?._ref).width(306).url()} alt={item.title} width={440} height={600} className='w-full h-full object-cover' /></div>
                                                  ))
                                             }
                                        </div>
                                   </div>
                              ))
                         }
                    </div>
               </Layout>
               <Footer />
               <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    id="modelbox"
               >
                    <WorkDetails closeModal={closeModal} data={data}/>
               </Modal>
          </>
     )
}

export default Category


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

export async function getServerSideProps(pageContext) {
     const slug = pageContext.query.slug;
     const work = await client.fetch(singleWork, { slug });
     if (work?.length < 1) {
          return {
               notFound: true,
          }
     }
     return {
          props: {
               work,
               preview: true
          }
     };
}
