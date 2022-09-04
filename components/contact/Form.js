import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useStore } from '../store/store';
import { useEffect, useState } from 'react';

const emailRegExp = /^\S+@\S+\.\S+$/;
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup
  .object({
    from_name: yup.string().required('Please fill your name'),
    reply_to: yup
      .string()
      .email('Email must be a valid email')
      .matches(emailRegExp, 'Email is not valid')
      .required('Email is required'),
    phone: yup
      .string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .required(),
    message: yup.string().required('How can I help?'),
  })
  .required();

const Form = () => {
  const [steps, setSteps] = useStore.steps();
  const [personeName, setPersoneName] = useStore.personeName();
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setFocus,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: {
      from_name: '',
      reply_to: '',
      phone: '',
      message: '',
    },
  });

  useEffect(() => {
    setFocus('from_name');
  }, [setFocus]);

  useEffect(() => {
    steps === 2 && setFocus('reply_to');
    steps === 3 && setFocus('phone');
    steps > 3 && setFocus('message');
  }, [steps, setFocus]);

  const stepsProgress = () => {
    !errors.from_name && watch('from_name') && setSteps(2);
    !errors.reply_to && watch('reply_to') && setSteps(3);
    !errors.phone && watch('phone') && setSteps(4);
  };

  const onSubmit = (data) => {
    console.log(data);
    try {
      emailjs
        .send(
          process.env.NEXT_PUBLIC_SERVICE,
          process.env.NEXT_PUBLIC_TEMPLATE,
          data,
          process.env.NEXT_PUBLIC_USER
        )
        .then(() => {
          setPersoneName(data.from_name);
          setSuccess(true);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {!success ? (
        <form
          className='w-full max-w-md'
          autoComplete='off'
          onSubmit={handleSubmit(onSubmit)}>
          <div className={`relative z-0 ${steps === 1 ? 'block' : 'hidden'}`}>
            <input
              autoComplete='off'
              required
              type='text'
              id='from_name'
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-slate-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer'
              {...register('from_name', { required: true, maxLength: 30 })}
              placeholder=' '
            />
            <label
              htmlFor='from_name'
              className='absolute text-sm text-slate-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
              Your name*
            </label>
            {errors.from_name && (
              <p className='text-red-500 text-xs mt-2'>
                {errors.from_name?.message}
              </p>
            )}
          </div>

          <div className={`relative z-0 ${steps === 2 ? 'block' : 'hidden'}`}>
            <input
              autoComplete='off'
              required
              type='email'
              id='reply_to'
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-slate-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer'
              {...register('reply_to')}
              placeholder=' '
            />
            <label
              htmlFor='reply_to'
              className='absolute text-sm text-slate-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
              Email*
            </label>
            {errors.reply_to && (
              <p className='text-red-500 text-xs mt-2'>
                {errors.reply_to?.message}
              </p>
            )}
          </div>

          <div className={`relative z-0 ${steps === 3 ? 'block' : 'hidden'}`}>
            <input
              required
              autoComplete='off'
              type='text'
              id='phone'
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-slate-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer'
              {...register('phone')}
              placeholder=' '
            />
            <label
              htmlFor='phone'
              className='absolute text-sm text-slate-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
              Phone*
            </label>
            {errors.phone && (
              <p className='text-red-500 text-xs mt-2'>
                {errors.phone?.message}
              </p>
            )}
          </div>

          <div className={`relative z-0 ${steps > 3 ? 'block' : 'hidden'}`}>
            <textarea
              autoComplete='off'
              type='text'
              id='message'
              className='block min-h-[7rem] py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-slate-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer'
              {...register('message')}
              placeholder=' '
            />
            <label
              htmlFor='message'
              className='absolute text-sm text-slate-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
              Message
            </label>
          </div>

          <div className='flex justify-end mt-10'>
            {steps <= 3 ? (
              <button
                onClick={() => stepsProgress()}
                type='button'
                className='relative min-w-[10rem] flex items-center justify-center gap-1 overflow-hidden z-20 group bg-slate-900 text-center text-slate-50 px-6 lg:px-8 py-2 lg:py-3 text-lg font-medium'>
                <span className='relative z-30 transition duration-300 group-hover:text-slate-900'>
                  Next
                </span>
                <span className='absolute z-20 inset-0 w-full h-full flex justify-center items-center'>
                  <span className='w-0 h-0 rounded-full group-hover:w-80 group-hover:h-80 bg-slate-200 transition-all duration-700'></span>
                </span>
              </button>
            ) : (
              <button
                type='submit'
                disabled={!isValid}
                className='relative min-w-[10rem] flex items-center justify-center gap-1 overflow-hidden z-20 group bg-slate-900 text-center text-slate-50 px-6 lg:px-8 py-2 lg:py-3 text-lg font-medium'>
                <span className='relative z-30 transition duration-300 group-hover:text-slate-900'>
                  Submit
                </span>
                <span className='absolute z-20 inset-0 w-full h-full flex justify-center items-center'>
                  <span className='w-0 h-0 rounded-full group-hover:w-80 group-hover:h-80 bg-slate-200 transition-all duration-700'></span>
                </span>
              </button>
            )}
          </div>
        </form>
      ) : (
        <div>
          <h2>Thanks {personeName}</h2>
        </div>
      )}
    </>
  );
};

export default Form;
