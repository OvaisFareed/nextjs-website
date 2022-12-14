import { Layout } from "../components/main/layout";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styles/mtfxcss25a8.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
