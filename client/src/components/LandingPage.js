import React from "react";

const LandingPage = () => {
  const getTimeBasedGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const userName = "John Doe"; // Retrieve from JWT Token in production

  return <h1>{`${getTimeBasedGreeting()}, ${userName}`}</h1>;
};

export default LandingPage;
