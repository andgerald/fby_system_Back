import jwt from "jsonwebtoken";
import { results } from "../data/agentes.js";
import "dotenv/config";

const { SECRET_KEY } = process.env;

const create = (req, res) => {
  const { email, password } = req.query;
  const user = results.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    const token = jwt.sign(user, SECRET_KEY, { expiresIn: "2m" });

    res.send(`
    <body>
    <h1>Bienvenido ${user.email}</h1>
    <button  onclick="redirectToSecret('${token}')">ir a la ruta protegida</button>
        <script> 
      function redirectToSecret(token) {
        sessionStorage.setItem('token', '${token}');
        window.location.href = 'http://localhost:3000/secret?token=' + token;
      }
        </script>
    </body>
  `);
  } else {
    res.send("Usuario o contraseña incorrecta");
  }
};

const secret = (req, res) => {
  res.send(`
        <h1>Excelente!, conseguiste llegar a la ruta secreta!</h1>
        <img src="/images/giphy.gif" alt="GIF secreto">`);
};

export const controllers = {
  create,
  secret,
};
