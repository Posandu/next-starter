import Head from "next/head";
import Image from "next/image";
import { FC } from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

const Home: FC = () => {
  return (
    <div className="m-0 bg-gray-900 min-h-screen py-10 text-white">
      <Head>
        <title>Posandu - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-2xl m-auto">
        <Image
          src="/profile.png"
          alt="Posandu"
          width={150}
          height={150}
          className="rounded-full"
        />

        <h1 className="text-4xl font-bold mt-4">Posandu</h1>
        <p className="mt-2">
          Fullstack developer, Blogger, and a passionate learner.
        </p>

        <div className="p-2"></div>

        <h2 className="text-2xl font-bold mt-4">About</h2>
        <p className="text-s text-gray-400 mt-4">
          Hey! I&apos;m Posandu, a {new Date().getFullYear() - 2008} year old
          fullstack developer from Sri Lanka. I have a passion for building
          things that people love to use. 
        </p>
        <div className="p-2"></div>

        <div className="flex">
          <a href="#">
            
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
