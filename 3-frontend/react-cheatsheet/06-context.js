/*
https://www.codecademy.com/learn/learn-advanced-react/modules/advanced-react-context/cheatsheet
Context Wrappers
Some React applications use a dedicated “wrapper” component around a Context Provider to set up state for the Context. Doing so can help standardize setting up state for each usage of the Provider.

Composants wrapper de contexte Certaines applications React utilisent un composant « wrapper » dédié autour d’un fournisseur de contexte pour initialiser l’état du contexte.
Cela permet de standardiser l’initialisation de l’état pour chaque utilisation du fournisseur.
*/

const ThemeContext = React.createContext();

// Wrapper for ThemeContext that adds a friendly notice
const ThemedMessage = ({ children, theme }) => {
    return (
        <ThemeContext.Provider value={theme}>
            <p>This content is in {theme} mode!</p>
            {children}
        </ThemeContext.Provider>
    );
};




/*
Context Providers
React Context objects include a .Provider property that is a React component. It takes in a value prop to be made available to all its descendent components.

Fournisseurs de contexte Les objets Context de React incluent une propriété `.Provider` qui est un composant React. 
Cette propriété reçoit une valeur (prop) qui sera mise à disposition de tous ses composants descendants.
*/

// Provides "hello world" as the MyContext value to descendants
<MyContext.Provider value="hello world">
    <ChildComponent />
</MyContext.Provider>




/*
Using Context Values
Descendents of a Context Provider may subscribe to the Provider’s data by passing the Context object to React’s useContext() hook.

Utilisation des valeurs de contexte 
Les descendants d’un fournisseur de contexte peuvent s’abonner aux données du fournisseur en passant l’objet Context au hook useContext() de React.
*/

import MyContext from 'MyContext.js';

const ConsumerComponent = () => {
    const contextValue = useContext(MyContext);

    // The component can then use contextValue
}




/*
Creating Contexts
The React.createContext() function creates and returns a React Context object.

Création de contextes 
La fonction React.createContext() crée et renvoie un objet Contexte React.
*/

const CounterContext = React.createContext();





/*
Dynamic Context Values
A Context’s .Provider component may provide both a state value and its updater function via the value prop.

Valeurs de contexte dynamiques 
Le composant .Provider d’un contexte peut fournir à la fois une valeur d’état et sa fonction de mise à jour via la propriété value.
*/

const CounterContext = React.createContext();

// Descendants of CounterArea will be able to update its count state by calling the `setCount` property provided by the CounterContext.Provider
const CounterArea = ({ children }) => {
    const [count, setCount] = useState(0);

    return (
        <CounterContext.Provider value={{ count, setCount }}>
            {children}
        </CounterContext.Provider>
    );
};





/*
Context
Context is a feature of React that allows us to create a piece of state that any component within an area of your application can subscribe to.

Contexte 
Le contexte est une fonctionnalité de React qui permet de créer un état auquel tout composant d'une zone de votre application peut s'abonner. 
*/



/*
Prop Drilling
Prop drilling is the term for when a piece of data is passed as a prop through a large number of components in a React application.

Prop Drilling 
Le terme « prop drilling » désigne le fait de transmettre une donnée en tant que prop à un grand nombre de composants d'une application React.
*/

const App = () => {
    const [count, setCount] = useState(0);
    return <CounterContainer count={count} setCount={setCount} />
}

// This component drills props down to CounterDisplay and CounterButton
const CounterContainer = ({ count, setCount }) => {
    return (
        <>
            <CounterDisplay count={count} />
            <CounterButton setCount={setCount} />
        </>
    )
}

const CounterDisplay = ({ count }) => {
    return <h2>{count}</h2>
}

const CounterButton = ({ setCount }) => {
    return <button setCount={setCount}>Increment</button>
}





/*
Downsides of Prop Drilling
Downsides of prop drilling include components being harder to understand and excess rerenders of components that pass props without using them.
*/

// This component prop drills three props: apple, banana, and cherry
const MyComponent = ({ apple, banana, cherry, children }) => {
    return (
        <ChildComponent apple={apple} banana={banana} cherry={cherry}>
            {children}
        </ChildComponent>
    );
};





/*
Multiple Providers
A .Provider component can be used in multiple places in your application to provide different values for that subtree.
*/

// The theme for App, Header, and Body will be "light". Only Footer will have the "dark" theme.
<ThemeContext.Provider value="light">
    <App>
        <Header />
        <Body />
        <ThemeContext.Provider value="dark">
            <Footer />
        </ThemeContext.Provider>
    </App>
</ThemeContext.Provider>