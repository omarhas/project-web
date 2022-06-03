import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import './assets/main.css';
import App from "./App";
import Categories from "./pages/categoriesList/categories";
import ProductsList from "./pages/productList/productList";
import TopBar from './Components/topBar/topBar';
import ResponsiveAppBar from './Components/sideBar/sideBar';
import Particles from "react-tsparticles";
import 'tachyons';
import 'bootstrap/dist/css/bootstrap.min.css';
const particlesOptions = {
    background: {
      color: {
        value: "linear-gradient(to right, #226ad8, #2667c1, #2e62a9, #385e92, #40587a)",
      },
    },
    fpsLimit: 60,
    interactivity: {
      detectsOn: "canvas",
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40,
        },
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 4,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          value_area: 5000,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        random: true,
        value: 5,
      },
    },
    detectRetina: true,
  }

ReactDOM.render(
    <BrowserRouter>
        <Particles id='tsparticles' options={particlesOptions}/>
        <ResponsiveAppBar/>
        <br/>
        <br/>
        <Routes>
            <Route path="/Home" element={<App />} />
            <Route path="/Categories" element={<Categories />} />
            <Route path="/Products" element={<ProductsList />} />
        </Routes>
    </BrowserRouter>,

document.getElementById("root"));
