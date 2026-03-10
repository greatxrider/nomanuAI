---
name: hubspot-form-creator
description: Create HubSpot lead capture forms as branded HTML landing pages. Forms match the NGM editorial design system and submit to the existing /api/leads endpoint which syncs to HubSpot. Output is a self-contained HTML file placed in /public/ for immediate access.
allowed-tools: Read, Write, Edit, Glob, Grep
---

# HubSpot Form Creator

## Overview

This skill creates branded HubSpot lead capture forms as self-contained HTML landing pages. Every form:
- Matches the NGM editorial design system (Newsreader/Inter fonts, ink/gold palette)
- Submits to the existing `/api/leads` endpoint (which syncs contacts to HubSpot automatically)
- Lives in `/public/forms/` so it's immediately accessible at a public URL
- Is a single `.html` file — easy to copy/paste into any context

## How It Works

Forms POST to the site's `/api/leads` endpoint. That endpoint:
1. Validates the submission (Zod schema)
2. Creates or updates a HubSpot contact (deduplicates by email)
3. Attaches metadata notes (lead source, UTM params, page URI, etc.)

No HubSpot embed scripts needed. No iframe. Just a clean HTML form that talks to your existing API.

---

## Form Types

| Type | Use Case | Fields |
|------|----------|--------|
| **Lead Capture** | Gated content, webinar signups, waitlists | First name, Email, Company (optional) |
| **Contact** | General inquiries, consultation requests | First name, Last name, Email, Company, Interest dropdown, Message |
| **Event Registration** | Summit, webinar, workshop signups | First name, Last name, Email, Company, Role/Title, Interest |
| **Assessment / Quiz** | Lead magnets with qualification questions | First name, Email + custom question fields |

---

## Pre-Generation Steps (ALWAYS DO THESE)

### 1. Read Reference Materials
```
Read: .claude/skills/hubspot-form-creator/form-design-system.md
Read: .claude/skills/document-studio/voice-and-style.md
Read: .claude/skills/document-studio/ngm-programs.md
```

### 2. Check Existing Forms
```
Glob: public/forms/*.html
```

### 3. Read the Template
```
Read: .claude/skills/hubspot-form-creator/templates/form-template.html
```

### 4. For Reference, Read 1-2 Similar Forms
Learn from existing forms of the same type to maintain consistency.

---

## Required Inputs

Every form needs:
1. **Form purpose** — What is this form for? (e.g., "Webinar signup for GLP-1 masterclass")
2. **Lead source identifier** — A kebab-case string for HubSpot tracking (e.g., `webinar-glp1-masterclass-2026`)
3. **Fields needed** — Which fields beyond the defaults? (defaults: first name, email)

Optional but recommended:
- **Headline** — The main value proposition shown above the form
- **Subheadline** — Supporting context (1-2 sentences)
- **Success message** — What to show after submission (default: "Thank you. We'll be in touch shortly.")
- **CTA button text** — Submit button label (default: "Submit")
- **Redirect URL** — Where to send after submission (optional — default shows inline thank-you)

---

## Output

Every form generates **one file**:

```
public/forms/[form-slug].html
```

### Naming Convention
- `public/forms/webinar-[topic]-[date].html`
- `public/forms/lead-magnet-[topic].html`
- `public/forms/contact-[context].html`
- `public/forms/event-[name]-[date].html`
- `public/forms/assessment-[topic].html`

### Access URL
Once deployed, the form is accessible at:
```
https://nextgenerationmedicine.co/forms/[form-slug].html
```

During local dev:
```
http://localhost:3000/forms/[form-slug].html
```

---

## Form Architecture

### Submission Flow

```
User fills form → JavaScript validates → POST /api/leads → HubSpot contact created/updated
                                                         → Metadata note attached
                                                         → Success message shown
```

### Required POST Payload

The form JavaScript must POST this JSON to `/api/leads`:

```json
{
  "firstName": "Jane",
  "lastName": "Doe",
  "email": "jane@clinic.com",
  "company": "Longevity Clinic",
  "source": "webinar-glp1-masterclass-2026",
  "interest": "Clinical education",
  "message": "",
  "tracking": {
    "pageUri": "https://nextgenerationmedicine.co/forms/webinar-glp1-masterclass-2026.html",
    "pageName": "GLP-1 Masterclass Webinar Signup",
    "referrer": "",
    "hutk": "",
    "utmSource": "",
    "utmMedium": "",
    "utmCampaign": "",
    "capturedAt": "2026-02-12T10:00:00.000Z"
  }
}
```

### Tracking Metadata

The form JavaScript automatically captures:
- `pageUri` — current page URL
- `pageName` — document title
- `referrer` — document.referrer
- `hutk` — HubSpot tracking cookie (if present)
- UTM parameters — parsed from URL query string
- `gclid` / `fbclid` — ad click IDs from URL
- `capturedAt` — ISO timestamp of submission

---

## Generation Process

### Step 1: Determine Form Structure

Based on the form purpose, select:
- Which fields to include (see Form Types table above)
- The lead source identifier
- Headline and supporting copy
- CTA button text

### Step 2: Write the Landing Page Content

Above the form, every landing page includes:
1. **NGM header** — Wordmark + optional context (e.g., "Webinar Registration")
2. **Hero section** — Gold label + headline + subheadline
3. **Value propositions** (optional) — 2-3 bullet points or cards showing what they'll get
4. **The form** — Styled per the form design system
5. **Footer** — NGM tagline + privacy note

### Step 3: Generate the HTML

Use the template at `.claude/skills/hubspot-form-creator/templates/form-template.html` as the base. Customize:
- Replace all `[PLACEHOLDER]` values
- Add or remove form fields as needed
- Set the correct `LEAD_SOURCE` constant in the JavaScript
- Update the success message
- Add value proposition content if needed

### Step 4: Write and Verify

1. Write the file to `public/forms/[form-slug].html`
2. Report the public URL to the user
3. Remind user to deploy for the URL to go live

---

## Voice & Style for Forms

Forms follow the same NGM voice principles but adapted for conversion:

**Headlines should be:**
- Outcome-focused: "Get the recording" not "Sign up for our webinar"
- Specific: "Join 240+ longevity practitioners" not "Join our community"
- Confident: "Your AI lab report in 5 minutes" not "Try our lab report tool"

**Subheadlines should:**
- Provide context (what, when, who)
- Remove friction ("Free", "No credit card", "Instant access")
- Set expectations ("You'll receive an email within 24 hours")

**Button text should be:**
- Action-oriented: "Get Instant Access", "Reserve My Spot", "Download Now"
- NOT generic: avoid "Submit", "Sign Up", "Register"

**Form labels should be:**
- Short: "First Name" not "Please enter your first name"
- Uppercase, small, Inter font (matches design system label style)

---

## Custom Fields

Beyond the standard fields (firstName, lastName, email, company, interest, message), you can add custom fields. These get included in the `message` field as structured text:

```javascript
// Custom fields are concatenated into the message field
const customData = [
  `Practice type: ${practiceType}`,
  `Years in practice: ${yearsInPractice}`,
  `Primary interest: ${primaryInterest}`
].join('\n');

// This goes into the "message" field of the payload
payload.message = customData;
```

The HubSpot metadata note will contain all custom field data.

---

## Quality Checklist

Before finalizing any form:

- [ ] Lead source identifier is unique and descriptive (kebab-case)
- [ ] Form submits to `/api/leads` (not to HubSpot directly)
- [ ] JavaScript includes full tracking metadata capture
- [ ] Honeypot field is present (hidden `website_url` field for bot filtering)
- [ ] Client-side validation works (required fields, email format)
- [ ] Success state shows clearly after submission
- [ ] Error state shows clearly on failure
- [ ] Loading state disables button and shows spinner during submission
- [ ] Design matches NGM editorial system (colors, fonts, spacing)
- [ ] Headline is outcome-focused, not feature-focused
- [ ] CTA button text is action-oriented
- [ ] Privacy note present ("We respect your privacy. No spam.")
- [ ] Mobile responsive (stacks to single column)
- [ ] File saved to `public/forms/[form-slug].html`
- [ ] No placeholder text remains

---

## Anti-Patterns to Avoid

1. **Using HubSpot embed scripts** — We don't use `hbspt.forms.create()`. Our forms POST to `/api/leads`.
2. **Too many fields** — Every extra field reduces conversions. Only ask for what you need.
3. **Generic CTAs** — "Submit" kills conversion. Use specific action verbs.
4. **Missing tracking** — Always include the full tracking metadata capture in JavaScript.
5. **No honeypot** — Always include the hidden `website_url` field for bot protection.
6. **Salesy headlines** — Match the NGM voice: confident and specific, never hypey.
7. **Missing error handling** — Always handle network failures gracefully.
8. **Putting forms behind /command-center/** — Forms must be public. Use `/public/forms/`.
9. **Forgetting mobile** — All forms must stack responsively on small screens.

---

## Usage Examples

### Create a webinar signup form
```
Create a HubSpot form for our upcoming GLP-1 masterclass webinar on March 15, 2026.
The headline should be "The GLP-1 Protocols That Actually Work"
Lead source: webinar-glp1-masterclass-2026-03
```

### Create a lead magnet download form
```
Create a form for downloading our "Longevity Lab Panel Cheat Sheet" PDF.
Fields: first name, email only.
CTA: "Download the Cheat Sheet"
```

### Create a consultation request form
```
Create a contact form for enterprise consultation requests.
Include: name, email, company, role, message.
Lead source: enterprise-consultation-request
```

### Create a summit registration form
```
Create a registration form for NGM Summit Japan 2026.
Include: full name, email, company, role, dietary restrictions dropdown.
Lead source: ngm-summit-japan-2026-registration
```
