/* ESTILO GENERAL */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f4f4f4;
  color: #333;
}

/* HEADER */
header {
  background: #1e1e1e;
  color: white;
  padding: 20px;
  text-align: center;
}

/* CONTENEDOR */
.container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  padding: 20px;
}

/* BLOG */
.blog {
  background: white;
  padding: 20px;
  border-radius: 8px;
}

.post {
  margin-bottom: 20px;
}

.post h2 {
  color: #444;
}

/* RADIO */
.radio {
  background: #111;
  color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

.radio button {
  padding: 10px 20px;
  font-size: 16px;
  background: #ff004c;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

.radio button:hover {
  background: #e60044;
}

/* INFO */
.info {
  margin-top: 15px;
  font-size: 14px;
}

/* FOOTER */
footer {
  background: #1e1e1e;
  color: white;
  text-align: center;
  padding: 10px;
}