import { useForm } from 'react-hook-form'

type FormData = {
  name: string
  email: string
  message: string
}

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()
  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <div>
      <div className="bg-orange-500">
        <h1 className="py-4 text-center text-4xl font-bold uppercase tracking-wide text-white">
          Contact Us
        </h1>
      </div>
      <div className="bg-[url('/img/background-decorator.jpg')] bg-cover">
        <div className="mx-auto w-10/12 pb-8 pt-14 text-xl md:w-1/2">
          <p className="mb-6 text-6xl font-bold uppercase">Let's Talk</p>
          <form onSubmit={onSubmit}>
            <div className="mb-8 flex flex-col justify-between space-y-4 md:flex-row md:space-x-8 md:space-y-0">
              <div className="grow">
                <input
                  className="w-full border-2 py-4 pl-4 "
                  placeholder="Name"
                  {...register('name')}
                />
              </div>
              <div className="grow">
                <input
                  className="w-full border-2 py-4 pl-4"
                  placeholder="Email Address"
                  {...register('email')}
                />
              </div>
            </div>
            <div>
              <textarea
                className="mb-4 w-full border-2 pl-4 pt-4"
                placeholder="Message"
                rows={10}
                {...register('message')}
              />
            </div>
            <button
              type="submit"
              className="bg-green-400 py-4 px-6 text-xl font-medium text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
