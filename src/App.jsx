import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./componects/card";
import { Pagination } from "react-bootstrap";
import ProfileDetaile from "./ProfileDetaile";
import { useState } from "react";

function App() {
  const [activePage, setActivePage] = useState(1);

  const handlePaginationClick = (pageNumber) => {
    setActivePage(pageNumber);
    // Perform additional actions on page change if needed
  };

  return (
    <div className="container">
      <ProfileDetaile />
      <div className="d-flex align-items-center fw-medium">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            height="15"
            width="15"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
            />
          </svg>
        </span>{" "}
        <span className="ps-2">https://github.com/saiful-islam-dev</span>
      </div>

      <div className="py-4">
        <div className="row">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <Pagination>
          <Pagination.Prev
            onClick={() => handlePaginationClick(activePage - 1)}
          />
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((page) => (
            <Pagination.Item
              key={page}
              active={page === activePage}
              onClick={() => handlePaginationClick(page)}
            >
              {page}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() => handlePaginationClick(activePage + 1)}
          />
        </Pagination>
      </div>
      <div className="d-flex justify-content-between">
        <Pagination.First onClick={() => handlePaginationClick(1)} />
        <Pagination.Last onClick={() => handlePaginationClick(9)} />
      </div>
    </div>
  );
}
export default App;
