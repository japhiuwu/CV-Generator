import { AddBtn, RemoveBtn } from './components/AddBtn'
import PracticalXP from './components/PracticalXP';
import EducationalXP from './components/EducationalXP';
import { useState } from 'react'

export default function Form({ handleChange, setFormData, formData }) {
  const [editingEducationalIndex, setEditingEducationalIndex] = useState(-1);
  const [editingPracticalIndex, setEditingPracticalIndex] = useState(-1);

  return (
    <>
      <form>
        {/* GENERAL INFO */}
        <section className='general-information'>
          <h2 className='text-3xl my-2'>General Information</h2>
          <div>
            <label htmlFor="name">Name: </label>
            <input 
              type="text" 
              name='name' 
              onChange={(e) => handleChange("general", "name", e.target.value)} 
            />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input 
              type="text" 
              name='email' 
              onChange={(e) => handleChange("general", "email", e.target.value)} 
            />
          </div>
          <div>
            <label htmlFor="phone">Phone: </label>
            <input 
              type="text" 
              name='phone' 
              onChange={(e) => handleChange("general", "phone", e.target.value)} 
            />
          </div>
        </section>
        </form>
        
        {/* EDUCATION */}
        <EducationalXP handleSubmitEXP={handleSubmitEXP} editingEducationalIndex={editingEducationalIndex} formData={formData} handleEducationEdit={handleEducationEdit}/>

        {/* EXPERIENCE */}
        <PracticalXP handleSubmitPXP={handleSubmitPXP} editingPracticalIndex={editingPracticalIndex} formData={formData} handlePracticalEdit={handlePracticalEdit}/>
    </>
  )
  function handleSubmitEXP(e) {
    e.preventDefault()
    const school = e.target.school.value
    const title = e.target.title.value
    const fromEXP = e.target.fromEXP.value
    const toEXP = e.target.toEXP.value

    if(editingEducationalIndex == -1){
      setFormData(prev => ({
        ...prev,
        education: [...prev.education, { school, title, fromEXP, toEXP }]
      }));      
    }
    else{
      setFormData(prev => {
      const updatedData = { school, title, fromEXP, toEXP }
      const newPracticalData = [...prev.education]
      newPracticalData[editingEducationalIndex] = updatedData
      
      return{
        ...prev,
        education: newPracticalData
      }
      })

      setEditingEducationalIndex(-1)
    }

    e.target.reset();
  }

  function handleSubmitPXP(e){
    e.preventDefault()
    const company = e.target.company.value
    const position = e.target.position.value
    const fromPXP = e.target.fromPXP.value
    const toPXP = e.target.toPXP.value
    const activities = e.target.activities.value

    if(editingPracticalIndex == -1){
      setFormData(prev => ({
        ...prev,
        experience: [...prev.experience, { company, position, fromPXP, toPXP, activities }]
      }));
    }
    else {
      setFormData(prev => {
        const updatedData = { company, position, fromPXP, toPXP, activities }
        const newExperienceData = [...prev.experience]
        newExperienceData[editingPracticalIndex] = updatedData
        
        return{
          ...prev,
          experience: newExperienceData
        }
      })

      setEditingPracticalIndex(-1)
    }

    e.target.reset();
  }

  function handleEducationEdit(){
    const EducationalLength = formData.education?.length
    if(editingEducationalIndex < EducationalLength-1){
      setEditingEducationalIndex(editingEducationalIndex+1);
    }
    else{
      setEditingEducationalIndex(-1);
    }
      console.log(editingEducationalIndex)
  }

  function handlePracticalEdit(){
    const PracticalLength = formData.experience?.length
      
    if(editingPracticalIndex < PracticalLength-1){
      setEditingPracticalIndex(editingPracticalIndex+1);
    }
    else{
      setEditingPracticalIndex(-1);
    }
      console.log(editingPracticalIndex)
      console.log(PracticalLength)
  }
}