import fs from 'fs';

class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (const ch of word) {
      if (!node.children[ch]) node.children[ch] = new TrieNode();
      node = node.children[ch];
    }
    node.isEnd = true;
  }

  suggest(prefix, maxSuggestions = 5) {
    let node = this.root;
    for (const ch of prefix) {
      if (!node.children[ch]) return [];
      node = node.children[ch];
    }

    const results = [];

    const dfs = (current, path) => {
      if (results.length >= maxSuggestions) return;
      if (current.isEnd) results.push(prefix + path);
      for (const ch in current.children) {
        dfs(current.children[ch], path + ch);
      }
    };

    dfs(node, "");
    return results;
  }
}

const trie = new Trie();

// Load usernames into the Trie
const usernames = fs.readFileSync('./data/usernames.txt', 'utf-8').split('\n');
usernames.forEach(username => trie.insert(username.trim()));

export default trie;
