import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link} from "react-router-dom";

function Home() {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(" https://65d26ec3987977636bfc55ae.mockapi.io/users")
    
         .then((res) => setData(res.data))
    
      .catch((err) => console.log(err));
      
  }, []);


  const handleDelete = (id) => {
    const confirm = window.confirm("would you like to delete?");
    if (confirm) {
      axios
        .delete("https://65d26ec3987977636bfc55ae.mockapi.io/users/" + id)
        .then(res => {
          window.location.reload();
        })  
        .catch((err) => console.log(err));
    }
  }
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100" style={{backgroundColor:'skyblue'}}>
      <h1>List of Users</h1>
      <div className="w-75 rounded border shodow p-4" style={{color:'white',backgroundColor:'gray',overflow:'scroll'}}>
        <div className="d-flex justify-content-end" >
          <Link to="/create" className="btn btn-success">
            Add +
          </Link>
        </div>
        <table className="table table-striped" >
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <td>{d.i}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.phone}</td>
                <td>
                  <Link
                    to={`/read/${d.id}`}
                    className="btn btn-sm btn-info me-2"
                  >
                    Read
                  </Link>
                  <Link
                    to={`/update/${d.id}`}
                    className="btn btn-sm btn-primary me-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={(e) => handleDelete(d.id)}
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
