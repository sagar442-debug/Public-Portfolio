import Image from "next/image";
import { socialLinks } from "./config";
import Link from "next/link";
export const runtime = "edge";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.jpeg"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0 duration-200"
          unoptimized
          width={200}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Hi, I am Sagar.
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I am a softwarer developer. I love building something that makes our
          life bit a easier.
        </p>
        <p>
          I'm passionate about building SaaS solutions and thrive in fast-paced
          development environments. Whether you need a full-stack application,
          I’ve got you covered with expertise in Next.js, React, Node.js, and
          MongoDB, delivering efficient and scalable solutions with speed.
          Checkout my <Link href="/projects">projects</Link> to learn more.
        </p>

        <p>
          Connect with me on my{" "}
          <a
            target="_blank"
            href="https://www.linkedin.com/in/sagar-sapkota091/"
          >
            socials
          </a>{" "}
          .
        </p>
        <p>Let's build something awesome together! </p>
      </div>
    </section>
  );
}
