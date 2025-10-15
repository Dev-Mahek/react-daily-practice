# Dynamic Card UI 🎴


<img width="1242" height="544" alt="Screenshot 2025-10-15 111531" src="https://github.com/user-attachments/assets/3f1120c5-04c4-4800-9cb3-5c5b7f1c05a6" />


A modern React component project that displays dynamic user profile cards with custom colors, headings, and smooth UI elements — built with Tailwind CSS and Lucide Icons.

Each card is generated from an array of data objects, making it easy to customize, extend, or reuse in other projects.

##

<h3>🚀 Features </h3>

- 🧩 Dynamic rendering of cards from JSON-like data
- 🎨 Customizable background colors for each card section
- 💬 Profile information & headings displayed clearly
- 🌈 Tailwind CSS styling for responsive and modern design
- 🖱️ Lucide-react icons integration
- ⚡ Reusable Card component

##

```bash
📦 my-react-app
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── components/
│   │   └── Card.jsx
│   └── assets/
│       ├── me1.jpg
│       └── me2.jpg
├── package.json
├── tailwind.config.js
└── README.md
```
##

<h3>🧩 Components Overview</h3>

App.jsx

- Contains an array of user data (image, name, handle, headings, and colors).
- Maps the data to render multiple Card components dynamically.

Card.jsx

- Displays each user’s profile, name, handle, and text content.
- Uses Tailwind classes for layout, borders, shadows, and colors.
- Includes:
   - Profile image with border
   - Headings and info boxes
   - Progress bar-like color divs
   - Navigation buttons (“Previous” & “Next”)
   - A close (CircleX) icon
 
##

<h3>🛠️ Installation & Setup</h3>

  1. Clone the repository
```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
```
  2. Install dependencies
```bash
npm install
```
  3. Start the development server
```bash
npm run dev
```
  4. Open your browser and visit:
```bash
http://localhost:5173/
```

##

<h3>📦 Dependencies</h3>

- React — UI library
- Tailwind CSS — Styling framework
- Lucide-react — Icon set

To install manually:
```bash
npm install react lucide-react
npm install -D tailwindcss
```

##

<h3>🧑‍🎨 Customization</h3>
You can modify the data array inside App.jsx to add or change cards:

```bash
{
  profile: "newProfile.jpg",
  name: "Roy",
  user: "@roydev",
  heading: "Custom heading here",
  headingO: "Another line of text",
  headingT: "And one more",
  background: "#FFB6C1",
  backgroundH: "#FFC0CB",
  backgroundProg: "#FF69B4"
}
```

##

<h3>💡 Future Improvements</h3>

- Add animations using Framer Motion
- Make cards clickable with modal pop-ups
- etch card data from an API

##

<h3>🪪 License</h3>

This project is licensed under the MIT License — feel free to use and modify it.
