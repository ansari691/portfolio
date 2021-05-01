import WorkEduItem from "./WorkEduItem";

const EducationList = () => {
    const educationList = [
        {
            image : "./assets/images/ycmou.png",
            position : "Master Of Computer Applications",
            duration : "2020 DEC - 2022 DEC",
            description : "Pursuing MCA which is due in 2022."
        },
        {
            image : "./assets/images/ycmou.png",
            position : "Bachelor Of Computer Applications",
            duration : "2017 JUN - 2020 DEC",
            description : "Passed all the exams with first class distinction and with a 7.8 pointer."
        }
    ]

    return ( 
        <div className="border-bottom" id="education">
            <h2 className="text-center my-5">Education</h2>
            <div className="p-5">
            {educationList.map(education => <WorkEduItem image={education.image} name={education.name} position={education.position} duration={education.duration} description={education.description}/>)}
            </div>
        </div>
     );
}
 
export default EducationList;