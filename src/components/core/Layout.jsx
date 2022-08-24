import React from "react";

const Layout = ({
  title = "Title",
  description = "Description",
  className,
  children,
}) => {
  return (
    <div>
      <div className="mt-4 p-5 bg-light rounded layoutAnimation">
        <div className="container-fluid">
          <h1>{title}</h1>
          <p className="lead">{description}</p>
        </div>
      </div>
      <div className={className}>{children}</div>
    </div>
  );
};

export default Layout;
