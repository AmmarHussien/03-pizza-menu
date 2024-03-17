import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  //   const style = {
  //     color: "red",
  //     fontSize: "48px",
  //     textTransform: "uppercase",
  //   };

  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're Still Working On Our Menu. Please Come Back Later :)</p>
      )}

      {/* <Pizza
          name={`${pizzaData[0].name}`}
          ingredients={`${pizzaData[0].ingredients}`}
          photoName={`${pizzaData[0].photoName}`}
          price={pizzaData[0].price}
        />
        <Pizza
          name={`${pizzaData[1].name}`}
          ingredients={`${pizzaData[1].ingredients}`}
          photoName={`${pizzaData[1].photoName}`}
          price={pizzaData[1].price}
        /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  //if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 11;
  const cloasHour = 22;
  const isOpen = hour >= openHour && hour <= cloasHour;
  console.log(isOpen);

  //   if (hour >= openHour && hour <= cloasHour) alert("We're currently open!");
  //   else alert("Sorry We're closed!");

  if (!isOpen) {
    return;
  }
  return (
    <footer className="footer">
      {isOpen ? (
        <Order cloasHour={cloasHour} openHour={openHour} />
      ) : (
        <p>
          We're Happy To Welcom You Between {openHour}:00 and {cloasHour}:00.
        </p>
      )}
    </footer>
  );
  //return React.createElement("footer", null, "We're currently open!");
}

function Order({ cloasHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're Open From {openHour}:00 untill {cloasHour}:00. Come Visit us or
        Order Online
      </p>
      <button className="btn">order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
