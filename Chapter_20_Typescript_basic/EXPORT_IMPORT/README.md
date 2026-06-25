# EXPORT_IMPORT - TypeScript/JavaScript Basics

This folder demonstrates the basic concepts of **exporting** and **importing** modules in JavaScript (ES Modules), which is also fundamental in TypeScript.

---

## Files Overview

### 01_test_util.js
This file acts as a **utility module**. It exports reusable constants and helper functions that can be shared across other files.

| Export Name    | Type       | Description                          |
|----------------|------------|--------------------------------------|
| `BASE_URL`     | `string`   | A constant holding the base URL      |
| `formatTestName` | `function` | Formats a test name to uppercase     |

**Concept:** `export`
- Use `export` before a declaration to make it available for import in other modules.

```javascript
export const BASE_URL = "https://example.com";

export function formatTestName(name) {
    return name.toUpperCase();
}
```

---

### 02_EXPORT_IMPORT.js
This file acts as the **consumer module**. It imports the exported members from `01_test_util.js` and uses them.

**Concept:** `import`
- Use `import { ... } from "./module.js"` to bring in named exports from another file.

```javascript
import { BASE_URL, formatTestName } from "./01_test_util.js";

console.log("Base URL:", BASE_URL);
let result = formatTestName("login page");
console.log("Formatted Name:", result);
```

---

## How to Run

1. Make sure your environment supports ES Modules (e.g., Node.js with `"type": "module"` in package.json, or running with `.mjs` extension).
2. Run the consumer file:

```bash
node 02_EXPORT_IMPORT.js
```

**Expected Output:**
```
Base URL: https://example.com
Formatted Name: LOGIN PAGE
```

---

## Key Takeaways

- **Export** allows you to expose variables, functions, or classes from a file.
- **Import** allows you to use those exported items in another file.
- This pattern promotes **code reusability** and **modularity**.
- In TypeScript, the syntax is identical, but you can also add type annotations and export/import types/interfaces.
