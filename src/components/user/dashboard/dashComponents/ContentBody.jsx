import React from "react";
import Card from "../../../common/Card";

import { getCurrentUser } from "../../../helper/helper";

function ContentBody(props) {
  const user = getCurrentUser();
  const isAdmin = user && user.role === 1;
  const title = user.role === 1 ? "Admin Information" : "User Information";
  const userRole = user.role === 1 ? "Admin" : "Registered User";

  const userInfo = [
    { keys: `${user.name}` },
    { keys: `${user.email}` },
    { keys: `${userRole}` },
  ];
  const adminInfo = [
    { keys: `${user.name}` },
    { keys: `${user.email}` },
    { keys: `${userRole}` },
  ];
  const info = isAdmin ? adminInfo : userInfo;

  return (
    <div>
      <Card title={title}>
        <ul className="list-group">
          {info.map((i) => (
            <li key={i.keys} className="list-group-item">
              {i.keys}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}

export default ContentBody;
