import { useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'
import Alerta from "../components/Alerta"



const Registrar = () => {

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repetirpassword, setRepetirPassword] = useState('');
  const [alerta, setAlerta] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    if([nombre, email, password, repetirpassword].includes('')) {
      setAlerta({msg :'Hay campos vacios', error: true});
      return;
    }
    if (password !== repetirpassword) {
      setAlerta({msg: 'Los passowords no son iguales', error: true});
      return;
    }

    if (password.length < 6) {
      setAlerta({msg: 'El password es muy corto, agrega minimo 6 caracteres', error: true});
      return;
    }

    setAlerta({});

    // Crear el usuario en la API
    try {
      const url = 'http://localhost:4000/api/veterinarios';
      await axios.post(url, { nombre, email, password });
      setAlerta({msg: 'Cuenta creada correctamente, revisa tu email', error: false});
    } catch (error) {
      setAlerta({msg: error.response.data.msg, error: true});
    }
  }

  const {msg} = alerta;

  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-6xl">
          Crea tu Cuenta y Administra <span className="text-black">tus Pacientes</span>
        </h1>
      </div>
      <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl font-bold'>
        {
          msg && <Alerta 
          alerta={alerta}
        />
        }
        <form 
          onSubmit={handleSubmit}
        >
          <div className="my-5">
            <label 
              className="uppercase text-gray-600 block text-xl font-bold" 
              htmlFor="emailnombrEmail">Nombre</label>
            <input
              name="nombre"
              id="nombre"
              type="text" 
              placeholder="Tu nombre" 
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={nombre}
              onChange={e => setNombre(e.target.value)} />
          </div>
          <div className="my-5">
            <label 
              className="uppercase text-gray-600 block text-xl font-bold" 
              htmlFor="email">Email</label>
            <input
              name="email"
              id="email"
              type="email" 
              placeholder="Tu email" 
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" 
              value={email}
              onChange={e => setEmail(e.target.value)} />
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
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" 
              value={password}
              onChange={e => setPassword(e.target.value)} />
          </div>
          <div className="my-5">
            <label 
              className="uppercase text-gray-600 block text-xl font-bold" 
              htmlFor="repitepassword">Repetir Password</label>
            <input
              name="repitepassword"
              id="repitepassword"
              type="password" 
              placeholder="Repite tu password" 
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" 
              value={repetirpassword}
              onChange={e => setRepetirPassword(e.target.value)} />
          </div>
          <input 
            type="submit" 
            value="Crear cuenta"
            className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto" />
          <nav className='mt-10 lg:flex lg:justify-between'>
            <Link className='block text-center my-5 text-gray-500' to="/">¿Ya tienes cuenta? Inicia sesion</Link>
            <Link className='block text-center my-5 text-gray-500' to="/olvide-password">Olvide mi password</Link>
          </nav>
        </form>
      </div> 
    </>
  )
}

export default Registrar