
const Paciente = ({paciente}) => {
  const { nombre, fecha, email, propietario, sintomas, _id } = paciente

  const formatearFecha = (fecha) => {
    const nuevafecha = new Date(fecha)
    return new Intl.DateTimeFormat('es-ES', { dateStyle: 'long' }).format(nuevafecha)
  }

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold uppercase text-indigo-700 my-2">
        Nombre: {''}<span className="font-normal normal-case text-black">{nombre}</span>
      </p>
      <p className="font-bold uppercase text-indigo-700 my-2">
        Propietario: {''}<span className="font-normal normal-case text-black">{propietario}</span>
      </p>
      <p className="font-bold uppercase text-indigo-700 my-2">
        Email: {''}<span className="font-normal normal-case text-black">{email}</span>
      </p>
      <p className="font-bold uppercase text-indigo-700 my-2">
        Fecha alta: {''}<span className="font-normal normal-case text-black">{formatearFecha(fecha)}</span>
      </p>
      <p className="font-bold uppercase text-indigo-700 my-2">
        Sintomas: {''}<span className="font-normal normal-case text-black">{sintomas}</span>
      </p>

      <div className="flex justify-between my-5">
        <button
          type="button"
          className="py-2 px-10 bg-gray-600 hover:bg-gray-700 text-white uppercase font-bold rounded-lg"
        >Editar</button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-lg"
        >Eliminar</button>
      </div>
    </div>
  )
}

export default Paciente