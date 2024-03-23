import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import App from "../App"; 
import HelpFr from "./HelpFr";
import RatingsFr from "./RatingsFr";
import Logo from "./Logo"; // Import the Logo component
import ProductListFr from "./ProductListFr";
import { TfiHelpAlt } from "react-icons/tfi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { RiStarSFill } from "react-icons/ri";

function AppFr() {
  const [language, setLanguage] = useState<string>('french');

  const handleLanguageSwitch = () => {
    setLanguage(language === 'french' ? 'english' : 'french');
  };

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage language={language} handleLanguageSwitch={handleLanguageSwitch} />} />
        <Route path="/RatingsFr" element={<RatingsFr />} />
        <Route path="/product-listFr" element={<ProductListFr />} />
        <Route path="/HelpFr" element={<HelpFr />} />
        <Route path="/AppFr" element={<AppFr />} />
      </Routes>
      <Link to={language === 'english' ? "/App" : "/"} className="switch-language-link" onClick={handleLanguageSwitch}>
  {language === 'english' ? 'Switch to French' : 'Switch to English'}
</Link>

    </div>
  );
}

function HomePage({ language, handleLanguageSwitch }: { language: string, handleLanguageSwitch: () => void }) {
  return (
    <div className="main-content">
      <div className="top-middle-content">
        <Logo /> {/* Use the Logo component */}
      </div>
      <div className="bottom-left-content">
        {/* Navigation Links */}
        <nav>
          <ul style={{ listStyle: "none" }}>
            <li>
              <RiStarSFill />
              <Link style={{ textDecoration: "none" }} to="/RatingsFr">
                Évaluations
              </Link>
            </li>
            <li>
              <MdOutlineProductionQuantityLimits />
              <Link style={{ textDecoration: "none" }} to="/product-listFr">
                Liste des produits
              </Link>
            </li>
            <li>
              <TfiHelpAlt />
              <Link style={{ textDecoration: "none" }} to="/HelpFr">
                Aide
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default AppFr;

