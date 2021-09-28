import Header from "./Header";
import CustomHead from "./CustomHead";
import Footer from "./Footer";

export default function Layout({ children, Component }) {
    return (
        <>
            <CustomHead Component={Component}/>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}