import { FC, useEffect, useState } from "react";
import { User } from "../../types/User.types";
import { fetchUsers } from "../../services/User.service";
import { SelectStyled } from "./TaskUserSelectStyled";

interface UserSelectProps {
  onSelect: (userId: number) => void;
  defaultValue?: string | null;
  className?: string | null;
}

const TaskUserSelect: FC<UserSelectProps> = ({
  onSelect,
  defaultValue,
  className,
}) => {
  const [users, setUsers] = useState<User[] | null>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

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
    setSelectedUser(selectedUser as User);
    onSelect(+e.target.value);
  };

  return (
    <SelectStyled
      name="selectUser"
      onChange={handleSelect}
      value={selectedUser?.id ?? "default"}
      className={className ? className : ""}
    >
      <option value="default" disabled>
        Select user
      </option>
      {users ? (
        users.map((user) => (
          <option value={user.id} key={user.id}>
            User: {user.username}
          </option>
        ))
      ) : (
        <option value="loading">loading...</option>
      )}
    </SelectStyled>
  );
};

export default TaskUserSelect;
