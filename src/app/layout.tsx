import Header from "@swiftshop/components/Header/Header";
import "./globals.css";
import Footer from "@swiftshop/components/Footer/Footer";
import QueryClientProviders from "@swiftshop/lib/QueryClientProvider";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <QueryClientProviders>{children}</QueryClientProviders>
        <Footer />
      </body>
    </html>
  );
}
