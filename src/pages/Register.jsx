import { useContext } from "react";
import useForm from "../hooks/useForm";
import { UserContext } from "../context/UserContext";

const initialValues = {
  name: "",
  lastName: "",
  email: "",
  country: "",
}

export default function Register() {
  const {form, handleChange} = useForm(initialValues);
  const { setUser } = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(form)
    console.log(form);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Enter name"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>LastName</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter lastName"
          name="lastName"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Country</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter country"
          name="country"
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
