import { useState } from "react";

export default function useForm(initialValues) {
  const [form, setForm] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return{
    form,
    handleChange
  }
}
