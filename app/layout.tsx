import "@styles/styles.css";
import "@styles/CKGlobal.css";
import "@styles/animation.css";
import { StateProvider } from "@context/StateProvider";
import Header from "@components/layout/Header";
import Copyright from "@components/layout/Copyright";
import { find } from "@config/lib/api";
import localFont from "next/font/local";
import Footer from "@components/layout/Footer";
import Hotline from "@components/layout/Hotline";
import BookingPage from "@components/layout/Booking";
import Hotline1 from "@components/layout/Hotline1";
import Script from "next/script";

const UVNM = localFont({
  src: "../public/UTM Avo.ttf",
  display: "swap",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const Config = await find("Config");
  const Posts = await find("Posts ");

  const PostCategory = await find("PostCategory");
  const ProductCategory = await find("ProductCategory");
  const Products = await find("Products");
  const Branches = await find("Branches");

  return (
    <html lang="en" className={UVNM?.className}>
      <head>
        {/* Xác thực Google Search Console & Google Merchant Center */}
        <meta
          name="google-site-verification"
          content="8rvFCBhapBI4UkfChsJNB78pHZpn36Rb9cBV9hv4Bmo"
        />

        {/* Thêm Google Tag Manager Script */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MJQHXN5K');
          `}
        </Script>
      </head>
      <StateProvider>
        <body className="font-LexendDeca font-light ">
          <Header
            Config={Config}
            ProductCategory={ProductCategory}
            PostsCategory={PostCategory}
          />
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MJQHXN5K" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
          <main className="d:mt-[132px] p:mt-[0px] d:w-[1200px] p:w-auto d:mx-auto p:mx-2 ">
            {children}
          </main>
          <BookingPage ConfigData={Config} />
          <Footer Config={Config} Branches={Branches} />
          <Hotline Config={Config} />
          <Hotline1 Config={Config} />
          <Copyright Config={Config} />
        </body>
      </StateProvider>
    </html>
  );
}
