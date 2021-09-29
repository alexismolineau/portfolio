import '../styles/base.css'
import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Layout from "../components/Layout";
config.autoAddCss = false
import axios from 'axios';
import {useState} from "react";


function MyApp({ Component, pageProps }) {

    const [loading, setLoading] = useState(false);

    const http = axios.create( {
    });



    http.interceptors.request.use(async config => {
        //const session = await getSession();
        setLoading(true);
        return config;
    });

    http.interceptors.response.use(async config => {
        //const session = await getSession();
        setLoading(false);
        return config;
    });

  return (
      <Layout Component={Component} loading={loading}>
        <Component {...pageProps} http={http}/>
      </Layout>
  )
}

export default MyApp
