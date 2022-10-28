import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            School Management System
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="d-flex">
            <button class="btn btn-outline-light me-2">Kayıt Ol</button>
            <button class="btn btn-outline-light">Giriş Yap</button>
          </div>
        </div>
      </nav>
    </div>
  );
}
