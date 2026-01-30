# Email Security Testing Methodology

## Data Collection
- Queried MX, SPF, DKIM, and DMARC records using MXToolbox
- Validated DNS syntax and alignment

## Analysis
- SPF: Checked for hard/soft fail mechanisms and excessive DNS lookups
- DKIM: Verified selector presence and signing capability
- DMARC: Evaluated policy enforcement and reporting configuration

## Risk Evaluation
Findings were mapped to common email-based attack vectors including:
- Domain spoofing
- Business Email Compromise (BEC)
- Phishing campaigns

## Limitations
- No live email injection testing performed
- Analysis limited to DNS-level authentication controls
