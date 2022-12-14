import React from "react";
import mapWest from "../assets/mapWest.svg";
import pointerJurongwest from "../assets/pointerJurongwest.svg";
import DropoffInformation from "./DropoffInformation";

const MapWest = ({
  filterDataToAreas,
  handleDropoffClick,
  locationPick,
  dropoffClick,
  setPrevPage,
}) => {
  return (
    <div className="donate-location-container">
      <div className="donate-location-fonts-box ">
        <span className="donate-location-font2 mt-4">
          Choose a drop-off point
        </span>
        <span className="donate-location-font1 mt-1 mb-2">
          Our drop-off points are run by our volunteers, the available time are
          different at every drop-off points
        </span>
      </div>
      <div className="map-container">
        <img src={mapWest} alt="mapimage" />
        <div className="location-pointers">
          <img
            src={pointerJurongwest}
            onClick={() => handleDropoffClick("Jurong West")}
            alt="locationpin"
            className="location-pointers1"
          />
          <img
            src={pointerJurongwest}
            alt="locationpin"
            onClick={() => handleDropoffClick("Watten Estate")}
            className="location-pointers2"
          />
        </div>
      </div>
      {dropoffClick ? (
        <DropoffInformation
          locationPick={locationPick}
          filterDataToAreas={filterDataToAreas}
          setPrevPage={setPrevPage}
        />
      ) : null}
    </div>
  );
};

export default MapWest;
