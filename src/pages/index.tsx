import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import Inquire from '@/components/inquire/inquire'
import Layout from '@/components/layout'
import Design from '@/components/work-design/design'

var headerTitle = 'Ivan Iannoli is an <u>artist</u>, <u>designer</u>, and creative producer in San Francisco.'
var designTags = ["DESIGN", "OBJECTS"]

export default function Home() {
  return (
    <>
      <Header title={headerTitle} />
      <Layout>
        <div className='w-full hidden mt-40 md:flex justify-end text-xl'>Updates and news here timely updates and <u>ability to do links, etc</u>.</div>
        <section className='md:mb-40 mb-20 mt-20'>
          <div className='grid grid-cols-2 justify-between gap-4 md:gap-20 gap-y-10'>
            <Design
              title="Clocks"
              tag={designTags}
              image='/images/image-1.jpg'
              link="/clock"
              calssName="md:pb-10"
            />
            <div className='md:flex justify-end items-end col-span-2 md:col-span-1 d2'>
              <Design
                title="Mock Sun"
                tag={designTags}
                imageWidth="w-[642px]"
                image='/images/image-3.jpg'
                link="#"
                calssName="md:mr-20"
              />
            </div>
            <div className=''>
              <Design
                title="Usonia Wine Labels"
                tag={designTags}
                image='/images/image-4.jpg'
                link="#"
                calssName="md:ml-20 md:pb-6"
              />
            </div>
            <div className='md:flex md:justify-end items-end'>
              <Design
                title="Don’t Look at Me"
                tag={designTags}
                image='/images/image-2.jpg'
                link="#"
                calssName=""
              />
            </div>
            <div className='md:flex md:justify-end'>
              <Design
                title="Condo MX"
                tag={designTags}
                image='/images/image-5.png'
                link="#"
                calssName="md:-mr-[10rem]"
              />
            </div>
          </div>


        </section>
        <Inquire />
        <div className='md:grid md:grid-cols-2 justify-between items-start gap-20 mt-20 md:mt-40'>
          <Design
            title="Usonia Wine Labels"
            tag={designTags}
            video='https://www.youtube.com/watch?v=LXb3EKWsInQ'
            link="#"
            calssName="md:ml-20 w-full md:w-auto"
          />
          <div className='flex mt-6 md:mt-0 md:justify-end'>
            <Design
              title="Don’t Look at Me"
              tag={designTags}
              image='/images/image-2.jpg'
              link="#"
              calssName="md:mr-20"
            />
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  )
}
