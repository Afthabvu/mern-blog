import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='min-h-screen mt-20'>
<div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
  {/* left */}
  <div className='flex-1'>
  <Link to="/" className='  font-bold dark:text-white text-4xl'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Afthab's</span>
        Blog
      </Link>
      <p className='text-sm mt-5'>
        This is a demo Project.You can Signup with your email and password
        or with Google
      </p>

  </div>
  {/* right */}
  <div className='flex-1'>
<form action="" className='flex flex-col gap-4'>
  <div>
    <Label value='Your username'/>
    <TextInput 
    type='text'
    placeholder='username'
    id='username'
    />
  </div>
  <div>
    <Label value='Your email'/>
    <TextInput 
    type='text'
    placeholder='email'
    id='email'
    />
  </div>
  <div>
    <Label value='Your password'/>
    <TextInput 
    type='text'
    placeholder='password'
    id='password'
    />
  </div>
  <Button  gradientDuoTone='purpleToPink' type='submit'>
    Sign Up

  </Button>
</form>
<div className='flex gap-2 text-sm mt-5'>
  <span className=''>Have an account?</span>
  <Link to='/sign-in' className='text-blue-500'>
  Sign in
  </Link>
</div>
  </div>
</div>
    </div>
  )
}

export default SignUp