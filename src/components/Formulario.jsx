import { useEffect } from "react"
import { useState } from "react"
import usePacientes from "../hooks/usePacientes"
import Alerta from './Alerta'


const Formulario = () => {

  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')


  const [id, setId] = useState('')


  const [alerta, setAlerta] = useState({})

  const { guardarPaciente, paciente } = usePacientes()

  useEffect(() => {
    if (paciente?.nombre) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
      setId(paciente._id)
    }
  }, [paciente])
  


  const handleSubmit = (e) => {
    e.preventDefault()

    // Validar campos
    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      })
      return;
    }

    setAlerta({})
    guardarPaciente({nombre, propietario, email, fecha, sintomas, id})
    setAlerta({
      msg: 'Paciente guardado correctamente'
    })
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
    setId('')
  }

  const { msg } = alerta

  return (
    <>
      <h2 className="font-black text-3xl text-center">Agregar Paciente</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Agrega tus {''}
        <span className="text-indigo-600 font-bold">Pacientes y Administralos</span>
      </p>
      {
        msg && <Alerta alerta={alerta} />
      }
      <form 
        onSubmit={handleSubmit} 
        className="bg-white py-10 px-5 mb-10 lg:mb-0 shadow-md rounded-md">
        <div className="mb-5">
          <label 
            htmlFor="nombre"
            className="text-gray-700 font-bold uppercase"
          >
            Nombre mascota
          </label>
          <input 
            type="text"
            name="nombre"
            id="nombre"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label 
            htmlFor="propietario"
            className="text-gray-700 font-bold uppercase"
          >
            Propietario
          </label>
          <input 
            type="text"
            name="propietario"
            id="propietario"
            placeholder="Nombre de/la propietario/a"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={e => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label 
            htmlFor="email"
            className="text-gray-700 font-bold uppercase"
          >
            Email
          </label>
          <input 
            type="text"
            name="email"
            id="email"
            placeholder="Email del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label 
            htmlFor="fecha"
            className="text-gray-700 font-bold uppercase"
          >
            Fecha Alta
          </label>
          <input 
            type="date"
            name="fecha"
            id="fecha"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={e => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label 
            htmlFor="sintomas"
            className="text-gray-700 font-bold uppercase"
          >
            Síntomas
          </label>
          <textarea 
            name="sintomas"
            id="sintomas"
            placeholder="Describe los sintomas del paciente"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={sintomas}
            onChange={e => setSintomas(e.target.value)}
          ></textarea>
        </div>
        <input 
          type="submit" 
          value={ id ? 'Actualizar paciente':'Guardar paciente' } 
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors" 
        />
      </form>
    </>
  )
}

export default Formulario