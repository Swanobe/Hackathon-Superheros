import React from "react";
import { Link } from "react-router-dom";

const linkStyle = {
  color: "#1746A2",
};

export default function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <em>
        This is a dating app for superheroes where they can find and interact
        with other superheroes in their local area that have similar skills,
        interests and powers.{" "}
      </em>
      <ul>
        <li><Link to="/profiles" style ={linkStyle}>Explore all superheroes </Link></li>
        <li><Link to="/profile" style ={linkStyle}>Find a match</Link></li>
      </ul>
    </>
  );
}
