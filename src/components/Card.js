import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
export default function Card(props) {
  return (
    <div className="card">
      <img src={props.imageUrl} alt={props.title} className="card--image" />
      <div className="card-stats">
        <div className="info-location">
          <span className="icon">
            <FontAwesomeIcon icon={faLocationDot} size="1x" color="#F55A5A" />
          </span>
          <span className="location">{props.location}</span>
          <span className="google-maps">
            <a href={props.googleMapsUrl}>View on Google Maps</a>
          </span>
        </div>
        <h1 className="title">{props.title}</h1>
        <h2 className="card-date">
          {props.startDate} - {props.endDate}
        </h2>
        <p className="card-description">{props.description}</p>
      </div>
    </div>
  );
}
