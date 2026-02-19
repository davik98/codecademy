/*
Stateful and Stateless Components
In React, a stateful component is a component that holds some state. Stateless components, by contrast, have no state. Note that both types of components can use props.

In the example, there are two React components. The Store component is stateful and the Week component is stateless.

Composants avec et sans état 
Dans React, un composant avec état est un composant qui conserve un état. Les composants sans état, à l'inverse, n'ont pas d'état. 
Notez que les deux types de composants peuvent utiliser des props. 
Dans l'exemple, on trouve deux composants React : le composant Store, qui est avec état, et le composant Week, qui est sans état.
*/

function Store() {
    const [sell, setSell] = useState("anything");

    return (
        <div>
            <h1>I'm selling {sell}.</h1>
            <button onClick={() => setSell("books")}>Change Item</button>
        </div>
    );
}

function Week(props) {
    return <h1>Today is {props.day}!</h1>;
}





/*
Parent State Pattern
A common React programming pattern involves using stateful parent components to manage state and pass it down to stateless child components as props. 
This approach centralizes state management in the parent while keeping child components focused on presentation and rendering.

Stateless child components receive data and event handlers through props, making them simpler to test and reuse.
The parent component controls the state logic and updates, while children display the data they receive. 
This separation of concerns creates a clear data flow and makes component responsibilities easier to understand.

Modèle d'état parent 
Un modèle de programmation React courant consiste à utiliser des composants parents avec état pour gérer l'état et le transmettre aux composants enfants sans état via les props.
Cette approche centralise la gestion de l'état dans le parent, tandis que les composants enfants se concentrent sur la présentation et le rendu. 
Les composants enfants sans état reçoivent les données et les gestionnaires d'événements via les props, ce qui simplifie leur test et leur réutilisation.
Le composant parent contrôle la logique d'état et ses mises à jour, tandis que les enfants affichent les données qu'ils reçoivent. 
Cette séparation des responsabilités crée un flux de données clair et facilite la compréhension des responsabilités des composants.
*/

// Stateless child
function BabyYoda(props) {
    return <h2>I am {props.name}!</h2>;
}

// Stateful parent
function Yoda() {
    const [name, setName] = useState("Toyoda");

    return (
        <div>
            <BabyYoda name={name} />
            <button onClick={() => setName("Grogu")}>Reveal True Name</button>
        </div>
    );
}




/*
Changing Props and State
In React, a component should never change its own props directly. A parent component should change them.

State, on the other hand, is the opposite of props: a component keeps track of its own state and can change it at any time.

The example code shows a component that accepts a prop, subtitle, which never changes. It also has a state object which does change.

Modification des props et de l'état 
Dans React, un composant ne doit jamais modifier directement ses propres props. C'est au composant parent de s'en charger. 
L'état, en revanche, est l'inverse des props : un composant conserve la trace de son propre état et peut le modifier à tout moment.
L'exemple de code illustre un composant qui accepte une prop, `subtitle`, qui ne change jamais. Il possède également un objet `state`, qui, lui, peut être modifié.
*/

function Clock(props) {
    const [date, setDate] = useState(new Date());

    const updateTime = () => {
        setDate(new Date());
    }

    return (
        <div>
            <h1>It is currently {date.toLocaleTimeString()}</h1>
            <h2>{props.subtitle}</h2>
            <button onClick={updateTime}>Update the clock</button>
        </div>
    );
}




/*
Passing State Change Functions as Props
If a React parent component defines a function that changes its state, that function can be passed to a child component and invoked within the child to update the parent’s state.

Passage de fonctions de modification d'état via les props 
Si un composant parent React définit une fonction qui modifie son état, cette fonction peut être passée à un composant enfant et appelée dans ce dernier pour mettre à jour l'état du parent.
*/

// Child component receives the function as a prop
function NameInput({ onNameChange, name }) {
    return (
        <div>
            <input onChange={onNameChange} />
            <p>{name}</p>
        </div>
    );
}

// Parent component owns state and passes down both state and setter function
function Name() {
    const [name, setName] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    return <NameInput onNameChange={handleNameChange} name={name} />;
}





/*
Event Handlers and State in React
Event handler functions in React are often used to update state. 
These handler functions often receive an event as an argument, which is used to update state values correctly.

In the example code, we use event.target.value to get the input’s value.

Gestion des événements et de l'état dans React 
Les fonctions de gestion des événements dans React sont souvent utilisées pour mettre à jour l'état. 
Ces fonctions reçoivent généralement un événement en argument, qui sert à mettre à jour correctement les valeurs de l'état. 
Dans l'exemple de code, nous utilisons `event.target.value` pour récupérer la valeur de l'entrée.
*/
function MyComponent() {
    const [text, setText] = useState("");

    const handleChange = (event) => {
        setText(event.target.value);
    }

    return (
        <div>
            <input onChange={handleChange} value={text} />
            <p>You typed {text}</p>
        </div>
    );
}




/*
Presentational and Container Components
A common programming pattern in React is to have presentational and container components. Container components contain business logic (methods) and handle state. 
Presentational components render that behavior and state to the user.

In the example code, CounterContainer is a container component and Counter is a presentational component.

Composants de présentation et composants conteneurs 
Un modèle de programmation courant en React consiste à utiliser des composants de présentation et des composants conteneurs. 
Les composants conteneurs contiennent la logique métier (méthodes) et gèrent l'état. 
Les composants de présentation affichent ce comportement et cet état à l'utilisateur. 
Dans l'exemple de code, CounterContainer est un composant conteneur et Counter est un composant de présentation.
*/

class CounterContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        this.increment = this.increment.bind(this);
    }

    increment() {
        this.setState((oldState) => {
            return { count: oldState.count + 1 };
        });
    }

    render() {
        return <Counter count={this.state.count} increment={this.increment} />;
    }
}

class Counter extends React.Component {
    render() {
        return (
            <div>
                <p>The count is {this.props.count}.</p>
                <button onClick={this.props.increment}>Add 1</button>
            </div>
        );
    }
}