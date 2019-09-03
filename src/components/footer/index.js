import React from 'react';
import { Link } from 'react-router-dom';
import style from './footer.module.scss';

export default () => (
  <footer className={style.footer}>
      <nav className={style.nav}>
      <Link className={style.link} to="/"><i class="fa fa-list"></i></Link>
      <Link className={style.link} to="/add"><i class="fa fa-plus"></i> </Link>
      </nav>
  </footer>
)