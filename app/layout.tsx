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
      <StateProvider>
        <body className="font-LexendDeca font-light ">
          <Header
            Config={Config}
            ProductCategory={ProductCategory}
            PostsCategory={PostCategory}
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
