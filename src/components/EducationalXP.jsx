
function EducationalXP({handleSubmitEXP, editingEducationalIndex, formData, handleEducationEdit}){
    return(
        <form onSubmit={handleSubmitEXP}>
            <section>
            <h2 className='text-3xl my-3'>Educational Experience</h2>
            <div>
                <label htmlFor="school">School Name: </label>
                <input 
                required
                type="text" 
                name='school'
                defaultValue={editingEducationalIndex > -1 ? formData.education[editingEducationalIndex]?.school : ""}
                />
            </div>
            <div>
                <label htmlFor="title">Title: </label>
                <input 
                required
                type="text" 
                name='title'
                defaultValue={editingEducationalIndex > -1 ? formData.education[editingEducationalIndex]?.title || "" : ""}
                />
            </div>
            <div>
                <label htmlFor="date-study">Date of Study: </label>
                <input 
                type="number" min="1900" max="2099" step="1" name="fromEXP" required
                defaultValue={editingEducationalIndex > -1 ? formData.education[editingEducationalIndex]?.fromEXP || "" : ""}
                />
                <span> - </span>
                <input 
                type="number" min="1900" max="2099" step="1" name="toEXP" required
                defaultValue={editingEducationalIndex > -1 ? formData.education[editingEducationalIndex]?.toEXP || "" : ""}
                />
            </div>
            <div className='mt-4'>
                <button type="button" onClick={handleEducationEdit}>Edit</button>
                <button type="submit">Submit</button>
            </div>
            </section>
        </form>
    )
}

export default EducationalXP