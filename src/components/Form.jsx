import React from 'react'
import { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid';
import Errors from './Errors';

const Form = ({ patients, setPatients, patient, setPatient }) => {
  const [petName, setPetName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [email, setEmail] = useState('');
  const [medicalDischarge, setMedicalDischarge] = useState('');
  const [symthoms, setSymthoms] = useState('');
  // errors
  const [error, setError] = useState(false);
  // 
  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      setPetName(patient.petName);
      setOwnerName(patient.ownerName);
      setEmail(patient.email);
      setMedicalDischarge(patient.medicalDischarge);
      setSymthoms(patient.symthoms);
    }
  }, [patient])

  // Values
  const objectValues = {
    petName,
    ownerName,
    email,
    medicalDischarge,
    symthoms,
  }

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if ([petName, ownerName, email, medicalDischarge, symthoms].includes('')) {
      setError(true)
      return;
    }

    if (patient.id) {
      objectValues.id = patient.id
      const updatePatient = patients.map(patientState => patientState.id === patient.id ? objectValues : patientState);

      setPatients(updatePatient);
      setPatient({});

    } else {
      objectValues.id = uuid()
      setPatients([...patients, objectValues])
    }
    setError(false);
    // Reseting all the inputs
    setPetName('');
    setOwnerName('');
    setEmail('');
    setMedicalDischarge('');
    setSymthoms('');
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">

      <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-center mb-6">Seguimiento de pacientes</h2>
      <p className="text-center text-md md:text-lg lg:text-xl mb-8">Agrega pacientes y <span className="text-sky-600 font-bold">administralos</span></p>

      {/* Form */}
      <form
        action=""
        onSubmit={handleSubmit}
        className="bg-white rounded-lg px-6 py-8 mb-10">
        {
          error && <Errors message="Todos los campos son obligatorios" />
        }
        <div className="mb-6">
          <label htmlFor="petName" className="text-sm md:text-base block uppercase font-bold mb-3">Nombre de la mascota</label>
          <input
            type="text"
            name="petName"
            id="petName"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
            className="border-2 w-full p-2"
            placeholder="Ingrese el nombre de la mascota"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="ownerName" className="text-sm md:text-base block uppercase font-bold mb-3">Nombre del propietario</label>
          <input
            type="text"
            name="ownerName"
            id="ownerName"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
            className="border-2 w-full p-2"
            placeholder="Ingrese el nombre del propietario"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="text-sm md:text-base block uppercase font-bold mb-3">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 w-full p-2"
            placeholder="correo@correo.com"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="medicalDischarge" className="text-sm md:text-base block uppercase font-bold mb-3">Alta medica</label>
          <input
            type="date"
            name="medicalDischarge"
            id="medicalDischarge"
            value={medicalDischarge}
            onChange={(e) => setMedicalDischarge(e.target.value)}
            className="border-2 w-full p-2"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="symthoms" className="text-sm md:text-base uppercase mb-3 block font-bold">Sintomas</label>
          <textarea
            name="symthoms"
            id="symthoms"
            value={symthoms}
            onChange={(e) => setSymthoms(e.target.value)}
            className="w-full border-2 p-2"
            placeholder="Describe los sintomas"
          />
        </div>

        <input
          type="submit"
          className="bg-sky-600 w-full py-2 text-white uppercase font-bold text-sm md:text-base hover:bg-sky-700 transition-all duration-500 cursor-pointer"
          value={patient.id ? 'Editar paciente' : 'Agregar paciente'} />
      </form>
      {/* End form */}
    </div>
  )
}

export default Form