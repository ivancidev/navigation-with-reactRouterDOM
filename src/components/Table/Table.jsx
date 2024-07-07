export default function Table({user}) {
  const {id, name, lastName, email, country} = user;
  return (
    <>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col">Country</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{id}</th>
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
