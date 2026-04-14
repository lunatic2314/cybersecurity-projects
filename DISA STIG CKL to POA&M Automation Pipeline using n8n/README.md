# 🚀 Self-Hosted AI-Powered DISA STIG CKL → POA&M Automation Pipeline using n8n + Ollama

## 📌 Project Overview
This project automates the transformation of **DISA STIG CKL/XML checklist findings into POA&M-ready CSV artifacts** using a **self-hosted n8n workflow enhanced with local Ollama AI**.

The workflow ingests raw STIG checklist evidence, normalizes XML data into structured JSON, applies CAT-based prioritization logic, and uses a **local LLM (Ollama)** to generate:

- `finding_summary`
- `recommended_fix`
- `closure_validation`

All AI processing occurs **locally on-host**, ensuring sensitive compliance evidence never leaves the environment.

This simulates a real-world **RMF / ISSO / FedRAMP continuous monitoring workflow** used for vulnerability governance, remediation tracking, and audit preparation.

---

## 🧠 Key Features
- ✅ CKL/XML evidence ingestion
- ✅ XML → JSON normalization
- ✅ JavaScript-based transformation logic
- ✅ CAT I / II / III risk prioritization
- ✅ POA&M row generation
- ✅ milestone and ownership mapping
- ✅ **self-hosted Ollama AI enrichment**
- ✅ AI-generated remediation narratives
- ✅ closure validation guidance
- ✅ CSV export for audit-ready artifacts
- ✅ secure local workflow orchestration

---

## ⚙️ Workflow Architecture
The workflow follows this transformation lifecycle:

```text
CKL/XML Import
   ↓
Extract from File
   ↓
XML to JSON
   ↓
POA&M Logic
   ↓
Limit (Representative AI Finding)
   ↓
Basic LLM Chain
   ↓
Local Ollama Model
   ↓
Build POA&M Rows
   ↓
Convert JSON to CSV
```

This architecture demonstrates how **workflow automation and local AI enrichment can accelerate RMF evidence production while preserving data sovereignty**.

---

## 📸 AI Workflow Evidence
A full screenshot-based walkthrough of the **self-hosted local AI workflow and AI-enriched CSV artifact output** is included in:

```text
Screenshots/README.md
```

This evidence walkthrough highlights:
- self-hosted workflow orchestration
- local Ollama AI integration
- POA&M row automation
- AI-enriched CSV output
- audit-ready artifact portability

---

## 🧠 Local AI Enrichment Layer
The workflow integrates **self-hosted Ollama LLM inference** to enrich a representative DISA STIG finding with:

- `finding_summary`
- `recommended_fix`
- `closure_validation`
- `ai_raw_output`

This AI layer is designed to:
- accelerate remediation documentation
- reduce manual analyst effort
- improve POA&M narrative consistency
- preserve sensitive compliance data locally
- support future scaling across full CKL datasets

For lab efficiency, the AI layer currently processes a **single representative finding**, while the architecture supports full-dataset scaling.

---

## 💼 Real-World Use Cases
This workflow supports:
- RMF evidence generation
- ISSO remediation tracking
- DISA STIG audit preparation
- vulnerability governance
- POA&M management
- FedRAMP continuous monitoring
- compliance workflow automation
- private local AI remediation support

---

## 🎯 Why This Matters
Traditional CKL-to-POA&M workflows are often:
- repetitive
- spreadsheet-heavy
- inconsistent
- difficult to scale
- time-consuming for analysts

By combining:
- workflow orchestration
- transformation logic
- CAT-based prioritization
- local AI enrichment
- secure self-hosted execution

this project demonstrates how cybersecurity teams can modernize compliance operations while maintaining full control of sensitive evidence.

---

## 🚀 Future Enhancements
Planned roadmap:
- full CKL dataset AI enrichment
- executive risk summaries
- automated POA&M ticket creation
- ServiceNow integration
- SharePoint evidence sync
- FedRAMP package automation
- Splunk / SIEM finding correlation
- automated POA&M closure validation
- leadership dashboard reporting

---

## 🛠️ Tech Stack
- **n8n**
- **Ollama**
- **Llama 3**
- **JavaScript**
- **XML**
- **CSV**
- **DISA STIG**
- **RMF / NIST**
- **POA&M**
- **Docker (Self-hosted)**

---

## 🔐 Security Design Principle
A key design goal was ensuring:

> **sensitive compliance evidence remains local to the host environment**

This mirrors real-world security requirements for:
- federal systems
- regulated environments
- private cyber workflows
- compliance evidence handling
- restricted enclaves
- air-gapped environments
