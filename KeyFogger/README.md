# 🧩 KEY FORGE — Animated Password Generator

**KEY FORGE** is a beautifully designed, animated password generator built with **React** and **Framer Motion**.  
It creates strong, secure passwords while giving a satisfying mechanical animation inspired by retro machinery aesthetics.  

---

## 🚀 Features

- 🔐 **Secure Random Passwords** — Uses the browser’s built-in `crypto` API for cryptographically secure randomness.  
- 🎞️ **Animated UI** — Each password generation triggers dynamic plate animations for a visually engaging experience.  
- 🧠 **Smart Password Composition** — Generates passwords with lowercase, uppercase, digits, and symbols while avoiding ambiguous characters (`O`, `0`, `I`, `l`, etc.).  
- 🎨 **Retro-Style Interface** — Styled using **Tailwind CSS**, featuring scroll plates and a vintage interface.  
- 🧱 **Fully Responsive** — Works smoothly across different screen sizes.  

---

## 🧰 Tech Stack

- **React** — Frontend library  
- **Framer Motion** — For animations  
- **Tailwind CSS** — For UI styling  
- **Crypto API** — For secure random number generation  

---

## ⚙️ How It Works

1. Click the GENERATE button.
2. The mechanical plates animate for a short duration (1000ms).
3. A new 18-character password is generated using a mix of:
  -  Lowercase letters (except l)    
  -  Uppercase letters (except I, O)    
  -  Digits (except 0, 1)    
  -  Special symbols (!@#$%^&*()-_=+[]{};:,.?)
4. The generated password appears in the display box.
