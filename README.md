# DaVinci Deluxe Cloud Edition — Cloud Tuning B2B REST API (v1.0.44)

Automate **DPF Off, EGR Off, AdBlue/SCR Off, DTC Off, Flaps, Lambda, Stage 1, Stage 2, Pops & Bangs, E85, and VMAX** directly inside your own tuning portal, master-slave file service, or workshop CRM using the official **DaVinci Deluxe Cloud Edition B2B API**.

## ⚡ Quick Architecture Overview

1. **Read 100% Virgin Original Binary:** Collect the unmodified ECU readout (`.bin`, `.ori`, `.mpc`) from OBD, Bench, or Boot.
2. **Pre-Check ECU & Available Services:** Query supported services and exact software ID before processing.
3. **Automated Patch & Checksum Delivery:** Receive the calibrated binary back with automatic Checksum & CVN verification.

## 💻 Included SDK Examples in This Repository

- [`examples/cloud_tuning_client.py`](examples/cloud_tuning_client.py) — Python 3 client with SHA-256 virgin readout verification & catalog query
- [`examples/cloud_tuning_client.mjs`](examples/cloud_tuning_client.mjs) — Node.js 18+ ES module client
- [`openapi-summary.json`](openapi-summary.json) — Endpoint reference & payload specification

👉 **[View API Plans & Request B2B Credentials at davincideluxe.fr/api-pricing →](https://www.davincideluxe.fr/api-pricing)**


---

### ⚠️ 100% Virgin Original ECU File Policy & 24h/7 Engineering Support

- **Virgin Original Reads Only:** Always upload **100% original, unmodified ECU files** read directly from the vehicle. Previously modified or tuned files cause bad map detection and errors — **DaVinci Deluxe Cloud Edition** strictly recommends working exclusively on virgin original reads.
- **24h/7 Live Support (365 Days/Year, Holidays Included):** Whenever you encounter a tricky vehicle or diagnostic procedure, send photos, videos, audio notes or ECU logs in **any language** — our engineering team guides you step-by-step until the vehicle runs 100% right.

### 🔗 Official DaVinci Deluxe Cloud Edition Links

- 🌐 **Official Website:** **[www.davincideluxe.fr](https://www.davincideluxe.fr)**
- 🚛 **Trucks, Agriculture & Heavy-Duty Engine:** **[www.davincideluxe.fr/trucks.html](https://www.davincideluxe.fr/trucks.html)**
- ☁️ **Online Cloud Tuning (Pay-Per-Use, Tokens Never Expire):** **[www.davincideluxe.fr/online-ecu-tuning](https://www.davincideluxe.fr/online-ecu-tuning)**
- 🛒 **Official Digital Shop (300+ DAMOS, A2L, ORI & Pinouts):** **[www.davincideluxe.fr/shop](https://www.davincideluxe.fr/shop)**
- 📘 **Developer & ECU Coverage Portal:** **[davincideluxe.github.io](https://davincideluxe.github.io)**
