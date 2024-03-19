import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
// providers
import { apiContext } from "../ApiProvider/ApiProvider";

type UsersContext = {
  value: string;
};

type UsersProviderProps = {
  children: React.ReactNode;
};

export const usersContext = React.createContext({} as UsersContext);

export const UsersProvider: FunctionComponent<UsersProviderProps> = ({
  children,
}) => {
  const [value, setValue] = useState("");
  const { api } = useContext(apiContext);

  const get = async () => {
    const test = api("https://jsonplaceholder.typicode.com/users");
    setValue(JSON.stringify(test));
  };

  const valueContext: UsersContext = useMemo(() => ({ value }), [value]);

  useEffect(() => {
    get();
  }, []);

  return (
    <usersContext.Provider value={valueContext}>
      {children}
    </usersContext.Provider>
  );
};
