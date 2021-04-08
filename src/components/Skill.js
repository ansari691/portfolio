const Skill = (props) => {
  return (
    <div className="text-center col-lg-2 col-md-3 col-sm-4">
      <img className="img-fluid mb-2" src={props.image} alt="springLogo" style={{ width : "auto", height : 100}}/>
      <p>{props.name}</p> 
    </div>
  );
};

export default Skill;
