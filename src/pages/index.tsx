import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import Banner from "../components/banner";
import BuyMeaCoffe from "../components/buyMeaCoffe";
import Layout from "../components/layouts/layouts";
import UrlShortnerForm from "../components/urlShortnerForm";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Banner className="mt-10" />
      <UrlShortnerForm className="mt-12" />
      <BuyMeaCoffe className="mt-10" />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
