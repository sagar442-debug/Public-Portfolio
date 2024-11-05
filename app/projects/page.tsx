import React from "react";
import type { Metadata } from "next";
import { projects } from "./project-data";
import Image from "next/image";
export const runtime = "edge";

export const metadata: Metadata = {
  title: "Projects",
  description: "My Projects",
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Projects</h1>
      <div className=" grid lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1">
        {projects.map((project, index) => (
          // <a
          //   key={index}
          //   href={project.url}
          //   target="_blank"
          //   rel="noopener noreferrer"
          //   className="block group hover:opacity-80 transition-opacity duration-200"
          // >
          //   <div className="flex flex-col">
          //     <div className="w-full flex justify-between items-baseline">
          //       <span className="text-black dark:text-white font-medium tracking-tight">
          //         {project.title}
          //       </span>
          //       <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
          //         {project.year}
          //       </span>
          //     </div>
          //     <p className="prose prose-neutral dark:prose-invert pt-3">
          //       {project.description}
          //     </p>
          //   </div>
          // </a>
          <div key={index}>
            <div className="">
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group hover:opacity-80 transition-opacity duration-200"
              >
                <Image
                  src="/mockup.webp"
                  alt="Profile photo"
                  className=" bg-gray-100 block h-[250px] "
                  unoptimized
                  width={400}
                  height={100}
                  priority
                />
              </a>
            </div>
            <div className="mt-2 dark:text-neutral-300">
              <h1 className="tracking-wider font-semibold text-xl">
                {project.title}
              </h1>
              <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                {project.year}
                {project.completed ? " (Completed)" : " (In Progress)"}
              </span>
              <p className="text-sm">
                {project.description.length > 90
                  ? project.description.slice(0, 90) + "..."
                  : project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
