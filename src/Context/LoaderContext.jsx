import React, { createContext, useState } from 'react';

export const LoaderContext = createContext({
  isLoaderComplete: false,
  setIsLoaderComplete: () => {},
});
