# UserCheck – Scalable Username Checker 🔍

A blazing-fast, scalable REST API service to check username availability using **Node.js**, **Redis**, **Bloom Filters**, and **Trie-based suggestions**. Designed to handle 100M+ records with sub-10ms response times.

---

## 🚀 Features

- ✅ High-performance **username availability checker**
- ⚡ **99% reduction** in database hits via **Bloom Filter caching**
- 💾 **Redis**-based smart in-memory + file-backed cache
- 🤖 “Did you mean?” suggestions using **Trie-based fuzzy matching**
- 📈 Handles **10K+ requests/sec** with **sub-10ms latency**

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **Redis** (with pipelining)
- **Bloom Filters**
- **Trie Data Structure**
- **REST API**