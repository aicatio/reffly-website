import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import Banner from "../components/banner";
import Layout from "../components/layouts/layouts";
import UrlShortnerForm from "../components/urlShortnerForm";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Banner />
      <UrlShortnerForm className="my-12" />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
