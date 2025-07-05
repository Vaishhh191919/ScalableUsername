import { BloomFilter } from 'bloom-filters';
import fs from 'fs';

// Create a Bloom filter with 10 million entries, 1% error rate
const bloom = new BloomFilter(10000000, 0.01);

// Load usernames from file and add to the filter
const usernames = fs.readFileSync('./data/usernames.txt', 'utf-8').split('\n');
usernames.forEach(username => bloom.add(username.trim()));

export default bloom;
