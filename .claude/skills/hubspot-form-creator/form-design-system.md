# Form Design System

Form-specific design patterns that extend the core NGM editorial design system. These styles apply to form landing pages — the outer page structure (header, hero, footer) follows the main design system in `document-studio/design-system.md`.

---

## Form Container

Forms are centered on the page within a card-like container:

```css
.form-card {
  background: var(--paper-alt);
  border: 1px solid var(--line);
  padding: 40px;
  max-width: 520px;
  margin: 0 auto;
}

@media (max-width: 600px) {
  .form-card {
    padding: 28px 20px;
  }
}
```

For forms embedded in a full landing page with hero content, the form sits below the hero. For standalone forms, the form card IS the main content.

---

## Form Field Anatomy

Every field follows this structure:

```html
<div class="form-group">
  <label for="field-id" class="form-label">
    Field Name <span class="required">*</span>
  </label>
  <input type="text" id="field-id" name="fieldName" class="form-input" required>
</div>
```

### Field Label

```css
.form-label {
  display: block;
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink-500);
  margin-bottom: 8px;
}

.required {
  color: var(--vermillion);
}
```

### Text Input

```css
.form-input {
  display: block;
  width: 100%;
  padding: 14px 16px;
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  line-height: 1.4;
  color: var(--ink-900);
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: 0;
  outline: none;
  transition: border-color 0.2s;
}

.form-input::placeholder {
  color: var(--ink-400);
}

.form-input:focus {
  border-color: var(--gold);
  box-shadow: 0 0 0 3px rgba(197, 165, 114, 0.15);
}

.form-input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
```

**No border-radius.** The editorial aesthetic uses sharp corners on form inputs, matching the rest of the design system (section numbers, tier cards, etc.).

### Textarea

```css
.form-textarea {
  display: block;
  width: 100%;
  padding: 14px 16px;
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  line-height: 1.6;
  color: var(--ink-900);
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: 0;
  outline: none;
  resize: vertical;
  min-height: 120px;
  transition: border-color 0.2s;
}

.form-textarea:focus {
  border-color: var(--gold);
  box-shadow: 0 0 0 3px rgba(197, 165, 114, 0.15);
}
```

### Select / Dropdown

```css
.form-select {
  display: block;
  width: 100%;
  padding: 14px 16px;
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  color: var(--ink-900);
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: 0;
  outline: none;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%235C626B' stroke-width='1.5' fill='none'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
}

.form-select:focus {
  border-color: var(--gold);
  box-shadow: 0 0 0 3px rgba(197, 165, 114, 0.15);
}
```

---

## Form Layout

### Field Spacing

```css
.form-group {
  margin-bottom: 24px;
}
```

### Two-Column Row (for name fields, etc.)

```css
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

@media (max-width: 500px) {
  .form-row {
    grid-template-columns: 1fr;
  }
}
```

### Honeypot Field (Bot Protection)

Always include — hidden from humans, catches bots:

```html
<div style="position: absolute; left: -9999px;" aria-hidden="true">
  <label for="website_url">Website</label>
  <input type="text" id="website_url" name="website_url" tabindex="-1" autocomplete="off">
</div>
```

---

## Submit Button

```css
.form-submit {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 16px 32px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: white;
  background: var(--ink-900);
  border: none;
  border-radius: 0;
  cursor: pointer;
  transition: all 0.3s;
}

.form-submit:hover {
  background: var(--vermillion);
  transform: translateY(-1px);
}

.form-submit:active {
  transform: translateY(0);
}

.form-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.form-submit:disabled:hover {
  background: var(--ink-900);
}
```

### Button Arrow Icon (SVG inline)

```html
<button type="submit" class="form-submit">
  Reserve My Spot
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
</button>
```

---

## Form States

### Loading State

While submitting, disable the button and show a spinner:

```css
.spinner {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255,255,255,0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

### Success State

Replace the form with a clean success message:

```css
.success-state {
  text-align: center;
  padding: 48px 32px;
}

.success-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: var(--gold);
  margin-bottom: 20px;
}

.success-state h3 {
  font-family: 'Newsreader', serif;
  font-size: 24px;
  font-weight: 500;
  color: var(--ink-900);
  margin-bottom: 12px;
}

.success-state p {
  font-size: 15px;
  color: var(--ink-500);
  line-height: 1.6;
}
```

### Error State

Show inline error above the submit button:

```css
.form-error {
  padding: 12px 16px;
  background: rgba(224, 62, 47, 0.08);
  border-left: 3px solid var(--vermillion);
  color: var(--vermillion);
  font-size: 14px;
  margin-bottom: 20px;
}
```

### Field-Level Validation Error

```css
.form-input.error {
  border-color: var(--vermillion);
}

.field-error {
  font-size: 12px;
  color: var(--vermillion);
  margin-top: 6px;
}
```

---

## Privacy Notice

Always placed below the submit button:

```css
.privacy-notice {
  font-size: 12px;
  color: var(--ink-400);
  text-align: center;
  margin-top: 16px;
  line-height: 1.5;
}
```

Text: "We respect your privacy. No spam. Unsubscribe anytime."

---

## Page Layout Patterns

### Pattern A: Hero + Form (Side by Side)

For high-impact landing pages. Hero text on the left, form on the right.

```css
.landing-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: start;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 clamp(20px, 5vw, 48px);
}

@media (max-width: 768px) {
  .landing-split {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
```

### Pattern B: Stacked (Hero Above Form)

For simple lead capture. Hero content centered above the form.

```css
.landing-stacked {
  max-width: 600px;
  margin: 0 auto;
  padding: 0 clamp(20px, 5vw, 48px);
  text-align: center;
}

.landing-stacked .form-card {
  text-align: left;
}
```

### Pattern C: Minimal (Form Only)

For embeds and simple captures. Just the form card, minimal surrounding content.

```css
.landing-minimal {
  max-width: 480px;
  margin: 0 auto;
  padding: var(--space-5) clamp(20px, 5vw, 48px);
}
```

---

## Value Proposition Cards (Optional)

Placed above the form to reinforce what the user gets:

```css
.value-props {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.value-prop {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.value-prop-icon {
  flex-shrink: 0;
  color: var(--gold);
  font-size: 18px;
  line-height: 1;
}

.value-prop-text h4 {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: var(--ink-900);
  margin-bottom: 4px;
}

.value-prop-text p {
  font-size: 13px;
  color: var(--ink-500);
  line-height: 1.5;
  margin: 0;
}
```
