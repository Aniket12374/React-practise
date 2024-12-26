import axios from "axios";
// import React, { useEffect, useState } from "react";
import { useEffect, useState } from "react";

const Axiospostapi = () => {
  const data = {
    firstname: "",
    lastname: "",
  };
  const [formData, setFormData] = useState(data);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/users", formData)
      .then((response) => {
        console.log(response);
      });
  };

  // useEffect(()=>{
  //   const handleapi = async()=>{
  //     try{
  //     const response = await ("https://jsonplaceholder.typicode.com/users");
  //     console.log(response);

  //     }catch(error){
  //       console.log('error:',error)
  //     }

  //   }
  //   handleapi();
  // },[])

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put("https://jsonplaceholder.typicode.com/users/1", formData)
      .then((response) => {
        console.log(response);
      });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .delete("https://jsonplaceholder.typicode.com/users/1", formData)
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="w-full ">
        <label className="font-bold text-blue-400">Firstname:</label>

        <input
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
        ></input>
        <label>Lastname:</label>

        <input
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
        ></input>

        <button type="submit">Submit</button>
        <br></br>
        <button type="button" onClick={handleUpdate}>
          Update
        </button>
        <br></br>
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </form>
    </div>
  );
};

export default Axiospostapi;
