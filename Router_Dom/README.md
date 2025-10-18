# 🌐 React Router DOM Navigation App

A simple and elegant React application demonstrating how to use React Router DOM for multi-page navigation. 
The app includes multiple routes (Home, About, Contact, and Product) with a shared navigation header.

##

<h3>📁 Project Structure</h3>

```bash
react-router-dom-demo/
│
├── src/
│   ├── components/
│   │   └── Header.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Product.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── README.md
```

##

<h3>🚀 Features</h3>

- 🧭 React Router DOM v6 for smooth page routing
- 🧱 Organized folder structure (components and pages)
- 🧢 Responsive navigation bar using Tailwind CSS
- ⚡ Fast navigation without page reloads

##

<h3>🧩 Components Overview</h3>
App.jsx
Handles route configuration using React Router DOM:

```bash
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/product" element={<Product />} />
</Routes>
```

Header.jsx
A responsive navigation bar with route links:

```bash
<nav className="bg-emerald-900 flex py-5 px-10 items-center justify-between">
  <h2 className="text-4xl">
    Mahek{" "}
    <input className="bg-white text-black w-70 h-8 mt-1.5" type="text" />
  </h2>
  <div className="flex gap-8 items-center">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/product">Product</Link>
  </div>
</nav>
```

##

<h3>⚙️ Installation & Setup</h3>

Follow these steps to run the project locally:

```bash
# 1️⃣ Clone the repository
git clone https://github.com/Dev-Mahek/react-daily-practice.git

# 2️⃣ Navigate into the project folder
cd react-router-dom-demo

# 3️⃣ Install dependencies
npm install

# 4️⃣ Start the development server
npm run dev
```

##

<h3>🧠 Dependencies</h3>

- React – UI library
- React Router DOM – Routing management
- Tailwind CSS – Styling framework

Install React Router DOM if not already installed:

```bash
npm install react-router-dom
```

##

<h3>📜 License</h3>

This project is open-source and available under the MIT License.
