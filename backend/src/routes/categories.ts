import { Router } from 'express';
import pool from '../db';

const router = Router();

// Get all categories
router.get('/', async (_req, res) => {
  try {
    const result = await pool.query('SELECT * FROM categories');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching categories' });
  }
});

export default router;