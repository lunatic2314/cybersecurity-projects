# Windows 11 DISA STIG Remediation Lab | CAT I SEHOP Compliance Fix

## 📌 Overview
This project documents the remediation of a **CAT I DISA Windows 11 STIG finding** on a personal Windows 11 workstation using a **risk-based hardening approach**.

The control was identified through **SCAP Compliance Checker**, analyzed in **STIG Viewer**, remediated through a **registry-based configuration change**, and validated through a **follow-up SCAP re-scan**.

This lab demonstrates a real-world compliance workflow:

> **Identify → Analyze → Remediate → Validate → Document**

The selected control was **Structured Exception Handling Overwrite Protection (SEHOP)**, a Windows exploit mitigation designed to reduce the likelihood of successful memory corruption and buffer overflow attacks.

---

## 🎯 Objective
Safely remediate a **single CAT I Windows 11 STIG finding** while preserving workstation usability.

### Control Information
- **Vulnerability ID:** V-253284
- **STIG ID:** WN11-00-000150
- **Rule Title:** Structured Exception Handling Overwrite Protection (SEHOP) must be enabled
- **Severity:** CAT I
- **CCI:** CCI-002824

---

## 🛠️ Tools Used
- SCAP Compliance Checker 5.14
- STIG Viewer 3.7
- Windows Registry Editor
- Microsoft Windows 11 Pro
- DISA Windows 11 STIG Benchmark
- Compliance evidence screenshots

---

## 🧪 Lab Workflow
This project follows a complete STIG remediation lifecycle:

1. Run baseline SCAP compliance assessment
2. Identify CAT I failed controls
3. Analyze detailed failed SEHOP finding
4. Validate DISA fix guidance in STIG Viewer
5. Perform registry-based remediation
6. Re-run SCAP benchmark
7. Validate PASS result
8. Document compliance evidence

---

# 📸 Evidence Walkthrough

---

## 1️⃣ Initial SCAP Baseline Score
The initial Windows 11 SCAP assessment returned a **36.41% compliance score**, confirming multiple CAT I and CAT II findings.

This establishes the **baseline security posture** before remediation.

![Initial SCAP Score](screenshots/01-initial-scap-score-fail.png)

### Key Takeaway
This screenshot demonstrates:
- baseline compliance score
- initial assessment evidence
- measurable improvement target

---

## 2️⃣ CAT I Finding Identification
The results page highlighted multiple **CAT I high-severity controls**, including the target finding:

> **V-253284 - Structured Exception Handling Overwrite Protection (SEHOP) must be enabled**

![CAT I Findings](screenshots/02-cat1-finding-list.png)

### Key Takeaway
This screenshot proves:
- CAT I triage process
- severity prioritization
- targeted remediation selection

---

## 3️⃣ Detailed Failed SEHOP Finding
The detailed SCAP report confirmed the failure condition:

- Registry value missing
- Automated rule failed
- required DWORD value not found

Required registry setting:

```text
HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\kernel
DisableExceptionChainValidation = 0
```

## ⚠️ Disclaimer

This project was performed on a personal Windows 11 workstation for educational, portfolio, and compliance workflow demonstration purposes.

Only a single low-risk CAT I control was selected to preserve system stability while demonstrating a full remediation lifecycle.
