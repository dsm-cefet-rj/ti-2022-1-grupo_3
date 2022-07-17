import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const GuestRoute = ({ children, guest = true }) => {
  const { token } = useSelector((state) => state.user);

  if (!token) {
    return <Navigate to="/login"/>;
  }

  return children;
};

export const UserRoute = ({ children }) => {
  return <GuestRoute guest={false}>{children}</GuestRoute>
}