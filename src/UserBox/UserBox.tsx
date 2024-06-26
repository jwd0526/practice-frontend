import React from "react";

import { User } from "../App.tsx";

interface UserProps {
  user: User;
}

const UserBox: React.FC<UserProps> = ({ user }) => {
  return <div className="user-div"></div>;
};

export default UserBox;
