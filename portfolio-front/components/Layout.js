import Header from "./Header";
import CustomHead from "./CustomHead";
import Footer from "./Footer";
import ClipLoader from "react-spinners/ClipLoader";


export default function Layout({ children, Component, loading }) {

    const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: "1000"};



    return (
        <>
            <CustomHead Component={Component}/>
            <Header />
            <ClipLoader css={style} color={"#5297c2"} loading={loading} size={120}/>
            <main>{children}</main>
            <Footer />
        </>
    )
}