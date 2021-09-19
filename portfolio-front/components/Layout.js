import Header from "./Header";
import CustomHead from "./CustomHead";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <>
            <CustomHead />
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}