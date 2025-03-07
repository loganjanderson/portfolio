import React, { useState } from "react";

import "../src/styles/styles.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Auth from "./pages/auth";
import ContactInfo from "./pages/contactInfo";
import Header from "./pages/header";
import Modal from "react-modal";

function App() {
  const [openModal, setOpenModal] = useState(false);

  const onPDFClick = () => {
    window.open("loganandersonresume.pdf", "_blank");

    // fetch("loganAndersonsResume.pdf").then((response) => {
    //   response.blob().then((blob) => {
    //     const fileURL = window.URL.createObjectURL(blob);
    //     let alink = document.createElement("a");
    //     alink.href = fileURL;
    //     alink.download = "loganAndersonsResume.pdf";
    //     alink.click();
    //   });
    // });
  };

  const modalStyles = {
    content: {
      width: "25vw",
      aspectRatio: "1/1",
      backgroundColor: "#151414",
      borderRadius: "10px",
      top: "15vw",
      left: "35vw",
      color: "#f0efeb",
      border: "none",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    overlay: {
      backgroundColor: "hwb(0deg 26% 73% / 75%)",
    },
  };

  return (
    <div className="App">
      <div className="portfolio-container">
        <BrowserRouter>
          {/* <Header /> */}
          <div className="main-container">
            <div className="vertical-sidebar">
              <h1 onClick={onPDFClick}>PDF Resume</h1>
            </div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/auth" element={<Auth />} />
            </Routes>
            <div className="vertical-sidebar vs-right">
              <h1 onClick={() => setOpenModal(true)}>Contact</h1>
            </div>
          </div>
        </BrowserRouter>
      </div>
      <Modal
        isOpen={openModal}
        onRequestClose={() => setOpenModal(false)}
        style={modalStyles}
      >
        <div className="contact">
          <h1 className="close" onClick={() => setOpenModal(false)}>
            X
          </h1>
          <ContactInfo />
        </div>
      </Modal>
    </div>
  );
}

export default App;
