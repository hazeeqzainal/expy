import { useForm } from 'react-hook-form';

interface SignupData {
  firstName: string;
  lastName: string;
  dob: string;
  email: string;
  password: string;
}

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupData>();

  const onSubmit = (data: SignupData) => {
    console.log('Submitting form with values:', data);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="mx-auto w-full max-w-md">
        <div className="mb-4 rounded bg-white px-4 pt-6 pb-8 shadow-md">
          <h1 className="mb-4 text-center text-xl font-semibold">Sign up</h1>
          <div className="mb-4">
            <label
              className="mb-2 block font-bold text-gray-700"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className={`focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none ${
                errors.firstName ? 'border-red-500' : ''
              }`}
              id="firstName"
              type="text"
              {...register('firstName', { required: true })}
              placeholder="First Name"
            />
            {errors.firstName && (
              <p className="mt-1 text-xs text-red-500">
                First name is required
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block font-bold text-gray-700"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className={`focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none ${
                errors.lastName ? 'border-red-500' : ''
              }`}
              id="lastName"
              type="text"
              {...register('lastName', { required: true })}
              placeholder="Last Name"
            />
            {errors.lastName && (
              <p className="mt-1 text-xs text-red-500">Last name is required</p>
            )}
          </div>
          <div className="mb-4">
            <label className="mb-2 block font-bold text-gray-700" htmlFor="dob">
              Date of Birth
            </label>
            <input
              className={`focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none ${
                errors.dob ? 'border-red-500' : ''
              }`}
              id="dob"
              type="date"
              {...register('dob', { required: true })}
              placeholder="Date of Birth"
            />
            {errors.dob && (
              <p className="mt-1 text-xs text-red-500">
                Date of birth is required
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block font-bold text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className={`focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none ${
                errors.email ? 'border-red-500' : ''
              }`}
              id="email"
              type="email"
              {...register('email', { required: true })}
              placeholder="Email"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">Email is required</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block font-bold text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className={`focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none ${
                errors.password ? 'border-red-500' : ''
              }`}
              id="password"
              type="password"
              {...register('password', { required: true })}
              placeholder="Password"
            />
            {errors.password && (
              <p className="mt-1 text-xs text-red-500">Password is required</p>
            )}
          </div>
          <div className="mb-4 text-center">
            <button
              className="focus:shadow-outline rounded bg-teal-500 py-2 px-4 font-bold text-white hover:bg-teal-700 focus:outline-none"
              type="submit"
              onClick={handleSubmit(onSubmit)}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
