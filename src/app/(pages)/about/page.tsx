import React from "react";
import HeroSection from "../(shared)/HeroSection";
import { Metadata } from "next";
import Image from "next/image";
import Playground from "@/assets/playground.jpg";
import Link from "next/link";
import StaffList from "./components/StaffList";

export const metadata: Metadata = {
  title: "About",
};

const About = () => {
  return (
    <>
      <HeroSection />
      <section className="container">
        <h1 className="text-center lg:text-6xl text-4xl py-2 font-bold">
          About Us
        </h1>
        <article className="flex gap-4 py-8 flex-col lg:flex-row">
          <div className="rounded-lg overflow-hidden grid place-items-center">
            <Image
              src={Playground}
              width={520}
              height={520}
              alt="Playground image"
              className="w-full md:w-2/3 h-[300px] lg:w-[520px]"
            />
          </div>
          <div className="flex flex-col lg:max-w-[40%] gap-8 items-center justify-center">
            <p>
              The idea for creating this type of website came from a deep love
              for sports and a passion for following football results. To help
              others and myself access the desired results more easily on sports
              betting platforms, I created a site that exclusively deals with
              football statistics related to goals and match outcomes.
            </p>
            <p>
              I have also integrated an <strong>ELO</strong> rating system for
              football teams, which tracks their results in league and cup
              matches. I wish you all the best in using my website and reaching
              your desired outcomes. Good luck!
            </p>
            <p className="me-auto">
              For more info and stats contact:{" "}
              <Link
                href={"mailto:basic2006@hotmail.com"}
                className="underline font-bold"
              >
                basic2006@hotmail.com
              </Link>
            </p>
          </div>
        </article>
        <StaffList />
      </section>
    </>
  );
};

export default About;
