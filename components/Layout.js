import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Task App</title>
      </Head>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
