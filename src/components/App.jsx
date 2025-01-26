//Import css
import css from './App.module.css';

//import components
import { useDispatch, useSelector } from 'react-redux';
import { Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { refreshUser } from '../redux/auth/operations';
import { selectIsRefreshing } from '../redux/auth/selectors';
import { lazy } from 'react';

import PrivateRoute from './PrivateRoute/PrivateRoute';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';

function App() {
  return <></>;
}

export default App;
