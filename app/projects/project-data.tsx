export interface Project {
  title: string;
  year: number;
  description: string;
  completed: boolean;
  url: string;
}

export const projects: Project[] = [
  {
    title: "ResumeWiz",
    year: 2024,
    description:
      "Currently I am working on SAAS product called ResumeWiz. It is a resume builder tool that helps you to create a professional resume in minutes. It is build using Next.Js, Node.js, MongoDB and TailwindCSS.",
    completed: false,
    url: "https://wizresu.me/",
  },
  {
    title: "FileCompressor",
    year: 2024,
    description:
      "This is a very light react app that helps you to compress your files. It is build using React. This was build within 2 hours.",
    completed: true,
    url: "https://file-compressor-pi.vercel.app/",
  },
  {
    title: "EveChat App",
    year: 2024,
    description:
      "Built a chat application using React, Node.js, MongoDB and Socket.io. This is a real time chat application.",
    completed: true,
    url: "https://eve-chat-app-v1.fly.dev/login",
  },
  {
    title: "MarketPlace FullStack App",
    year: 2023,
    description:
      "This is a fullstack web application that helps you to buy and sell products. It is built using React, Node.js, MongoDB and TailwindCSS with CRUD operations and custom authentication.",
    completed: true,
    url: "https://market-place-mern.vercel.app/",
  },
  {
    title: "MovixExplorer",
    year: 2023,
    description:
      "Built a movie explorer application using React, TailwindCSS and Imdb API. This project focuses heavily on the UI/UX design.",
    completed: true,
    url: "https://movix-explore-react-web-app.vercel.app/",
  },
];
