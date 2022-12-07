import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="cardWrap  col-md-4 text-start">
      <Card>
        <Card.Img
          variant="top"
          className="img-fluid"
          src="https://cheerup.theme-sphere.com/magazine/wp-content/uploads/sites/7/2016/05/shutterstock_169856057-1170x780.jpg"
        />
        <Card.Body>
          <Card.Title>
            Small Business Owners Are Full of Passion And Smiles
          </Card.Title>
          <div className="blogInfo">
            <div className="blogName">
              <h6>
                BY<span>Shahin Ahmed</span>
              </h6>
            </div>
            <div className="blogDate">
              <h6> - May 15, 2016</h6>
            </div>
          </div>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Blog;