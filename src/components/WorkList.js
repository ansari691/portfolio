import WorkEduItem from "./WorkEduItem";

const WorkList = () => {
  const workList = [
    {
      image: "./assets/images/paramlogic.png",
      position: "Software Engineer",
      duration: "2021 JAN - PRESENT",
      description: "Paramlogic is a startup based in Pune. Spring Boot, Express, NodeJs, Postgres, NextJs, Prisma are some of the technologies which I got a chance to work on here.",
    },
    {
      image: "./assets/images/tsa.png",
      position: "Backend Developer",
      duration: "2020 FEB - 2021 JAN",
      description:
        "The Schenll Apps Private Limited is a Startup based in Mumbai. Spring Boot, Express, NodeJs, React, Hibernate, JPA are some of the technologies which I got a chance to work on here.",
    },
  ];

  return (
    <div className="border-bottom" id="experience">
      <h2 className="text-center my-5">Work Experience</h2>
      <div className="p-5">
        {workList.map((work) => (
          <WorkEduItem
            image={work.image}
            name={work.name}
            position={work.position}
            duration={work.duration}
            description={work.description}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkList;
