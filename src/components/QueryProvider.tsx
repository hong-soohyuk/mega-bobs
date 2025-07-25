'use client';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactNode, useRef} from 'react';

const QueryProvider = ({children}: {children: ReactNode}) => {
  const queryClientRef = useRef<QueryClient | undefined>(undefined);
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  return (
    <QueryClientProvider client={queryClientRef.current}>
      {children}
    </QueryClientProvider>
  );
};

export default QueryProvider;
