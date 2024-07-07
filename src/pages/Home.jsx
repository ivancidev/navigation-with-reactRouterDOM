import { useContext } from "react";
import Table from "../components/Table/Table";
import { UserContext } from "../context/UserContext";

export default function Home() {
  const { user } = useContext(UserContext);
  return (
    <>
    <Table user={user}  />
    </>
  )
}
