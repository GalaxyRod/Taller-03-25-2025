const express = require("express");
const router = express.Router();
const { suscriptores, intereses: InteresesModel } = require("../models");

// Obtener intereses
router.get("/intereses", async (req, res) => {
  try {
    const interesesList = await InteresesModel.findAll();
    res.json(interesesList);
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Error al obtener intereses." });
  }
});

// Crear suscriptor con intereses
router.post("/suscriptores", async (req, res) => {
  const { nombre, email, intereses } = req.body;

  if (!nombre || !email || !Array.isArray(intereses)) {
    return res.status(400).json({ success: false, message: "Datos incompletos." });
  }

  try {
    const nuevo = await suscriptores.create({ nombre, email, fecha_registro: new Date() });
    await nuevo.setIntereses(intereses);
    
    res.status(201).json({ success: true, message: "Suscriptor registrado exitosamente." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Error al registrar suscriptor." });
  }
});

module.exports = router;