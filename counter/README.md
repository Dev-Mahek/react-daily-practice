# ⚡ Counter App

<img width="685" height="373" alt="Screenshot 2025-10-15 223421" src="https://github.com/user-attachments/assets/968fb57e-1dd6-4988-a307-8b90e8237ee2" />

<p>A beautifully designed **React Counter Application** featuring a modern smooth animations using **Tailwind CSS**. 
The app allows you to increase or decrease the counter by 10 and reset it easily — a perfect mini-project to practice 
React state management and elegant UI design.</p>

##

<h3>🚀 Features</h3>

- 🧮 Simple and intuitive counter interface 
- 🎨 Built entirely with **Tailwind CSS**  
- ⚡ Smooth hover and click animations  
- 🔄 Reset button to start fresh

##

<h3>🧰 Tech Stack</h3>

- **React** – UI framework  
- **Tailwind CSS** – Styling and responsiveness  
- **JavaScript (ES6+)** – Logic and interactivity  

##

<h3>📁 Folder Structure</h3>

```bash
my-counter-app/
├── src/
│ ├── App.jsx
│ ├── index.js
│ ├── components/
│ └── assets/
├── public/
│ ├── index.html
│ └── favicon.ico
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

##

<h3>🧩 Code Overview</h3>

The app uses React’s useState hook to manage and update the counter value dynamically.

```bash
const [num, setnum] = useState(0);
```

<h4>➕ Increment / ➖ Decrement:</h4>

```bash
onClick={() => setnum(num + 10)}   // Increment
onClick={() => setnum(num - 10)}   // Decrement
```

<h4>🔁 Reset:</h4>

```bash
onClick={() => setnum(0)}
```

Each button includes Tailwind CSS classes for hover effects, and transitions.

##

<h3>🧠 Learning Goals</h3>

- Understand and apply React state management using useState.
- Implement responsive UI design using Tailwind CSS.
- Practice creating interactive components with animations.

##

<h3>💬 Feedback & Contributions</h3>

If you like this project, feel free to ⭐ star the repository!
Got ideas to improve it? Open an issue or submit a pull request — contributions are always welcome.

##

<h3>🪪 License</h3>

This project is licensed under the MIT License.
