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
        <div className="mx-auto flex w-3/4 flex-col items-center gap-10 space-x-0 pt-16 text-center lg:w-1/2">
          {/* Left Column */}
          <div className="flex-grow basis-full text-3xl font-bold xl:leading-relaxed">
            Click on either of the PDF icons to download the required form. Then
            fill it out and fax it to (719) 545-0499.
          </div>

          {/* PDF Icon */}
          {/* TODO: Check how the site looks on medium-sized screens */}
          <div className="flex w-full flex-col items-center justify-center gap-10 md:flex-row md:gap-20">
            <div className="mb-4 flex flex-col items-center md:mb-16 lg:mb-0 ">
              <a href="/docs/MedRide-25_miles-form_23.pdf" target="_blank">
                <img src="/img/pdf-icon.png" className="h-32 xl:h-40" />
              </a>
              <p className="pt-1 pl-4 text-center font-medium">25 Miles</p>
            </div>
            <div className="mb-4 flex flex-col items-center md:mb-16 lg:mb-0">
              <a href="/docs/MedRide-Application-7-2023.pdf" target="_blank">
                <img src="/img/pdf-icon.png" className="h-32 xl:h-40" />
              </a>
              <p className="pt-1 pl-4 text-center font-medium">
                MedRide Application
              </p>
            </div>
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
    props: {},
  }
}
