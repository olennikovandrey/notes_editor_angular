export interface IUsersData {
  login: string,
  password: string
};

export const registeredUsers: IUsersData[] = [ //имитация зарегистрированных пользователей
  {
    login: "aaaaa",
    password: "aaaaa111"
  },
  {
    login: "bbbbb",
    password: "bbbbb222"
  },
  {
    login: "ccccc",
    password: "ccccc333"
  },
  {
    login: "ddddd",
    password: "ddddd444"
  },
  {
    login: "eeeee",
    password: "eeeee555"
  },
];
