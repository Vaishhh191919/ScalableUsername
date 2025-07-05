import express from 'express';
import bloomFilter from '../utils/bloomFilter.js';
import trie from '../utils/trie.js';
import redisClient from '../cache/redisClient.js';

const router = express.Router();

router.get('/:username', async (req, res) => {
  const { username } = req.params;

  // Bloom filter first-level check
  const mightExist = bloomFilter.has(username);

  if (!mightExist) {
    return res.json({ available: true, suggestions: [] });
  }

  // Redis definitive check
  const exists = await redisClient.get(username);
  if (!exists) {
    return res.json({ available: true, suggestions: [] });
  }

  // Trie-based suggestions
  const suggestions = trie.suggest(username);

  res.json({ available: false, suggestions });
});

export default router;
