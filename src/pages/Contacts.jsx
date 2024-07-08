import { useContext } from "react";
import Table from "../components/Table/Table";
import { UserContext } from "../context/UserContext";

export default function Contacts() {
  const { user } = useContext(UserContext);
  return (
    <section>
      <Table user={user} />
    </section>
  );
}
