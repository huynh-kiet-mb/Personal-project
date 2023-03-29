import Head from "next/head";
import Header from "../header/index";
import MainLayout from "../main/index";

export const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <MainLayout children={children} />
        </>
    );
};

