/*
What Is an Error Boundary?
Error boundaries are React components that wrap sections of a React application, catching runtime errors anywhere in their child component tree. They have three primary features:

Displaying a backup user-interface (a “fallback UI”)
Logging errors
Allowing the broken component to recover
*/

<ErrorBoundary Fallback={FallbackUI}>
    <ProtectedComponent />
</ErrorBoundary>




/*
When to Use Error Boundaries?
Error boundaries should be used as close as possible to the parts of your application that can crash your application due to runtime errors.

Common places to use error boundaries are around new features that have not been thoroughly tested.

How Do Error Boundaries Render a Fallback UI?
The static getDerivedStateFromError() lifecycle method is used to update the error boundary’s error state and trigger a fallback UI to be rendered.

This lifecycle method is invoked after an error has been thrown by a descendant component, receiving the error that was thrown as an argument. It should then return the error boundary’s next this.state value which may be used to determine what to render: a provided fallback UI or the default wrapped component tree.
*/

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null }
    }

    static getDerivedStateFromError(error) {
        return { error };
    }

    render() {
        if (this.state.error) {
            return (
                <div>
                    <h2>An error was detected!</h2>
                </div>
            );
        }
        return this.props.children;
    }
}




/*
Why Are Error Boundaries Class Components?
React components become error boundaries once they implement one (or both) of the lifecycle methods static getDerivedStateFromError() and/or componentDidCatch(). In order to use these lifecycle methods, the error boundary must be a class component.
*/



/*
How Does the <ErrorBoundary> Component From react-error-boundary Log Errors?
The ErrorBoundary component from react-error-boundary accepts an onError prop whose value should be a callback function that will be called when an error is caught.

This function receives two parameters:

error — the error that was thrown with a .message property
errorInfo — an object with a .componentStack property containing the stack of rendered components that led to the error
*/

<ErrorBoundary onError={logError} />

// ...

function logError(error, errorInfo) {
    console.log(error.message);
    console.log(errorInfo.componentStack);
}




/*
What Is the react-error-boundary Package?
The react-error-boundary package exports an ErrorBoundary component. Among other things, it can be wrapped around a component tree to render a fallback UI and log errors in the event that a runtime error occurs.
*/

import { ErrorBoundary } from 'react-error-boundary';





/*
How Does the <ErrorBoundary> Component from react-error-boundary Render a Fallback?
The ErrorBoundary component from react-error-boundary accepts a FallbackComponent prop whose value should be a React component to render as a fallback UI when an error occurs.

The component passed as the FallbackComponentwill receive two props:

error — the error that was thrown with a .message property 
resetErrorBoundary — a callback function to reset the error boundary
*/

<ErrorBoundary FallbackComponent={FallbackUI} />

//...

function FallbackUI({ error, resetErrorBoundary }) {
    return (
        <div>
            <p>Error: {error.message}</p>
            <button onClick={resetErrorBoundary}>
                Reset
            </button>
        </div>
    )
}




/*
Should I Create My Own <ErrorBoundary> or Use an Existing One?
Typically, error boundaries are created once and used multiple times throughout the application. It’s common to use third-party error boundary implementations such as the react-error-boundary component.
*/



/*
How Do Error Boundaries Log Errors?
The componentDidCatch() lifecycle method used for error logging. It is called by React after an error has been thrown by one of its descendants. It receives an error object representing the thrown error. It also receives an errorInfo object with a .componentStack property containing the stack of rendered components that led to the error.

Error: Why do we even have this switch?
in LightSwitch (created by App)
in ErrorBoundary (created by App)
in div (created by App)
in App
*/

componentDidCatch(error, errorInfo) {
    console.log(error);
    console.log(errorInfo.componentStack);
}