import { useState, useEffect } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import PatientList from './components/PatientList'

function App() {
  // Patients
  const [patients, setPatients] = useState(JSON.parse(localStorage.getItem('patients')) ?? []);
  // Patient
  const [patient, setPatient] = useState({});
  // Delete patient
  const deletePatient = (id) => {
    setPatients(old => old.filter((item) => item.id !== id));
  }
  // LocalStorage
  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients));
  }, [patients])
  return (
    <div className="container mx-auto mt-10 px-4">
      <Header />
      <div className="md:flex gap-8">
        <Form
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <PatientList
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient} />
      </div>
    </div>
  )
}

export default App
