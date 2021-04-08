const Badge = () => {
  return (
    <div
      className="text-center row align-items-center border p-5 mt-5"
      style={{ backgroundImage: `url("./assets/images/bg4.svg")` }}
    >
      <div className="col-md-4">
        <img
          className="img-fluid img-thumbnail"
          src="./assets/images/ibrahim.jpg"
          alt="badgeImage"
          style={{ maxHeight: 200, maxWidth: 200 }}
        />
      </div>
      <div className="col-md-8 text-md-left">
        <h1>Ibrahim Ansari</h1>
        <p className="m-0">Full Stack Developer</p>
        <p>Backend Enthusiast</p>
        <div className="d-flex flex-wrap justify-content-around border shadow p-3 text-center">
          <div>
          <b className="mr-1">1.5+</b> <span>Years Experince</span>
          </div>
          <div>
          <b className="mr-1">14+</b> <span>Completed Projects</span>
          </div>
          <div>
          <b className="mr-1">10+</b> <span>Technologies</span>
          </div>
          <div>
          <b className="mr-1">2</b> <span>Programming Languages</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Badge;
