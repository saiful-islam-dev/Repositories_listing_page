import pimg from "./assets/blank-profile-circle.png";

const ProfileDetaile = () => {
  return (
    <div className="row py-4">
      <div className="col-md-2">
        <div
          className="border border-black rounded-circle"
          style={{ height: "140px", width: "140px" }}
        >
          <img src={pimg} alt="image" className="img-fluid" />
        </div>
      </div>
      <div className="col-md-10 ps-4">
        <h1>John Doe</h1>
        <h6>Bio goes here</h6>
        <div className="d-flex align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            height="20"
            width="20"
          >
            <path
              fillRule="evenodd"
              d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
              clipRule="evenodd"
            />
          </svg>
          <span className="ps-3 fw-medium">Orlando</span>
        </div>
        <p className="fw-medium">
          Twitter <span>https://twitter.com/steveschoger</span>
        </p>
      </div>
    </div>
  );
};

export default ProfileDetaile;
