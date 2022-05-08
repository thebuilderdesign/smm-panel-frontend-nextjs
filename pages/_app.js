import "../styles/globals.css";
import "../public/assets/vendor/datatables/dataTables.bootstrap4.min.css";
import "../public/assets/css/sb-admin-2.min.css";
import "../public/assets/vendor/fontawesome-free/css/all.min.css";

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

// export default MyApp;

import { SessionProvider } from "next-auth/react";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
