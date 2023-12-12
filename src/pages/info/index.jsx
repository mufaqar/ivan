import Skill from '@/components/cv/Skill';
import CVSections from '@/components/cv/CVSections';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import Layout from '@/components/layout';
import Link from 'next/link';
import React, { useState } from 'react';
import { SlArrowDown } from 'react-icons/sl';
import { SlArrowUp } from 'react-icons/sl';
import { client } from '../../../sanity/lib/client';
import { CV } from '../../../sanity/lib/queries';
import BlockContent from '@sanity/block-content-to-react';

const Htitle =
  'Ivan Iannoli lives and works in SF* and can be reached at 555-555-5555, <u>email@iannoli.com</u>, <u>@ivaniannoli</u>';

const Info = ({ allInfo }) => {
  const [openCV, setOpenCV] = useState(false);
  const [expand, setExpand] = useState(true);
  const { Features, cv, cvbio, education, cvsections, info, title } = allInfo[0];
  return (
    <div className="bg-yellow">
      <Header title={Htitle} />
      <Layout>
        <section className="py-28 mt-16 border-b">
          <h2 className="font-pstime text-4xl md:text-5xl lg:text-6xl">
            {title}
          </h2>
      
          <h6 className="md:text-2xl mt-12">{info} </h6>
        </section>
        <section>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 py-10 md:py-20 border-b font-light">
            <button className="flex font-semibold items-start gap-2 text-2xl col-span-2 md:col-span-1">
              <span className="flex items-center gap-2">
                CV 
              </span>
            </button>
            <div className="col-span-2 md:col-span-1">
              <div className="text-xl mb-2 editor">
                <BlockContent blocks={cvbio} />
              </div>
              <Link
                href={cv.asset.url}
                target="_blank"
                className="text-lg hover:text-gray"
              >
                (Download CV)
              </Link>
              <h4 className="mt-10 text-xl font-semibold">EDUCATION</h4>
              <ul className="mt-5 text-lg">
                {education?.map((item, idx) => (
                  <li key={idx}>{item.education_info}</li>
                ))}
              </ul>
              <button
                className="flex items-center mt-10 font-medium text-lg gap-2 uppercase"
                onClick={() => {
                  setOpenCV(!openCV);
                }}
              >
                Expand to see complete cv{' '}
                {openCV ? <SlArrowUp /> : <SlArrowDown />}
              </button>

              <div className="text-xl mb-2 editor">

              { openCV &&  cvsections.map((f, idx) => <CVSections data={f} key={idx} />)}

              
              </div>

             
             
            </div>
          </div>
          { Features.map((f, idx) => <Skill data={f} key={idx} />)}
        </section>
      </Layout>
      <Footer />
    </div>
  );
};

export default Info;

export async function getServerSideProps() {
  const allInfo = await client.fetch(CV);
  return {
    props: {
      allInfo,
      preview: true,
    },
  };
}
