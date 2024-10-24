import { Link } from "@nextui-org/link";

import { Head } from "./head";

import { GRAPH_STYLE_API } from "@/lib/query/style";
import { Navbar } from "@nextui-org/navbar";
import ReponsiveNavbar from "./Navbar";
import { useEffect, useState } from "react";
import { getAllCategory } from "@/lib/query/category";

export default function DefaultLayout({
  children,
  styleSheet,
  seoContent }: {
    children: React.ReactNode;
    styleSheet?: any;
    seoContent?: any
  }) {
  const [menuItems, setMenuItems] = useState([]);
  const getCate = async () => {
    const response = await getAllCategory(); // Your API call
    console.log(response)
    // if (!response.ok) throw new Error('Network response was not ok');
    return response
  };

  const handleGetDataMenu = async () => {
    try {
      const response = await getCate();
      setMenuItems(response);
    } catch (error) {
      console.error('Failed to fetch menu items:', error);
    }
  };
  useEffect(() => {
    handleGetDataMenu();
  }, []);


  return (

    <div className="relative flex flex-col h-full bg-white">
      <Head style={styleSheet} seoContent={seoContent} />
      <ReponsiveNavbar menuItems={menuItems} />
      <main className="text-black text-justify p-20">
        {children}
      </main>
      {/* <footer className="w-full flex items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://nextui-docs-v2.vercel.app?utm_source=next-pages-template"
          title="nextui.org homepage"
        >
          <span className="text-default-600">Powered by</span>
          <p className="text-primary">NextUI</p>
        </Link>
      </footer> */}
    </div>
  );
}
