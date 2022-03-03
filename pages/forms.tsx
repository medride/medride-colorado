const Forms = () => {
  return (
    <div>
      <div className="bg-orange-500">
        <h1 className="py-4 text-center text-4xl font-bold uppercase tracking-wide text-white">
          Forms
        </h1>
      </div>

      <div className="bg-[url('/img/background-decorator.jpg')] bg-cover">
        {/* Flexbox Container */}
        <div className="mx-auto flex w-3/4 flex-col items-center space-x-0 pt-16 text-center md:h-75vh md:flex-row md:items-start md:space-x-16 lg:w-1/2 lg:space-x-36 lg:text-left">
          {/* Left Column */}
          <div className="basis-full pb-14 text-3xl font-bold leading-relaxed  lg:pb-0">
            Click on the PDF icon to download the required form. Then fill it
            out and fax it to (719) 545-0499.
          </div>

          {/* PDF Icon */}
          {/* TODO: Fix spacing that is messing up the footer. */}
          {/* TODO: Check how the site looks on medium-sized screens */}
          <div className="mb-16 basis-full lg:mb-0 lg:basis-1/3">
            <a href="/docs/MedRide-Application-2021-1.pdf" target="_blank">
              <img src="/img/pdf-icon.png" className="h-40" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Forms
