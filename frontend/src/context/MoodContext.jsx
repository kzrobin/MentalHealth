import React, { createContext, useState, useContext, useEffect } from "react";

const MoodContext = createContext();

export const MoodProvider = ({ children }) => {
  const [mood, setMood] = useState(null);

  useEffect(() => {
    const savedMood = localStorage.getItem("userMood");
    if (savedMood) {
      setMood(savedMood);
    }
  }, []);

  const updateMood = (newMood) => {
    setMood(newMood);
    localStorage.setItem("userMood", newMood);
  };

  const clearMood = () => {
    setMood(null);
    localStorage.removeItem("userMood");
  };

  return (
    <MoodContext.Provider value={{ mood, updateMood, clearMood }}>
      {children}
    </MoodContext.Provider>
  );
};

export const useMood = () => {
  const context = useContext(MoodContext);
  if (!context) {
    throw new Error("useMood must be used within MoodProvider");
  }
  return context;
};
