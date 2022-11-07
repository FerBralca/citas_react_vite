import React from 'react'

const PrintPatient = ({ patientEl, setPatient, deletePatient }) => {
  const { petName, ownerName, email, medicalDischarge, symthoms, id } = patientEl;

  return (
    <div className="bg-white px-4 py-6 rounded-lg mb-6">
      <p className="text-sm md:text-base uppercase font-bold mb-2">Nombre: <span className="font-normal normal-case">{petName}</span></p>

      <p className="text-sm md:text-base uppercase font-bold mb-2">Propietario: <span className="font-normal normal-case">{ownerName}</span></p>

      <p className="text-sm md:text-base uppercase font-bold mb-2">Email: <span className="font-normal normal-case">{email}</span></p>

      <p className="text-sm md:text-base uppercase font-bold mb-2">Alta medica: <span className="font-normal normal-case">{medicalDischarge}</span></p>

      <p className="text-sm md:text-base uppercase font-bold mb-6">Sintomas: <span className="font-normal normal-case">{symthoms}</span></p>

      <div className="flex justify-between">
        <button className="bg-blue-600 px-4 py-2 text-white uppercase font-bold rounded-lg text-sm md:text-base hover:bg-blue-700 transition-all duration-1000" onClick={() => setPatient(patientEl)}>Editar</button>
        <button className="bg-red-600 px-4 py-2 text-white uppercase font-bold rounded-lg text-sm md:text-base hover:bg-red-700 transition-all duration-1000" onClick={() => deletePatient(id)}>Eliminar</button>
      </div>
    </div>
  )
}

export default PrintPatient