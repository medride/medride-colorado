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
          <form
            onSubmit={onSubmit}
            action="https://formsubmit.co/medridetech@gmail.com"
            method="POST"
          >
            <div className="mb-8 flex flex-col justify-between space-y-4 md:flex-row md:space-x-8 md:space-y-0">
              <div className="flex-1">
                <input
                  className="w-full border-2 py-4 pl-4 "
                  placeholder="Name"
                  {...register('name', { required: true, maxLength: 50 })}
                />
                {errors.name?.type === 'required' && (
                  <span className="pl-3 text-base italic text-red-500">
                    Please enter your name
                  </span>
                )}
                {errors.name?.type === 'maxLength' && (
                  <span className="pl-3 text-base italic text-red-500">
                    The name you entered is too long
                  </span>
                )}
              </div>
              <div className="flex-1">
                <input
                  className="w-full border-2 py-4 pl-4"
                  placeholder="Email Address"
                  type="email"
                  {...register('email', {
                    required: true,
                    maxLength: 70,
                    pattern:
                      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
                  })}
                />
                {errors.email?.type === 'required' && (
                  <span className="pl-3 text-base italic text-red-500">
                    Email is required
                  </span>
                )}
                {errors.email?.type === 'pattern' && (
                  <span className="pl-3 text-base italic text-red-500">
                    Please enter a valid email address
                  </span>
                )}
              </div>
            </div>
            <div>
              <div className="mb-4">
                <textarea
                  className="w-full border-2 pl-4 pt-4"
                  placeholder="Message"
                  rows={10}
                  {...register('message', { required: true, maxLength: 5000 })}
                />
                {errors.message?.type === 'required' && (
                  <span className="pl-3 text-base italic text-red-500">
                    A message is required
                  </span>
                )}
              </div>
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
