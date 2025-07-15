import { FaReact, FaHtml5, FaCss3, FaNode } from "react-icons/fa";
import { SiJavascript, SiTypescript } from "react-icons/si";
import Project1 from "../assets/RazoaPayClone.png";
import Project2 from "../assets/Example.png";
import Project3 from "../assets/CourseCartProject.png";
import Project4 from "../assets/ProductCart.png";
import Project5 from "../assets/StudySync.png";
import Project6 from '../assets/Forever.png';
import Project7 from '../assets/QuickShow.png';
import Project8 from "../assets/Tomoto.png";

export const resumeLink =
  "https://drive.google.com/file/d/1PPyjmP2SlnoevoLNE9BZ58-FNefOQCdq/view?usp=drive_link";
export const skills = [
  {
    id: 0,
    tech: "React JS",
    icon: <FaReact />,
  },
  {
    id: 1,
    tech: "HTML",
    icon: <FaHtml5 />,
  },
  {
    id: 2,
    tech: "CSS",
    icon: <FaCss3 />,
  },
  {
    id: 3,
    tech: "JavaScript",
    icon: <SiJavascript />,
  },
  {
    id: 4,
    tech: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    id: 5,
    tech: "Node JS",
    icon: <FaNode />,
  },
];

export const projects = [

  {
    id: 0,
    project_name: "Forever Full Stack E-Commerace Website",
    project_desc: "E-commerce website with cart, checkout, payment, and admin panel support.",
    features:
      "An elegant and responsive e-commerce website built with the MERN stack and Tailwind CSS. Users can browse products, add to cart, make secure payments via Stripe, and manage their orders. The admin dashboard allows product, order, and user management. Real-time toast notifications, smooth page transitions, and category-based filtering enhance the shopping experience.",
    tech_stack: ["React Js", "TailwindCss","API", "Router DOM", "Axios"," Toastify","Node.js","Express.js","MongoDB","JWT","Stripe","Razorpay"],
    project_img: Project6,
    project_url: "https://e-commerace-full-stack-ritu.vercel.app",
    github_link: "https://github.com/RituChoudhary01/ECommeraceFullStack",
    reverse: false,
  },
  {
    id: 4,
    project_name: "Quick Show Full Stack Movie Booking Website",
    project_desc:
      "A seamless ticket booking platform for movies, shows, and events",
    features:
      "This movie ticket booking app offers real-time seat selection, responsive show listings, secure Stripe payments, and dynamic booking confirmation. Users can browse movies, view show timings, and instantly book seats with visual seat layouts and instant UI feedback — delivering a smooth and intuitive movie booking experience across all devices.",
    tech_stack: ["API", "MERN Stack", "Tailwind CSS","Nodemailer","Stripe","Clerk"],
    project_img: Project7,
    project_url: "https://food-delivery-website-gamma.vercel.app",
    github_link: "https://github.com/RituChoudhary01/Tomato-Food-delivery-website",
    reverse: true,
  },
  {
    id: 0,
    project_name: "Tomoto Full Stack Food Delivery All",
    project_desc: "Order food, track delivery status, and manage system through admin panel.",
    features:
      "A full-featured food delivery web application built with the MERN stack. Users can  add items to cart, place orders, and track delivery status in real time. The My Orders page shows live updates for each placed order. Admins have a dedicated dashboard to add, update, or remove food items and manage user orders. The UI is responsive, and users receive instant toast notifications for actions like placing or canceling orders, making for a seamless food-ordering experience",
    tech_stack: ["React JS", "TailwindCss","API"],
    project_img: Project8,
    project_url: "https://top-courses-react-ten.vercel.app",
    github_link: "https://github.com/RituChoudhary01/top-courses-react?tab=readme-ov-file",
    reverse: false,
  },
  {
    id: 4,
    project_name: "React-ShoppingCard-Website",
    project_desc:
      "Responsive React shopping cart with dynamic product browsing, quantity updates, and real-time pricing.",
    features:
      "This React Shopping Cart app offers a responsive design, easy product browsing, dynamic cart updates, quantity management, and real-time total price calculation. It ensures a smooth, user-friendly shopping experience across all devices with instant UI feedback.",
    tech_stack: ["API", "Redux", "React", "Tailwind CSS"],
    project_img: Project4,
    project_url: "https://shopping-cart-react-omega-nine.vercel.app",
    github_link: "https://github.com/RituChoudhary01/shopping-cart-react?tab=readme-ov-file",
    reverse: true,
  },
  {
    id: 0,
    project_name: "Top-Courses – React",
    project_desc: "React-based Course Explorer with Real-Time Filtering.",
    features:
      "An interactive and beautifully designed Top Courses Web App built with React.js and Tailwind CSS. Users can browse, like, and remove liked courses with instant feedback using toast notifications. This project showcases real-time category filtering, responsive design, and smooth UX — ideal for learning core React concepts in a practical way.",
    tech_stack: ["React JS", "TailwindCss","API"],
    project_img: Project3,
    project_url: "https://top-courses-react-ten.vercel.app",
    github_link: "https://github.com/RituChoudhary01/top-courses-react?tab=readme-ov-file",
    reverse: false,
  },
 
  {
    id: 1,
    project_name: "Find the Shortest Path Using Dijkstra's Algorithm for My Campus – IIT ISM Dhanbad",
    project_desc: "Dijkstra’s Algorithm use for campus navigation",
    features:
      "Calculates the shortest path between campus locations using Dijkstra’s Algorithm. Features graph representation, efficient pathfinding, distance calculation with the Haversine formula",
    tech_stack: ["C++", " Dijkstra's Algorithm "],
    project_img: Project2,
    project_url: "",
    github_link: "https://github.com/RituChoudhary01/find-the-shortest-path-using-Dijkstra-s-Algorithm",
    reverse: true,
  },
  {
    id: 2,
    project_name: "StudySync",
    project_desc: "Basic frontend project with modern UI design",
    features:
      "Study Sync is a simple and clean user interface built using HTML and CSS. It features a responsive layout, modern design elements, and is perfect for practicing basic frontend styling skills.",
    tech_stack: ["HTML", "CSS"],
    project_img: Project5,
    project_url: "https://study-sync-five-mu.vercel.app",
    github_link: "https://github.com/RituChoudhary01?tab=repositories",
    reverse: false,
  },
  {
    id: 2,
    project_name: "Razorpay Clone",
    project_desc: "Razorpay UI clone built TailWindCss.",
    features:
      "This Razorpay clone is built using only HTML and Tailwind CSS. It features a pixel-perfect, responsive layout, smooth scrolling, and a clean, modern UI—ideal for practicing frontend design, layout structuring, and Tailwind utility classes.",
    tech_stack: ["HTML", "Tailwind"],
    project_img: Project1,
    project_url: "https://razapay-clone.vercel.app/#",
    github_link: "https://github.com/RituChoudhary01/RazapayClone",
    reverse: true,
  },
];

export const navLinks = [
  {
    id: 0,
    name: "Home",
    href: "Home",
  },
  {
    id: 1,
    name: "Skills",
    href: "Skills",
  },
  {
    id: 2,
    name: "Experience ",
    href: "Experience",
  },
  {
    id: 3,
    name: "Projects ",
    href: "Projects",
  },
  {
    id: 4,
    name: "Contact",
    href: "Contact",
  },
];
