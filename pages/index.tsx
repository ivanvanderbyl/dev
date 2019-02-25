import * as React from "react";
// import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout title="Ivan Vanderbyl">
      <h1>Hi 👋</h1>
      <p>
        This is Ivan Vanderbyl. I'm the a Product Manager at{" "}
        <a href="https://tricentis.com" target="_blank">
          Tricentis
        </a>{" "}
        working on Load Testing.
      </p>
      <p>
        Previously, I co-founded Flood IO
        <i> (Acq. Tricentis, June 2017)</i> and worked as a Software Engineer at{" "}
        <a href="https://digitalocean.com">DigitalOcean</a> in the early days.
      </p>
      <p>
        Over the last 12+ years I've founded 4 companies, exited 2, crashed and
        burned 1, and fizzled out another.
      </p>
      <p>
        I've worked in Product related roles including Engineering, Design, and
        Management. I enjoy the challenges of pushing products forward and
        challenging what is technically possible.
      </p>
    </Layout>
  );
};

export default IndexPage;
