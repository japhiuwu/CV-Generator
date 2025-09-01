import { useState } from 'react'
import './styles/App.css'
import Form from './form'
import Cv from './Cv'

function App() {
    const [formData, setFormData] = useState({
    general: {
      name: "",
      email: "",
      phone: "",
    },
    education:[],
    experience: [],
  });

  const handleChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  return (
    <div className='flex flex-row w-screen'>
      <div className='w-1/2 px-12 text-ce'>
        <Form handleChange={handleChange} setFormData={setFormData} formData={formData}/>
      </div>
      <div className='w-1/2 px-12'>
        <Cv formData={formData}/>
      </div>
    </div>
  )
}


export default App