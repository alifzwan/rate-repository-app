import Main from './src/components/Main';
import { StatusBar } from 'expo-status-bar'
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';
import createApolloClient from './src/utils/apolloClient';

import Constants from 'expo-constants';

const apolloClient = createApolloClient();

export default function App() {
  console.log("Constants:", Constants.expoConfig);

  return (
    <>
    
      <StatusBar style="auto" /> 
      <NativeRouter>   {/* NativeRouter wraps the entire application and provides the routing capabilities. */}
        {/* ApolloProvider wraps the Main component and provides the Apollo Client instance to the entire application. */}
        <ApolloProvider client={apolloClient}>
          <Main />
        </ApolloProvider>
      </NativeRouter>
    </>
  );
}

