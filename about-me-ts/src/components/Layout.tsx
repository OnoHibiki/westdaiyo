import React from "react";
import Header from "./Header";
import Footer from "./Footter";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return(
        <div>
            <Header />
            <main style={{ padding: '2rem'}}>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;