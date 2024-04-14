import React from "react";
import { HeroParallax } from "./Ourwork";

const datas = [
  {
    title: "Overalls",
    link: "https://docs.google.com/spreadsheets/d/1bTjfpigcLDQtB0TDn1nJgK_AzWb7hJoqUxkfaUUJuvg/edit#gid=0",
    thumbnail: "/chart.png",
  },
  {
    title: "Subsystem Impacts",
    link: "https://docs.google.com/spreadsheets/d/1bTjfpigcLDQtB0TDn1nJgK_AzWb7hJoqUxkfaUUJuvg/edit#gid=0",
    thumbnail: "/Subsystem Impacts.png",
  },
  {
    title: "System Impacts",
    link: "https://docs.google.com/spreadsheets/d/1bTjfpigcLDQtB0TDn1nJgK_AzWb7hJoqUxkfaUUJuvg/edit#gid=0",
    thumbnail: "/System Impacts.png",
  },
  {
    title: "Overalls",
    link: "https://docs.google.com/spreadsheets/d/1bTjfpigcLDQtB0TDn1nJgK_AzWb7hJoqUxkfaUUJuvg/edit#gid=0",
    thumbnail: "/chart.png",
  },
  {
    title: "Subsystem Impacts",
    link: "https://docs.google.com/spreadsheets/d/1bTjfpigcLDQtB0TDn1nJgK_AzWb7hJoqUxkfaUUJuvg/edit#gid=0",
    thumbnail: "/Subsystem Impacts.png",
  },
  {
    title: "Overalls",
    link: "https://docs.google.com/spreadsheets/d/1bTjfpigcLDQtB0TDn1nJgK_AzWb7hJoqUxkfaUUJuvg/edit#gid=0",
    thumbnail: "/chart.png",
  },
  {
    title: "System Impacts",
    link: "https://docs.google.com/spreadsheets/d/1bTjfpigcLDQtB0TDn1nJgK_AzWb7hJoqUxkfaUUJuvg/edit#gid=0",
    thumbnail: "/System Impacts.png",
  },
  {
    title: "Subsystem Impacts",
    link: "https://docs.google.com/spreadsheets/d/1bTjfpigcLDQtB0TDn1nJgK_AzWb7hJoqUxkfaUUJuvg/edit#gid=0",
    thumbnail: "/Subsystem Impacts.png",
  },
  {
    title: "System Impacts",
    link: "https://docs.google.com/spreadsheets/d/1bTjfpigcLDQtB0TDn1nJgK_AzWb7hJoqUxkfaUUJuvg/edit#gid=0",
    thumbnail: "/System Impacts.png",
  },
];

function page() {
  return (
    <div>
      <HeroParallax products={datas} />
    </div>
  );
}

export default page;
