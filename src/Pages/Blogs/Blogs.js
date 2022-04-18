import React from "react";
import "./Blogs.css";
const Blogs = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 g-lg-3">
        <div className="col">
          <div className="p-3 border border-danger bg-light" style={{height:'450px'}}>
            <h2  style={{color:'black'}}>
              Difference between authorization and authentication
            </h2>
            <p>
              Authorization is the process of granting a user access to a
              resource. Authentication is the process of verifying that a user
              is who they say they are.
            </p>
          </div>
        </div>
        <div className="col">
          <div className="p-3 border border-danger bg-light w-100" style={{height:'450px'}}>
            <h2  style={{color:'black'}}>
              Why are you using firebase? What other options do you have to
              implement authentication
            </h2>
            <p>
              Firebase is a free service that allows you to build a realtime
              database and authentication system. It is a great option for a
              small business or a startup. It is also a great option for a large
              company that needs to authenticate users. others authentication
              options include: JWT, OAuth, OpenID, SAML,Back4App AWS Amplify,
              Google, Facebook, Twitter, RxDB, Microsoft, etc.
            </p>
          </div>
        </div>
        <div className="ccol">
          <div className="p-3 border border-danger bg-light" style={{height:'450px'}}>
            <h2  style={{color:'black'}}>
              What other services does firebase provide other than
              authentication
            </h2>
            <p>
              Firebase provides other services such as hosting, email,
              messaging, etc. Firebase also provides a realtime database that
              allows you to store data in realtime. Firebase also provides a
              cloud storage service that allows you to store files in the cloud
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
