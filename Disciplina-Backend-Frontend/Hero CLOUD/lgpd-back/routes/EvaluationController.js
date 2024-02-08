import express from 'express';
let router = express.Router();

import evaluationService from "../services/EvaluationService.js";

router.post("/addevaluation", async function (req, res) {
    const evaluationModel = {
      name: req.body.name,
    };
  
    const evaluation = await evaluationService.saveEvaluation(evaluationModel);
    return res.status(200).json(evaluation);
  });
  
  router.get("/getAllEvaluations", async function (req, res) {
      const allEvaluations = await evaluationService.getAllEvaluations();
      return res.status(200).json(allEvaluations);
  });
  
  router.get("/evaluation/:id", async function (req, res) {
      const evaluation = await evaluationService.getEvaluationById(req.params.id);
      return res.status(200).json(evaluation);
  });
  
  router.delete("/deleteEvaluation/:id", async function (req, res) {
      const evaluation = await evaluationService.deleteEvaluationById(req.params.id);
      return res.status(200).json(evaluation);
  });
  
  router.put("/updateEvaluation/:id", async function (req, res) {
      const evaluationModel = {
          name: req.body.name,
      };
  
      const evaluation = await evaluationService.updateEvaluationById(req.param.id, evaluationModel);
      return res.status(200).json(evaluation);
    });
  

export default router;