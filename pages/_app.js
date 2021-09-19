import '../styles/globals.css';
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout/Layout';
function MyApp({ Component, pageProps }) {
      const [login, setLogin] = useState(false);
      const onLoginHandler = (data) => {
            setLogin(data);
      };
      return (
            <Layout login={onLoginHandler} isLogin={login}>
                  <Component {...pageProps} data={onLoginHandler} />
            </Layout>
      );
}

export default MyApp;
