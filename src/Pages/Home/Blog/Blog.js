import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Blog.css";
import { Link } from "react-router-dom";

const Blog = ({ data }) => {
  const { blogHeading, src, name, description, date } = data;
  const newDate = new Date(date);
  return (
    <div className="cardWrap  col-md-4 text-start mb-5">
      <Card>
        <Card.Img variant="top" className="img-fluid" src={src} />
        <Card.Body>
          <Card.Title>{blogHeading}</Card.Title>
          <div className="blogInfo">
            <div className="blogName">
              <h6>
                BY<span>{name}</span>
              </h6>
            </div>
            <div className="blogDate">
              <h6> - {newDate.toDateString()}</h6>
            </div>
          </div>
          <Card.Text>{description.slice(0, 200)}....</Card.Text>
          <div className="text-center pb-3 pt-1">
            <Link to="blog-details">
              <Button variant="primary">Read More</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Blog;
