import { UserContext } from "./UserContext";

const user = {
    id: 1,
    name: "Marco",
    lastName: "Rocha",
    email: "marco@gmail.com",
    country: "Colombia"
}

export default function UserProvider({ children }) {
  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  )
}
