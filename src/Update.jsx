import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Update() {
  // const [data, setData] = useState([]);
  const { id } = useParams();
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });
const navigate=useNavigate();
  useEffect(() => {
    axios
    .get(`https://65d26ec3987977636bfc55ae.mockapi.io/users/${id}`)
      .then((res) => {setValues(res.data)})
      .catch((err) => console.log(err));
  },[id]);

  const handleUpdate=(event)=>{
    event.preventDefault();
    axios
    .put(" https://65d26ec3987977636bfc55ae.mockapi.io/users/"+id,values)
    .then((res) => {
     console.log(res);
     navigate('/');
    })
    .catch((err) => console.log(err));
 }
  
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center " style={{backgroundColor:'skyblue'}}>
      <div className="w-50 border  shadow px-5 pt-3 pb-5 rounded" style={{color:'white',backgroundColor:'#000'}}>
        <h1>Update User</h1>

        <form onSubmit={handleUpdate}>
          <div className="mb-2">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Name"
              value={values.name}
              onChange={e=>setValues({...values,name:e.target.value})}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Email"
              value={values.email}
              onChange={e=>setValues({...values,email:e.target.value})}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="phone">Phone:</label>
            <input
              type="phone"
              name="[phone]"
              className="form-control"
              placeholder="Enter Phone no"
              value={values.phone}
              onChange={e=>setValues({...values,phone:e.target.value})}
            />
          </div>
          <br />
          <button className="btn btn-success">Update</button>
          <Link to="/" className="btn btn-primary ms-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Update;
