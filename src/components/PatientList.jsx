import React from 'react'
import PrintPatient from './PrintPatient'

const PatientList = ({ patients, setPatient, deletePatient }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5">
      {patients && patients.length > 0 ?
        <>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-center mb-6">Lista de pacientes</h2>
          <p className="text-base md:text-lg lg:text-xl text-center  mb-8">Pacientes y <span className="text-sky-600 font-bold">citas</span></p>

          {
            patients.map((item) => (
              <PrintPatient
                key={item.id}
                patientEl={item}
                setPatient={setPatient}
                deletePatient={deletePatient}
              />
            ))
          }
        </>
        :
        <>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-center mb-6">No hay pacientes</h2>
          <p className="text-md md:text-lg lg:text-xl text-center  mb-8">Añade pacientes y <span className="text-sky-600 font-bold">aparecerán en este lugar</span></p>
        </>

      }

    </div>
  )
}

export default PatientList