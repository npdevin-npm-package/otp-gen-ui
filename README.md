# otp-gen-ui

A lightweight React component + utility package for **generating One-Time Passwords (OTP)** and rendering **customizable OTP input boxes**.

---

## ✨ Features

- ✅ Generate OTP of any length (4, 6, etc.)
- ✅ OTP input boxes with keyboard navigation
- ✅ Fully customizable via styles
- ✅ Built with TypeScript and React

---

## 📦 Installation

```bash
npm install otp-gen-ui
or
yarn add otp-gen-ui
```

## 🚀 Usage

### 1. Import the component and generator

```tsx
import React from "react";
import { generateOtp, OtpBox } from "otp-gen-ui";
```

### 2. Use the OTP generator function

```tsx
const otp = generateOtp(6); // Example: "382471"
console.log("Generated OTP:", otp);
```

### 3. Render the OTP input UI

```tsx
<OtpBox
  length={6}
  onChange={(val) => console.log("Current OTP:", val)}
  style={{ justifyContent: "center" }}
  inputStyle={{ border: "2px solid blue", borderRadius: "8px" }}
/>
```

## 🔧 Props for OtpBox

| Prop         | Type                    | Default | Description                     |
| ------------ | ----------------------- | ------- | ------------------------------- |
| `length`     | `number`                | `6`     | Number of OTP input boxes       |
| `onChange`   | `(otp: string) => void` | —       | Triggered when input changes    |
| `style`      | `CSSProperties`         | —       | Style for the container wrapper |
| `inputStyle` | `CSSProperties`         | —       | Style for each input box        |

## 🧪 Example in a React Component

```bash

import React from 'react';
import { OtpBox, generateOtp } from 'otp-gen-ui';
const App = () => {
  const otp = generateOtp(4);
  return (
    <div>
      <h2>Enter your OTP</h2>
      <OtpBox
        length={4}
        onChange={(val) => console.log("OTP:", val)}
        inputStyle={{ border: "1px solid #333", borderRadius: "5px" }}
      />
    </div>
  );
};
```

## 📄 License

This package is licensed under the MIT License.

## 🙌 Author

Made with ❤️ by [npdevind](https://github.com/npdevind)

## 🔑 Keywords

- OTP
- OTP Generator
- OTP Input Box
- React Component
- React OTP
- TypeScript
