import Head from 'next/head'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
  name: string
  email: string
  message: string
}

type SubmitStatus = 'idle' | 'submitting' | 'succeeded' | 'failed'

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = handleSubmit((data) => {
    setSubmitStatus('submitting')

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 200) {
          console.log('Message sent!')
          setSubmitStatus('succeeded')
        } else {
          // If the server responds with a non-200 status, we assume it's an error.
          console.error('Failed to send message: ', res.status)
          setSubmitStatus('failed')
        }
      })
      .catch((error) => {
        // This will catch any network error.
        console.error('Network error: ', error)
        setSubmitStatus('failed')
      })
  })

  return (
    <div>
      <Head>
        <title>Contact Us - MedRide Colorado</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
              <div className="flex-1">
                <input
                  className="w-full border-2 py-4 pl-4 "
                  placeholder="Name"
                  {...register('name', { required: true, maxLength: 50 })}
                  disabled={
                    submitStatus === 'submitting' ||
                    submitStatus === 'succeeded'
                  }
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
                  disabled={
                    submitStatus === 'submitting' ||
                    submitStatus === 'succeeded'
                  }
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
                  disabled={
                    submitStatus === 'submitting' ||
                    submitStatus === 'succeeded'
                  }
                />
                {errors.message?.type === 'required' && (
                  <span className="pl-3 text-base italic text-red-500">
                    A message is required
                  </span>
                )}
                {submitStatus === 'succeeded' && (
                  <span className="text-green-500">
                    Message successfully sent!
                  </span>
                )}
                {submitStatus === 'failed' && (
                  <span className="italic text-red-500">
                    Something went wrong. Please try again.
                  </span>
                )}
              </div>
            </div>
            <button
              type="submit"
              className={`${
                submitStatus === 'submitting' || submitStatus === 'succeeded'
                  ? 'bg-slate-400'
                  : 'bg-green-400'
              } py-4 px-6 text-xl font-medium text-white`}
              disabled={
                submitStatus === 'submitting' || submitStatus === 'succeeded'
              }
            >
              {submitStatus === 'idle' || submitStatus === 'failed'
                ? 'Submit'
                : submitStatus === 'submitting'
                ? 'Submitting'
                : 'Success'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs

export async function getStaticProps(context: any) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
