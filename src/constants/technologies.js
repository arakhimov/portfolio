import React from "react";
import CSSLogo from "../components/icons/CSSLogo";
import GitLogo from "../components/icons/GitLogo";
import HTMLLogo from "../components/icons/HTMLLogo";
import JSLogo from "../components/icons/JSLogo";
import NodejsLogo from "../components/icons/NodejsLogo";
import ReactLogo from "../components/icons/ReactLogo";
import WebpackLogo from "../components/icons/WebpackLogo";

const technologies = [
  { name: "HTML5", component: ({ theme }) => <HTMLLogo theme={theme} /> },
  { name: "CSS3", component: ({ theme }) => <CSSLogo theme={theme} /> },
  { name: "JS", component: ({ theme }) => <JSLogo theme={theme} /> },
  { name: "Git", component: ({ theme }) => <GitLogo theme={theme} /> },
  { name: "Webpack", component: ({ theme }) => <WebpackLogo theme={theme} /> },
  { name: "React", component: ({ theme }) => <ReactLogo theme={theme} /> },
  { name: "NodeJS", component: ({ theme }) => <NodejsLogo theme={theme} /> }
];

export default technologies;
