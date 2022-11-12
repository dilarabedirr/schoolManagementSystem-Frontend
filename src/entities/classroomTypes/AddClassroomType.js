import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddClassroomType() {
  let navigate = useNavigate();

  const [classroomType, setClassroomType] = useState({
    classroomTypeDescription: "",
  });

  const { classroomTypeDescription } = classroomType;

  const onInputChange = (e) => {
    setClassroomType({
      ...classroomType,
      [e.target.classroomTypeDescription]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/classroomTypes/add", classroomType);
    navigate("/homeClassroomType");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-5 shadow">
          <h2 className="text-center mb-4">Sınıf Tipi Ekle</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                name="classroomTypeDescription"
                value={classroomTypeDescription}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
