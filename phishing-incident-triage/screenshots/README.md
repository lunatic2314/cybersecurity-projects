# 📸 Screenshot Walkthrough – Phishing Incident Triage

This folder documents the step-by-step execution of the phishing triage workflow using **n8n**, **Docker**, **ngrok**, and **Google Sheets**.

The screenshots illustrate how email data flows from ingestion → analysis → structured logging.

---

## 🧰 Environment Setup

This workflow was built and executed using:

* **Docker** – runs the n8n automation platform locally
* **ngrok** – exposes the local n8n webhook to the internet
* **Email Client** – forwards incoming emails to the webhook
* **Google Sheets API (OAuth2)** – stores structured results

---

## 🔄 End-to-End Flow

1. Docker hosts n8n locally
2. ngrok generates a public webhook URL
3. Email client forwards message data to ngrok
4. n8n ingests and processes the email
5. Email content is analyzed for phishing indicators
6. Results are structured into JSON
7. Data is appended to Google Sheets

---

## 🧩 Step-by-Step Screenshots

---

### 🔹 Step 1: n8n Workflow Pipeline

![Workflow](./1-N8N%20workflow.png)

**What’s happening:**

* Webhook receives email data (via ngrok)
* Fields are parsed into structured values
* Email content is analyzed
* Results are formatted and passed downstream
* Data is sent to Google Sheets

**Why it matters:**
This shows the full automation pipeline and orchestration logic behind the project.

---

### 🔹 Step 2: Google Sheets Output (Incident Log)

![Google Sheets Output](./2-google%20sheet%20results.png)

**What’s happening:**
Each processed email is logged as a row with:

* `email` – subject or identifier
* `is_suspicious` – phishing classification (true/false)
* `summary` – human-readable explanation
* `reasons` – supporting analysis details

**Why it matters:**
This demonstrates persistent logging and structured incident tracking, similar to how a SOC documents phishing triage results.

---

### 🔹 Step 3: Append Node Mapping (Data Integration)

![Append Mapping](./3-append%20node%20mapping.png)

**What’s happening:**
JSON output from the workflow is mapped into spreadsheet columns:

* `email → {{$json.email}}`
* `is_suspicious → {{$json.is_suspicious}}`
* `summary → {{$json.summary}}`
* `reasons → {{$json.reasons}}`

**Why it matters:**
This is the integration layer—showing how processed data is transformed and stored in a structured format.

---

## 🎯 What This Demonstrates

* Webhook ingestion using ngrok
* Workflow automation using n8n (Docker-hosted)
* JSON parsing and transformation
* API integration with Google Sheets
* Automated phishing triage and logging

---

## 📌 Notes

* All images are referenced using **relative paths** (`./filename.png`) since this README is inside the `screenshots` folder
* Ensure filenames match exactly (case-sensitive on GitHub)

---

## 🔗 Related

See the main project README for:

* full architecture
* use case explanation
* setup instructions
