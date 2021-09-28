import Head from "next/head";

const CustomHead = (Component, props) => {



    return(
        <Head>
            <meta charSet="UTF-8" />
            <meta content="width=device-width, initial-scale=1" name="viewport"/>
            <title>Alexis Molineau | { Component.Component.title }</title>
            <meta name="description" content={ Component.Component.meta } />
            <link rel="icon" type="image/png" href="/img/logo.png" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+HK:wght@100;300;400;500;700;900&display=swap"
                  rel="stylesheet" />
        </Head>
    );
}

export default CustomHead;