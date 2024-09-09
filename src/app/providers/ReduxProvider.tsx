"use client"; // Ensure this is a client component

import { Provider } from 'react-redux';
import { store } from '../redux/store'; // Adjust import path if needed

const ReduxProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
