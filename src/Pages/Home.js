import React from "react";
import Announcement from "../COMPONENTS/Windows/Announcement";
import Homewindow from "../COMPONENTS/Windows/Homewindow";
import Upcevent from "../COMPONENTS/Windows/Upcevent";

export default function Home() {
  return (
    <>
      {/* <Homewindow /> */}
      <Homewindow/>
      <Upcevent/>
      <Announcement/>
    </>
  );
}
