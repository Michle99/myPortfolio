import React from "react";
import { Container, Divider } from "@chakra-ui/react";
import Head from "next/head";
import getGithubRepos from "../constant/getGithubRepos";
import styles from "../../styles/Home.module.css";
import GithubSection from "../components/section/GithubSection";
import { GitRepo } from "../types/gitRepo";

interface IGithubPage {
  repos: GitRepo[];
}

const GithubPage: React.FC<IGithubPage> = ({ repos }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Michael | Github</title>
        <meta name="description" content="Michael | Web & Mobile Application Developer" />
        <link rel="icon" href="/" />
      </Head>

      <main>
        <Container maxW="container.lg" mt={["5", "10"]} mb={["5", "10"]}>
          <GithubSection repos={repos} />
        </Container>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const repos = await getGithubRepos(process.env.GITHUB_USERNAME || "");

  return {
    props: {
      repos: repos || null,
    },
  };
}

export default GithubPage;
