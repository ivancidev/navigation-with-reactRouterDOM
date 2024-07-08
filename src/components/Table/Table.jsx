export default function Table({user}) {
  const { name, lastName, email, country} = user;
  return (
    <>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col">Country</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{lastName}</td>
            <td>{email}</td>
            <td>{country}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
