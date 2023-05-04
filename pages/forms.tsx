import Head from 'next/head'
import Image from 'next/image'

const Forms = () => {
  return (
    <div>
      <Head>
        <title>Consent Form - MedRide Colorado</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="bg-orange-500">
        <h1 className="py-4 text-center text-4xl font-bold uppercase tracking-wide text-white">
          Forms
        </h1>
      </div>

      <div className="flex flex-col bg-[url('/img/background-decorator.jpg')] bg-cover">
        {/* Flexbox Container */}
        <div className="mx-auto flex w-3/4 flex-col items-center space-x-0 pt-16 text-center md:space-x-10 lg:w-1/2 lg:flex-row lg:items-start lg:text-left xl:space-x-36">
          {/* Left Column */}
          <div className="flex-grow basis-full pb-14 text-3xl font-bold md:pb-0 lg:pb-0 xl:leading-relaxed">
            Click on the PDF icon to download the required form. Then fill it
            out and fax it to (719) 545-0499.
          </div>

          {/* PDF Icon */}
          {/* TODO: Check how the site looks on medium-sized screens */}
          <div className="mb-4 basis-full md:mb-16 lg:mb-0 lg:basis-1/3">
            <a href="/docs/MedRide-Application-2021-1.pdf" target="_blank">
              <img src="/img/pdf-icon.png" className="h-32 xl:h-40" />
            </a>
          </div>
        </div>
        <div className="mx-auto py-6 px-4 md:py-10 md:px-0">
          <Image
            src="/img/medride-colorado-forms-picture.jpg"
            alt="MedRide vehicle driving through Denver"
            width={800}
            height={533}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}
export default Forms

export async function getStaticProps(context: any) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
