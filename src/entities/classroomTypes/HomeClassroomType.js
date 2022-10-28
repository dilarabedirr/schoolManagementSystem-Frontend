import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function HomeClassroomType() {
  const [classroomTypes, setClassroomTypes] = useState([]);

  useEffect(() => {
    loadClassroomTypes();
  }, []);

  const loadClassroomTypes = async () => {
    const result = await axios.get(
      "http://localhost:8080/classroomTypes/getAll"
    );
    setClassroomTypes(result.data);
  };

  return (
    <div class="container">
      <div class="py-4">
        <p>Sınıf Türleri Tablosu</p>
        <table class="table shadow">
          <thead class="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Sınıf Tipi</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {classroomTypes.map((classroomType, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{classroomType.classroomTypeDescription}</td>
                <td>
                  <button class="btn btn-outline-primary mx-2">
                    Görüntüle
                  </button>
                  <button class="btn btn-outline-success mx-2">Düzenle</button>
                  <button class="btn btn-outline-danger mx-2">Kaldır</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link class="btn btn-success" to="/addClassroomType">
        Sınıf Tipi Ekle
      </Link>
    </div>
  );
}
