
function PracticalXP({handleSubmitPXP, editingPracticalIndex, formData, handlePracticalEdit}){
    return(
        <form onSubmit={handleSubmitPXP}>
          <section>
            <h2 className='text-3xl mb-2 mt-6'>Practical Experience</h2>
            <div>
              <label htmlFor="company">Company Name: </label>
              <input 
                type="text" 
                name='company'
                defaultValue={editingPracticalIndex > -1 ? formData.experience[editingPracticalIndex]?.company || "" : ""}
                required
              />
            </div>
            <div>
              <label htmlFor="position">Position Title: </label>
              <input 
                type="text" 
                name='position'
                defaultValue={editingPracticalIndex > -1 ? formData.experience[editingPracticalIndex]?.position || "" : ""}
                required
              />
            </div>
            <div>
              <label htmlFor="from-pxp">Date of Work: </label>
              <input 
                type="number" min="1900" max="2099" step="1" name='fromPXP' required
                defaultValue={editingPracticalIndex > -1 ? formData.experience[editingPracticalIndex]?.fromPXP || "" : ""}
              />
              <span> - </span>
              <input 
                type="number" min="1900" max="2099" step="1" name='toPXP' required
                defaultValue={editingPracticalIndex > -1 ? formData.experience[editingPracticalIndex]?.toPXP || "" : ""}
              />
            </div>
            <div>
              <label htmlFor="activities">Activities: </label>
              <textarea 
                name='activities' required
                defaultValue={editingPracticalIndex > -1 ? formData.experience[editingPracticalIndex]?.activities || "" : ""}
              />
            </div>
          <section className='mt-4 flex justify-end gap-5'>
            <button type="button" onClick={handlePracticalEdit}>Edit</button>
            <button type="submit">Submit</button>
          </section>
          </section>
      </form>
    )
}

export default PracticalXP