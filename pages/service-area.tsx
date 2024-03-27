import Head from 'next/head'
import Image from 'next/image'

const ServiceAreas = () => {
  return (
    <div>
      <Head>
        <title>
          Service Areas for Colorado Medicaid Non-Emergency Medical Transport
          (NEMT) - MedRide
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* Top Banner */}
      <div className="bg-orange-500">
        <h1 className="py-4 text-center text-4xl font-bold uppercase tracking-wide text-white">
          Service Area
        </h1>
      </div>
      <div className="mx-auto w-11/12 pb-4 md:w-3/4">
        <h2 className="pt-10 pb-4 text-center text-4xl font-bold text-orange-500 lg:pt-16">
          Service Area by County
        </h2>
        <p className="pb-4 text-center text-xl">
          MedRide Serves the following counties:
        </p>
      </div>
      {/* IMG - Service Areas */}
      <div className="mx-auto w-3/5 ">
        <Image
          src="/img/medride-colorado-service-area-map.jpg"
          alt="Medride Colorado Service Area Map"
          width={1861}
          height={1711}
        />
        {/* <img
          src="/img/medride-colorado-service-area-map.jpg"
          alt=""
          className=""
        /> */}
      </div>
      {/* Table */}
      <div className="mx-auto flex w-5/6 flex-col justify-center py-6 pl-24 text-2xl md:w-3/4 md:flex-row md:space-x-12 md:pl-10 lg:space-x-20 xl:space-x-28">
        <div>
          <ul className="list-outside list-disc">
            <li className="pb-2 md:pb-0">Alamosa</li>
            <li className="pb-2 md:pb-0">Archuleta</li>
            <li className="pb-2 md:pb-0">Baca</li>
            <li className="pb-2 md:pb-0">Bent</li>
            <li className="pb-2 md:pb-0">Chaffee</li>
            <li className="pb-2 md:pb-0">Cheyenne</li>
            <li className="pb-2 md:pb-0">Crowley</li>
            <li className="pb-2 md:pb-0">Custer</li>
            <li className="pb-2 md:pb-0">Costilla</li>
          </ul>
        </div>
        <div>
          <ul className="list-outside list-disc">
            <li className="pb-2 md:pb-0">Conejos</li>
            <li className="pb-2 md:pb-0">Delta</li>
            <li className="pb-2 md:pb-0">Eagle</li>
            <li className="pb-2 md:pb-0">Elbert</li>
            <li className="pb-2 md:pb-0">El Paso</li>
            <li className="pb-2 md:pb-0">Fremont</li>
            <li className="pb-2 md:pb-0">Garfield</li>
            <li className="pb-2 md:pb-0">Gunnison</li>
            <li className="pb-2 md:pb-0">Grand</li>
          </ul>
        </div>
        <div>
          <ul className="list-outside list-disc">
            <li className="pb-2 md:pb-0">Hinsdale</li>
            <li className="pb-2 md:pb-0">Huefano</li>
            <li className="pb-2 md:pb-0">Jackson</li>
            <li className="pb-2 md:pb-0">Kioa</li>
            <li className="pb-2 md:pb-0">Kit Carson</li>
            <li className="pb-2 md:pb-0">Las Animas</li>
            <li className="pb-2 md:pb-0">Lake</li>
            <li className="pb-2 md:pb-0">Lincoln</li>
            <li className="pb-2 md:pb-0">Logan</li>
            <li className="pb-2 md:pb-0">Mesa</li>
          </ul>
        </div>
        <div>
          <ul className="list-outside list-disc">
            <li className="pb-2 md:pb-0">Mineral</li>
            <li className="pb-2 md:pb-0">Moffat</li>
            <li className="pb-2 md:pb-0">Montrose</li>
            <li className="pb-2 md:pb-0">Morgan</li>
            <li className="pb-2 md:pb-0">Otero</li>
            <li className="pb-2 md:pb-0">Ouray</li>
            <li className="pb-2 md:pb-0">Park</li>
            <li className="pb-2 md:pb-0">Phillips</li>
            <li className="pb-2 md:pb-0">Pitkin</li>
            <li className="pb-2 md:pb-0">Prowers</li>
          </ul>
        </div>
        <div>
          <ul className="list-outside list-disc">
            <li className="pb-2 md:pb-0">Pueblo</li>
            <li className="pb-2 md:pb-0">Rio Blanco</li>
            <li className="pb-2 md:pb-0">Rio Grande</li>
            <li className="pb-2 md:pb-0">Routt</li>
            <li className="pb-2 md:pb-0">Saguache</li>
            <li className="pb-2 md:pb-0">Sedgwick</li>
            <li className="pb-2 md:pb-0">Summit</li>
            <li className="pb-2 md:pb-0">Teller</li>
            <li className="pb-2 md:pb-0">Washington</li>
            <li className="pb-2 md:pb-0">Yuma</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ServiceAreas

export async function getStaticProps(context: any) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
