import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Read() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
    .get(`https://65d26ec3987977636bfc55ae.mockapi.io/users/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  },[id]);
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center " style={{backgroundColor:'skyblue'}}>
      <div className="w-50 border shadow pb-5 px-5 pt-3 rounded" style={{color:'#fff',backgroundColor:'#000'}}>
        <h3>User Detail</h3>
        <div className=" mb-2">
          <strong>Name:{data.name}</strong>
        </div>
        <div className=" mb-2">
          <strong>Email:{data.email}</strong>
        </div>
        <div className=" mb-3">
          <strong>Phone:{data.phone}</strong>
        </div>
        <Link to={`/update/${id}`} className="btn btn-success">
          Edit
        </Link>
        <Link to="/" className="btn btn-primary ms-3">
          Back
        </Link>
      </div>
    </div>
  );
}
export default Read;
