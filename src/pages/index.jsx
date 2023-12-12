import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import Inquire from '@/components/inquire/inquire'
import Layout from '@/components/layout'
import Design from '@/components/work-design/design'
import { client } from '../../sanity/lib/client'
import { featurePosts } from '../../sanity/lib/queries'
import { urlForImage } from '../../sanity/lib/image'
import BlockContent from '@sanity/block-content-to-react';


var headerTitle = 'is an <u>artist</u>, <u>designer</u>, and creative producer in San Francisco.'

export default function Home({ featurePostRes }) {

  return (
    <>
      <Header title={headerTitle} />
      <Layout>
        <div className='w-full hidden mt-40 justify-end text-xl md:flex'>
          <div className='grid grid-cols-2 gap-7 w-1/2'>
            <div ><div className="text-xl mb-2 editor">
                <BlockContent blocks={featurePostRes[0].newsbox1} />
              </div></div>
            <div><div className="text-xl mb-2 editor">
                <BlockContent blocks={featurePostRes[0].newsbox2} />
              </div></div>
          </div>
        </div>
        <section className='md:mb-40 mb-20 mt-20'>
          <div className='grid grid-cols-2 justify-between gap-4 md:gap-20 gap-y-10'>
            <Design
              title={featurePostRes[0].top_works[0].title}
              tag={featurePostRes[0].top_works[0].tags}
              image={urlForImage(featurePostRes[0].top_works[0]?.image.asset._ref).width(306).url()}
              link={featurePostRes[0].top_works[0].slug.current}
              calssName="md:pb-10"
            />
            <div className='md:flex justify-end items-end col-span-2 md:col-span-1 d2'>
              <Design
                title={featurePostRes[0].top_works[1].title}
                tag={featurePostRes[0].top_works[1].tags}
                imageWidth="w-[642px]"
                image={urlForImage(featurePostRes[0]?.top_works[1]?.image.asset._ref).width(652).url()}
                link={featurePostRes[0].top_works[1].slug.current}
                calssName=""
              />
            </div>
            <div className=''>
              <Design
                title={featurePostRes[0].top_works[2].title}
                tag={featurePostRes[0].top_works[2].tags}
                image={urlForImage(featurePostRes[0].top_works[2]?.image.asset._ref).width(306).url()}
                link={featurePostRes[0].top_works[2].slug.current}
                calssName="md:pb-6"
              />
            </div>
            <div className='md:flex md:justify-end items-end'>
              <Design
                title={featurePostRes[0].top_works[3].title}
                tag={featurePostRes[0].top_works[3].tags}
                image={urlForImage(featurePostRes[0].top_works[3]?.image.asset._ref).width(306).url()}
                link={featurePostRes[0].top_works[3].slug.current}
                calssName=""
              />
            </div>
          </div>
        </section>
        <Inquire data={featurePostRes[0].homebox}  />

        <div className='flex justify-center mt-10 md:mt-20'>
          <Design
            title={featurePostRes[0].bottom_works[0].title}
            tag={featurePostRes[0].bottom_works[0].tags}
            image={urlForImage(featurePostRes[0].bottom_works[0]?.image.asset._ref).width(306).url()}
            link={featurePostRes[0].bottom_works[0].slug.current}
            calssName=""
          />
        </div>

        <div className='md:grid md:grid-cols-2 justify-between items-center gap-20 mt-20 md:mt-40'>
          <Design
            title={featurePostRes[0].bottom_works[1].title}
            tag={featurePostRes[0].bottom_works[1].tags}
            video={featurePostRes[0].bottom_works[1].video_url}
            link={featurePostRes[0].bottom_works[1].slug.current}
            calssName="md:ml-20 w-full md:w-auto"
          />
          <div className='flex mt-6 md:mt-0 md:justify-end'>
            <Design
              title={featurePostRes[0].bottom_works[2].title}
              tag={featurePostRes[0].bottom_works[2].tags}
              image={urlForImage(featurePostRes[0].bottom_works[2]?.image.asset._ref).width(306).url()}
              link={featurePostRes[0].bottom_works[2].slug.current}
              calssName="md:mr-20"
            />
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  )
}




export async function getServerSideProps() {
  const featurePostRes = await client.fetch(featurePosts);
  return {
    props: {
      featurePostRes,
      preview: true
    }
  };
}