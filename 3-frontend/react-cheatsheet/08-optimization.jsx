/*
https://www.codecademy.com/learn/learn-advanced-react/modules/advanced-react-optimization/cheatsheet
The React Profiler
The React profiler browser extension allows developers to record a session while using a React app in development mode. Once recorded, the profiler displays a flame graph, alongside other information on how React rendered each component.
*/



/*
The React profiler flame graph
A flame graph in the React profiler displays all components that were rendered during a session. Components that took longer to render are displayed in yellow, while ones that took less time to render are displayed in blue.

The React profiler displays a flame graph where the Profile component is displayed as a yellow block.
*/




/*
Memoization
Memoization prevents rerunning expensive operations by returning a cached result when given the same inputs as a past operation.
*/




/*
Memoizing values
React provides the useMemo() hook to memoize values. It takes two arguments, a function that returns a value, and a list of dependencies. Given the same list of dependencies, useMemo() will return a memoized value.
*/




/*
Higher order components
A higher order component is a component that takes in a component, adds functionality, then returns a new component with extra functionality.
*/




/*
Memoizing React components
React.memo() memoizes a React component. It takes a React component as an argument, then when given the same props, it will prevent React from re-rendering the provided component even when its parent re-renders.
*/
import React from 'react';

const MemoizedComponent = React.memo(() => {
    return <div />
});





/*
Memoizing functions
React provides the useCallback() hook to memoize functions. It takes two arguments, a function, and a list of dependencies. Given the same list of dependencies, useCallback() will return a memoized function.
*/

import { useCallback } from 'react';

// ...

const memoizedFunction = useCallback((number) => formatNumber(number), []);





/*
Code splitting
Code splitting is the act of separating code from the main JavaScript bundle in a React app to allow the main bundle to be smaller which usually reduces download, parsing, and execution time.
*/




/*
Chunks
When a library or a component is split out from the main JavaScript bundle.js file, it is called a chunk.
*/




/*
Code splitting a module
The import() function imports a module while instructing the bundler to create a separate chunk for the imported module. import() takes one argument, which is the path of a module. import() returns a JavaScript Promise.
*/

const largeModule = import('./largeModule.js');





/*
Code splitting a component
The React.lazy() function imports a React component while instructing the bundler to create a separate chunk for the imported component. React.lazy() takes one argument, a function that returns an import(), which takes a path to a React component as its argument.
*/
const LargeComponent = React.lazy(await () => import('./LargeComponent'));





/*
Suspense
The <Suspense> React component wraps components imported with React.lazy(). <Suspense> instructs React to load the rest of the React app and to display a loading state while the React component is downloaded and rendered. <Suspense> takes one prop named fallback, which is a React component shown while its lazily loaded children are unavailable.
*/

import { Suspense }, React from 'react';

const LargeComponent = React.lazy(await () => import('./LargeComponent'));

const Page = () => {
    return {
    < Suspense fallback = {< p > Loading...</p >}>
<LargeComponent />
    </Suspense >
  }
};