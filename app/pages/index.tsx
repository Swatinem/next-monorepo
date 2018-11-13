import Link from "next/link";
import Layout from "../components/Layout";
import foo from "../../foo";

export default () => (
  <Layout title="Home | Next.js + TypeScript Example">
    {foo("foo")}
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
);
