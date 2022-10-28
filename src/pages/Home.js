import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div class="container">
      <div class="py-4">
        <Link class="btn btn-dark mx-4" to="/homeClassroomType">
          Sınıf Tipleri Sayfasına Git
        </Link>
        <button class="btn btn-dark">Sınıflar Sayfasına Git</button>
      </div>
    </div>
  );
}
