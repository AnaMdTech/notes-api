# 📝 Notes API

A simple RESTful API built with **Node.js** and **Express.js** to manage notes.
This is part of my **backend learning journey (Phase 1 – Week 1)**.

---

## 🚀 Features

* Create, Read, Update, and Delete notes (CRUD).
* In-memory storage (later will be replaced with a database).
* JSON-based REST API.

---

## 🛠️ Tech Stack

* **Node.js** – JavaScript runtime.
* **Express.js** – Web framework.
* **Postman/Thunder Client** – API testing tool.

---

## 📂 Project Setup

### 1. Clone Repository

```bash
git clone https://github.com/AnaMdTech/notes-api.git
cd notes-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Server

```bash
node server.js
```

Server will start on:
👉 `http://localhost:5000`

---

## 📌 API Endpoints

### 🔹 Get all notes

```http
GET /notes
```

**Response**

```json
[
  { "id": 1, "title": "Learn Node.js", "content": "Study Express basics" },
  { "id": 2, "title": "Practice React", "content": "Build components" }
]
```

---

### 🔹 Get single note

```http
GET /notes/:id
```

---

### 🔹 Create a note

```http
POST /notes
```

**Body**

```json
{
  "title": "New Note",
  "content": "This is my first note"
}
```

---

### 🔹 Update a note

```http
PUT /notes/:id
```

---

### 🔹 Delete a note

```http
DELETE /notes/:id
```

---

## ✅ Learning Outcomes

From this project I learned:

* Setting up a Node.js + Express server.
* Handling routes and CRUD operations.
* Using middleware and JSON parsing.
* Testing APIs with Postman.