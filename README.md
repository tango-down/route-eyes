# route-eyes

Express middleware to detect, log, and optionally block suspicious or malicious route access attempts.  
Also supports **automatic IP banning with persistence**.

---

## 🚀 Installation

```bash
npm install route-eyes
````

---

## 📌 Usage

```js
const express = require('express');
const routeEyes = require('route-eyes');

const app = express();

// Default usage
app.use(routeEyes());

// With options
app.use(routeEyes({
  block: true,                 // Block suspicious requests (default: false)
  log: true,                   // Log suspicious requests (default: true)
  banFile: "banned_ips.json",  // File to store banned IPs (default: banned_ips.json)
  onDetect: (req, res) => {    // Custom callback on detection
    console.log(`[ALERT] Suspicious activity detected from ${req.ip}`);
  }
}));

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
```

---

## ⚙️ Options

| Option     | Type     | Default           | Description                                                    |
| ---------- | -------- | ----------------- | -------------------------------------------------------------- |
| `block`    | Boolean  | `false`           | Block suspicious requests with `403 Forbidden`.                |
| `log`      | Boolean  | `true`            | Log suspicious route attempts to console.                      |
| `banFile`  | String   | `banned_ips.json` | File path to persist banned IPs.                               |
| `onDetect` | Function | `undefined`       | Custom callback triggered when a suspicious route is detected. |

---

## 🔒 Features

* Detects access attempts to **common malicious paths** (WordPress, PHP shells, etc.)
* Logs suspicious route access
* **Automatically bans IPs** and saves them in `banned_ips.json`
* Permanently blocks banned IPs on subsequent requests

---

## 📝 Example Logs

```
[route-eyes] Detected suspicious access: /wp-admin from IP 192.168.0.10
[route-eyes] Blocked banned IP: 192.168.0.10
```

---

## 💡 Why use route-eyes?

* Prevent automated scanners and bots from hitting known malicious routes
* Automatically bans repeated offenders
* Lightweight, plug-and-play Express middleware

---

## 📜 License

MIT © 2025

