import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div class="single">
      <div class="container">
        <div class="section-header">
          <h2>1.Difference between Authorization and Authentication</h2>
        </div>
        <div class="row">
          <div class="col-12">
            <p>
              Authentication is the act of validating that users are whom they
              claim to be. This is the first step in any security process.{" "}
              Authorization in system security is the process of giving the user
              permission to access a specific resource or function. This term is
              often used interchangeably with access control or client
              privilege.
            </p>
          </div>
        </div>
        <div class="section-header">
          <h2>
            2.Why are you using firebase?
            <br /> What other options do you have to implement authentication?
          </h2>
        </div>
        <div class="row">
          <div class="col-12">
            <p>
              Firebase Authentication makes it easier to get your users
              signed-in without having to understand the complexities behind
              implementing your own authentication system.
            </p>
          </div>
        </div>
        <div class="section-header">
          <h2>
            3. What other services does firebase provide other than
            authentication?
          </h2>
        </div>
        <div class="row">
          <div class="col-12">
            <p>
              There are many services which Firebase provides, Most useful of
              them are: 
            </p>
            <ul class="list-group">
              <li class="list-group-item">Cloud Firestore</li>
              <li class="list-group-item">Cloud functions</li>
              <li class="list-group-item">Authentication</li>
              <li class="list-group-item">Hosting</li>
              <li class="list-group-item">Cloud Storage</li>
              <li class="list-group-item">Google Analytics</li>
              <li class="list-group-item">Predictions</li>
              <li class="list-group-item">Cloud Messaging</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
