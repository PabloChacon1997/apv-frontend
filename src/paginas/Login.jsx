import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-6xl">
          Inicia Sesion y Administra tus <span className="text-black">Pacientes</span>
        </h1>
      </div>
      <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl font-bold'>
        <form action="">
          <div className="my-5">
            <label 
              className="uppercase text-gray-600 block text-xl font-bold" 
              htmlFor="email">Email</label>
            <input
              name="email"
              id="email"
              type="text" 
              placeholder="Email de registro" 
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" />
          </div>
          <div className="my-5">
            <label 
              className="uppercase text-gray-600 block text-xl font-bold" 
              htmlFor="password">Password</label>
            <input
              name="password"
              id="password"
              type="password" 
              placeholder="Tu password" 
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" />
          </div>

          <input 
            type="submit" 
            value="Iniciar Sesión"
            className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto" />
        </form>
        <nav className='mt-10 lg:flex lg:justify-between'>
          <Link className='block text-center my-5 text-gray-500' to="/registrar">¿No tienes cuenta? Registrate</Link>
          <Link className='block text-center my-5 text-gray-500' to="/olvide-password">Olvide mi password</Link>
        </nav>
      </div>
    </>
  )
}

export default Login