import React, {FC, useEffect, useState} from "react";
import {SelectStyled} from "./TaskUserSelectStyled";
import {User, usersService} from "../../entities/user";

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
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    const defaultValueUser = usersService.users?.state.find(
      (user) => user.username === defaultValue
    );
    if (defaultValueUser) {
      setSelectedUser(defaultValueUser);
      onSelect(defaultValueUser.id);
    }
  }, []); // eslint-disable-line

  const handleSelect: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const selectedUser = usersService.users?.state.find((user) => user.id === +e.target.value);
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
      {usersService.users ? (
        usersService.users?.state.map((user) => (
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
