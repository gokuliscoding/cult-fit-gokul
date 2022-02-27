import React from "react";
import { Link } from "react-router-dom";

import "./CultSportsJustLaunched.css";

export const CultSportsJustLaunched = () => {
  return (
    <>
      <div id="SameLine">
        <div id="JustLaunched">Just Launched</div>
        <div id="Seeall">
          <Link to="/store/gear/landing/Seeall">See all {`>`}</Link>
        </div>
      </div>

      <div id="SeamlessCollection">Seamless Collection</div>

      <div id="JustLaunchedCards">
        <div className="JustLaunchedImages">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/B2zK13fNk5YwD6mBhky5dpVL"
            className="JustLaunchedImage"
          ></img>
          <div className="JustLaunchedTitle">CULTSPORT</div>
          <div className="JustLaunchedText">
            Seamless Claire Medium Impact Sport...
          </div>
          <div className="JustLaunchedPrice">₹ 1264</div>
        </div>
        <div className="JustLaunchedImages">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/LEE997UW5WoFdSdjAzdrD2ZT"
            className="JustLaunchedImage"
          ></img>
          <div className="JustLaunchedTitle">CULTSPORT</div>
          <div className="JustLaunchedText">
            Seamless Diane Medium Impact Spo...
          </div>
          <div className="JustLaunchedPrice">₹ 1264</div>
        </div>
        <div className="JustLaunchedImages">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/SiG27L1Ezj8W3tpWRXy7f5UQ"
            className="JustLaunchedImage"
          ></img>
          <div className="JustLaunchedTitle">CULTSPORT</div>
          <div className="JustLaunchedText">
            Seamless Gia Medium Impact Sports ...
          </div>
          <div className="JustLaunchedPrice">₹ 1044</div>
        </div>
        <div className="JustLaunchedImages">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/vXcXZqdyw7FfusoD96upd2tc"
            className="JustLaunchedImage"
          ></img>
          <div className="JustLaunchedTitle">CULTSPORT</div>
          <div className="JustLaunchedText">
            Seamless Jules Medium Impact Spor...
          </div>
          <div className="JustLaunchedPrice">₹ 1264</div>
        </div>
        <div className="JustLaunchedImages">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/JWTDMuvRXtmCbS6FkQPb4SHH"
            className="JustLaunchedImage"
          ></img>
          <div className="JustLaunchedTitle">CULTSPORT</div>
          <div className="JustLaunchedText">
            Seamless Elaine Medium Impact Spo...
          </div>
          <div className="JustLaunchedPrice">₹ 1264</div>
        </div>
      </div>
    </>
  );
};
