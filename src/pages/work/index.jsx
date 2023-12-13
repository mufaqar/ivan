import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import PageHeader from "@/components/header/page-header";
import Layout from "@/components/layout";
import Design from "@/components/work-design/design";
import React, { useEffect, useState } from "react";
import { client } from "../../../sanity/lib/client";
import { Tags, work } from "../../../sanity/lib/queries";
import { urlForImage } from "../../../sanity/lib/image";
import Inquire from "@/components/inquire/inquire";

export const fallbackImage =
  "image-31c77982dca566e6b1da5d2f5a0059a226764d20-1665x2048-png";

const Work = ({ allWorks, allTags }) => {
  const [tag, setTag] = useState("");
  const [works, setWorks] = useState(allWorks);

  useEffect(() => {
    if (tag) {
      const filter = allWorks.filter((f) =>
        f.tags.some((t) => t.slug.current === tag)
      );
      setWorks(filter);
    }
  }, [tag]);

  return (
    <>
      <Header title="Ivan Iannoli" />
      <Layout>
        <PageHeader
          title="All Work"
          subTitle=""
        />
        <ul className="flex items-center gap-3 font-light flex-wrap  xl:container mx-auto">
          <li
            className="text-gray hover:cursor-pointer hover:text-main uppercase"
            onClick={() => setWorks(allWorks)}
          >
            All
          </li>
          {allTags.map((f, id) => (
            <li
              key={id}
              className="text-gray hover:cursor-pointer hover:text-main uppercase"
              onClick={() => setTag(f.slug.current)}
            >
              {f.name}
            </li>
          ))}
        </ul>
        <div className="mt-10 grid md:grid-cols-3 gap-4 md:gap-y-32 md:gap-x-8 xl:container mx-auto">
          {works.map((w, id) => {
            var img = w.image?.asset?._ref || fallbackImage;
            return (
              <Design
                key={id}
                title={w.title}
                tag={w.tags}
                image={urlForImage(img).width(306).url()}
                link={w.slug.current}
                id={id}
                calssName={id === 4 && "col-span-2"}
              />
            );
          })}
          {works.length <= 0 && <p>Result Not Found!</p>}
        </div>

        {/* <section className='max-w-[800px] mx-auto flex flex-col justify-end md:mt-60 mt-24 md:mb-40'>
                         <h2 className='text-4xl sm:text-5xl text-center md:text-6xl font-pstime'>Small blurb or pull quote etc. here</h2>
                         <Link href="#" className='font-pstime hover:text-gray uppercase text-2xl items-center gap-1 inline-flex justify-end mt-10 md:pr-10'>Read More <BsArrowRight /></Link>
                    </section> */}
        <div className="mt-40">
          <Inquire />
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default Work;

export async function getServerSideProps() {
  const allWorks = await client.fetch(work);
  const allTags = await client.fetch(Tags);

  return {
    props: {
      allWorks,
      allTags,
      preview: true,
    },
  };
}
