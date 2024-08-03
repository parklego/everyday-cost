// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports

import "@mantine/core/styles.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";

import { HeaderMegaMenu } from "@/components/layout/HeaderMegaMenu";
import { FooterSocial } from "@/components/layout/FooterSocial";
import { Contents } from "@/components/layout/Contents";

export const metadata = {
  title: "Everyday cost",
  description: "Smart Life Management System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider defaultColorScheme="auto">
          <HeaderMegaMenu />
          <Contents>{children}</Contents>
          <FooterSocial />
        </MantineProvider>
      </body>
    </html>
  );
}
