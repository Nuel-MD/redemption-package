import { Router } from 'express';
import pool from '../db';

const router = Router();

// Get items by category
router.get('/:categoryName', async (req, res) => {
  const { categoryName } = req.params;
  try {
    const categoryResult = await pool.query('SELECT id FROM categories WHERE name = $1', [categoryName]);
    if (categoryResult.rows.length === 0) {
      return res.status(404).json({ error: 'Category not found' });
    }
    const categoryId = categoryResult.rows[0].id;
    const itemsResult = await pool.query('SELECT * FROM items WHERE category_id = $1', [categoryId]);
    res.json(itemsResult.rows);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching items' });
  }
});

export default router;