import React, { useEffect, useState } from "react";
import { IUser } from "../../types/User.types";
import "./TaskUserSelect.css";
import { fetchUsers } from "../../services/User.service";

interface IUserSelectProps {
  onSelect: (userId: number) => void;
  defaultValue?: string | null;
  className?: string | null;
}

const TaskUserSelect: React.FC<IUserSelectProps> = ({
  onSelect,
  defaultValue,
  className,
}) => {
  const [users, setUsers] = useState<IUser[] | null>(null);
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);

  useEffect(() => {
    fetchUsers()
      .then((users) => {
        setUsers(users);
        const defaultValueUser = users.find(
          (user) => user.username === defaultValue
        );
        if (defaultValueUser) {
          setSelectedUser(defaultValueUser);
          onSelect(defaultValueUser.id);
        }
      })
      .catch((e: Error) => {
        console.log("User fetch error " + e);
      });
  }, []); // eslint-disable-line 

  const handleSelect: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const selectedUser = users?.find((user) => user.id === +e.target.value);
    setSelectedUser(selectedUser as IUser);
    onSelect(+e.target.value);
  };

  return (
    <select
      name="selectUser"
      className={`task-user-select ${className}`}
      onChange={handleSelect}
      value={selectedUser?.id ?? "default"}
    >
      <option value="default" disabled>Select user</option>
      {users ? (
        users.map((user) => (
          <option value={user.id} key={user.id}>
            User: {user.username}
          </option>
        ))
      ) : (
        <option value="loading">loading...</option>
      )}
    </select>
  );
};

export default TaskUserSelect;
