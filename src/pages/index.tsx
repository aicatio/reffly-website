import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import BuyMeaCoffe from "../components/buyMeaCoffe";
import ContributedBySection from "../components/contributedBySection/contributedBySection";
import EnterpriseDetails from "../components/enterPriceDetails";
import Layout from "../components/layouts/layouts";
import UrlShortnerForm from "../components/urlShortnerForm";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <UrlShortnerForm className="mt-12" />
      <BuyMeaCoffe className="mt-10 pb-20" />
      <EnterpriseDetails />
      <ContributedBySection />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
