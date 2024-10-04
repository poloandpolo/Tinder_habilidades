require('dotenv').config();
const express = require('express');
const cors = require('cors'); // Importa el paquete cors
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middlewares
app.use(cors()); // Habilita CORS para todas las rutas
app.use(express.json()); // Para parsear JSON en las solicitudes

// Rutas
app.use('/api', userRoutes);

// Servidor escuchando en el puerto 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
