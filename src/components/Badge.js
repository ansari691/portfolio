const Badge = () => {
  return (
    <div className="text-center row align-items-center border p-5" style={{backgroundImage : `url("./assets/images/bg2.svg")`}}>
      <div className="col-md-4">
      <img
        className="img-fluid img-thumbnail img-thumbnail"
        src="./assets/images/ibrahim.jpg"
        alt="badgeImage"
        style={{ maxHeight : 200, maxWidth : 200}}
      />
      </div>
      <div className="col-md-8 text-md-left">
        <h1>Ibrahim Ansari</h1>
        <p className="m-0">Full Stack Developer</p>
        <p>Backend Enthusiast</p>
      </div>
    </div>

    
  );
};

export default Badge;
