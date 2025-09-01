import EducationalXP from "./components/EducationalXP"

function Cv({formData}){
    return(
    <>
        <h1 className="text-4xl text-center font-bold">CV</h1>
        <p id="name-txt" className="text-2xl my-1 text-center">{formData.general?.name || "Juanito Alcachofa"}</p>
        <span className="flex align-middle justify-center">
            <p id="phone-txt" className="mr-6">{formData.general?.email || "juanito.alcachofa@email.com"}</p>
            <p id="email-txt">{formData.general?.phone || "1234-5678"}</p>
        </span>
        

        <p id="name-txt" className="text-2xl mt-4 font-bold">Educational Experience</p>
        
        {formData.education?.map((edu, index) => (
            <div key={`e${index}`} className="my-2">
                <span className="flex align-middle justify-between">
                    <p id="organization-1" className="mr-6 font-semibold">{edu?.school}</p>
                    <p id="time-worked-1">{edu?.fromEXP} - {edu?.toEXP}</p>
                </span>
                <p id="position-title-1" className="mr-6">{edu?.title}</p>
            </div>
        ))
        }
        
        <p id="name-txt" className="text-2xl mt-4 font-bold">Practical Experience</p>
        
        {formData.experience?.map((exp, index) => (
            <div key={`x${index}`}>

                <span className="flex align-middle justify-between mt-3">
                    <p id="organization-1" className="mr-6 text-lg font-bold">{exp?.company}</p>
                    <p id="time-worked-1">{exp?.fromPXP} - {exp?.toPXP}</p>
                </span>
                    <p id="position-title-1" className="mr-6 ml-2">{exp?.position}</p>
                    <p id="position-title-1" className="mr-6 ml-2 mt-1 font-bold">Actividades</p>
                    <p id="position-title-1" className="mr-6 ml-2">{exp?.activities}</p>
            </div>
        ))}

    </>
    )
}

export default Cv