import Head from "next/head";
import Header from "./Header";

export default function Container(props) {
  const { children, ...customMeta } = props;
  const meta = {
    title: "Bicycles",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <Header />
      <main>{children}</main>
    </div>
  );
}
