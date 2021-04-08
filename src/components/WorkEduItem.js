const WorkEduItem = (props) => {
  return (
    <div className="px-lg-5">
      <div className="row border mb-5 p-2 shadow-lg text-center text-md-left align-items-center">
        <div className="col-md-3 text-center border">
          <img
            className="img-fluid"
            src={props.image}
            alt="placeLogo"
            style={{ width: "auto", height: 100 }}
          />
        </div>
        <div className="col-md-9 p-3">
          <h3 className="mb-0">{props.position}</h3>
          <small>{props.duration}</small>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkEduItem;
