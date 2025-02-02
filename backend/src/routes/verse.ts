import { Router } from 'express';
import axios from 'axios';

const router = Router();

router.get('/', async (_req, res) => {
  try {
    const response = await axios.get('https://beta.ourmanna.com/api/v1/get/?format=json');
    const verse = response.data.verse.details.text + ' - ' + response.data.verse.details.reference;
    res.json({ verse });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching Bible verse' });
  }
});

export default router;