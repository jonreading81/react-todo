import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import {Helmet} from "react-helmet";
import styles from './app.module.scss'; 

export default ({children}) => (
  <div className={styles.app}>
    <Helmet>
        <meta charSet="utf-8" />
        <title>My Todo</title>
        <link  rel="stylesheet" href="https://necolas.github.io/normalize.css/latest/normalize.css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link href="https://fonts.googleapis.com/css?family=Manjari&display=swap" rel="stylesheet"></link>
    </Helmet>
    <Header />
    <main>
      {children}
    </main>
  </div>
);