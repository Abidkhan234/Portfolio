import { createContext, useContext, useState } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [toggleBtn, setToggleBtn] = useState(false);

  const FAQdata = [
    {
      question: "How do you ensure your UI is responsive and modern?",
      answer:
        "I use Tailwind CSS to quickly build responsive layouts and apply modern design principles. I also test layouts across different screen sizes to ensure consistent behavior.",
    },
    {
      question: "Are your projects mobile-friendly?",
      answer:
        "Absolutely. I use Tailwind’s responsive utilities to ensure layouts adjust smoothly across devices from mobile to large desktops.",
    },
    {
      question: "How do you handle performance in React apps?",
      answer:
        "I optimize performance by splitting components, using React keys properly, reducing unnecessary re-renders, and lazy-loading components if needed. I also keep my state local when it doesn’t need to be global.",
    },
    {
      question: "What are your future goals in frontend development?",
      answer:
        "I aim to improve in API integration, form validation, and backend connectivity using tools like Firebase or Express.js, while continuing to build polished UIs that feel like real-world products.",
    },
  ];

  const mediaIcons = [
    {
      icon: <BsLinkedin />,
      path: "https://www.linkedin.com/in/abid-shah-khan",
    },
    {
      icon: <FaGithubSquare />,
      path: "https://github.com/Abidkhan234",
    },
  ];

  const navLinks = [
    {
      text: "Home",
      path: "/",
    },
    {
      text: "About Me",
      path: "/about",
    },
    {
      text: "Projects",
      path: "/projects",
    },
  ];

  return (
    <AppContext.Provider
      value={{
        toggleBtn,
        setToggleBtn,
        FAQdata,
        mediaIcons,
        navLinks,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
