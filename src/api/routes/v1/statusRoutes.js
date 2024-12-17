const express = require('express');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Status
 *   description: API status check endpoint
 */

/**
 * @swagger
 * /v1/status:
 *   get:
 *     summary: Check the API status
 *     tags: [Status]
 *     responses:
 *       200:
 *         description: API is operational
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: true
 */
router.get('/', (req, res) => {
  res.json({ status: true });
});

module.exports = router;
