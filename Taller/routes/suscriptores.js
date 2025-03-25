const express = require("express");
const router = express.Router();
const { Suscriptor, Interes } = require("../models");
const { Op } = require("sequelize");

// Ver todos los suscriptores

    router.get('/', function(req, res, next) {
        Suscriptor.findAll({
            attributes: {exclude: ["updatedAt"]}
        })
        .then(subs => {
            res.render('suscriptores', { title: 'suscriptores', arrsubs: subs });
        })
        .catch(err => res.status(400).send(err))
    
    });


// Vista de un solo suscriptor por ID
router.get("/:id", async (req, res) => {
  try {
    const suscriptor = await Suscriptor.findByPk(req.params.id, { include: Interes });
    if (!suscriptor) return res.status(404).send("Suscriptor no encontrado");
    res.render("suscriptor", { suscriptor });
  } catch (error) {
    console.error("Error al obtener el suscriptor:", error);
    res.status(500).send("Error interno del servidor");
  }
});

// Filtro por fecha
router.get("/filtro/rango", async (req, res) => {
  const { inicio, fin } = req.query;

  // Validación de fechas
  if (!inicio || !fin) return res.status(400).send("Fechas requeridas");

  try {
    const suscriptores = await Suscriptor.findAll({
      where: {
        fecha_registro: {
          [Op.between]: [new Date(inicio), new Date(fin)],
        },
      },
      include: Interes,
    });

    res.render("suscriptores", { suscriptores });
  } catch (error) {
    console.error("Error al filtrar suscriptores por rango de fechas:", error);
    res.status(500).send("Error interno del servidor");
  }
});

module.exports = router;