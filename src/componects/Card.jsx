import { Button } from "react-bootstrap";

const Card = () => {
  return (
    <div className="col-md-6 mb-4">
      <div className="border border-dark p-4">
        <h1 className="text-primary fw-medium">Heroes</h1>
        <p className="fw-semibold">Hero description goes here</p>
        <div className="d-flex">
          <Button className="me-2">JavaScript</Button>
          <Button className="me-2">Angular</Button>
          <Button className="me-2">AngularJs</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
