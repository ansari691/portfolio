import Skill from "./Skill";

const Skills = () => {

    const skills = [
        {
            name : "Spring Boot",
            image : "./assets/images/springBoot.png"
        },
        {
            name : "NodeJs",
            image : "./assets/images/nodeJs.jpg"
        },
        {
            name : "ExpressJs",
            image : "./assets/images/expressJs.png"
        },
        {
            name : "NextJs",
            image : "./assets/images/nextJs.png"
        },
        {
            name : "React",
            image : "./assets/images/reactJs.jpg"
        },
        {
            name : "Bootstrap",
            image : "./assets/images/bootstrap.jpg"
        },
        {
            name : "Sql",
            image : "./assets/images/sql.jpg"
        },
        {
            name : "Postgres",
            image : "./assets/images/postgres.png"
        },
        {
            name : "MongoDB",
            image : "./assets/images/mongoDB.jpg"
        },
        {
            name : "Firebase",
            image : "./assets/images/firebase.png"
        }
    ]

    return ( 
        <div className="border-bottom" style={{ backgroundImage: `url("./assets/images/bg4.svg")` }}>
            <div className="text-center">
                <h2 className="my-5">Technologies</h2>
            </div>
            <div className="row p-2 justify-content-center">
                {skills.map(skill => <Skill name={skill.name} image={skill.image}/>)} 
            </div>
        </div>
        
     );
}
 
export default Skills;