import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form"

export default function LoginForm() {
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState(null)

 const onSubmit = (data) => {
    setUser(data)
    setUsername("")
    setPassword("")
  }

const currentColor = "#4ADE7F"
    return (
<>
<link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
    />
<small style={{color: 'red'}}>  {errors.password && <span>Password field is required</span>} </small> 

<small>  { user && JSON.stringify(user, null, 2)} </small>

 <div className=" rounded border-solid border border-white-400 bg-white-200 py-16 px-12 m-10 flex flex-col items-center justify-center">
 
 <svg 
 width="100"
 height="100"
 xmlns="http://www.w3.org/2000/svg" className="rounded-full p-1 border-2 border-green-400  mr-3 mb-5 w-100 h-100 " viewBox="0 0 20 20" fill={currentColor}>
        <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
 </svg>

  {/* <img className="rounded-full h-32 w-32" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="user avatar" /> */}
 <h2 className='focus:outline-none text-2xl font-extrabold leading-6 text-green-400'>Login to your account</h2>
  <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-4">
    <div className="border-solid border border-gray-400 flex flex-wrap items-stretch relative bg-white items-center rounded mb-4">
    <div class="flex -mr-px justify-center w-14 p-4">
              <span
                class="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600"
              >
                <i class="fas fa-user-circle"></i>
              </span>
            </div>
      <label for="userEmail" className="sr-only">Email address</label>
      <input className="rounded px-2 py-3" 
      type="text" 
      placeholder='username' 
      name="username" 
      id="username" {...register("username")} />
    </div>

    <div className="border-solid border border-gray-400 flex flex-wrap items-stretch relative bg-white items-center rounded mb-4">
      <label for="userEmail" className="sr-only">Password</label>
      <div class="flex -mr-px justify-center w-14 p-4">
              <span
                class="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600"
              >
               <i class="fas fa-lock"></i>
              </span>
            </div>
      <input className="rounded px-2 py-3" 
      type="password" 
      placeholder='password' 
      name="password" 
      id="pasword" {...register("password", { required: true })}
       />
    </div>

    <div className="my-4 flex items-center">
      <input className="h-4 w-4 mr-2" type="checkbox" id="userRemember" />
      <label for="userRemember">Remember me</label>
    </div>
    <button className="bg-green-400 hover:bg-green-100 text-white font-bold w-full py-3"
     type="submit">Sign in</button>
  </form>
  <a href="#" className="self-start text-green-400">Forgot the password?</a>
</div>
        <div class="py-5">
        <div class="grid grid-cols-2 gap-1">
          <div class="text-center sm:text-left whitespace-nowrap">
            <button class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm text-gray-500 bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block align-text-top">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span class="inline-block ml-1">Back to your-app.com</span>
            </button>
          </div>
        </div>
      </div>
 </>
 )
}