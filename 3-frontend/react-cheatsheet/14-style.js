/*
React CSS Styles
React supports inline CSS styles for elements. Styles are supplied as a style prop with a JavaScript object.

Styles CSS React 
React prend en charge les styles CSS en ligne pour les éléments. Les styles sont fournis sous forme de propriété `style` avec un objet JavaScript.
*/
// Passing the styles as an object
const color = {
    color: 'blue',
    background: 'sky'
};
<h1 style={color}>Hello</h1>

// Passing the styles with an inline object, as a shorthand
<h1 style={{ color: 'red' }}>I am red!</h1>




/*
Style Names And Values
In React, style names are written in “camelCase”, unlike in CSS where they are hyphenated. 
In most cases, style values are written as strings. 
When entering numeric values, you don’t have to enter px because React automatically interprets them as pixel values.

Noms et valeurs des styles En React, les noms des styles sont écrits en « camelCase », contrairement au CSS où ils sont séparés par des traits d’union.
Dans la plupart des cas, les valeurs des styles sont écrites sous forme de chaînes de caractères. 
Lors de la saisie de valeurs numériques, il n’est pas nécessaire de préciser « px », car React les interprète automatiquement comme des valeurs en pixels.
*/
// Styles in CSS:
// font-size: 20px;
// color: blue;

// Would look like this style object in React:
const style = {
    fontSize: 20,
    color: 'blue',
};




/*
React CSS Modules
CSS Modules provide a way to scope styles locally to individual React components by automatically transforming class names into unique identifiers at build time. 
This prevents unintended style conflicts across the application and eliminates the need for complex naming conventions.

By separating styles into dedicated module files, components maintain better organization and modularity. 
Each component’s styles remain isolated, making it easier to locate and maintain styling logic without worrying about class name collisions.

Modules CSS React 
Les modules CSS permettent de limiter la portée des styles à chaque composant React en transformant automatiquement les noms de classes en identifiants uniques lors de la compilation. 
Ceci évite les conflits de styles indésirables dans l'application et élimine le besoin de conventions de nommage complexes. 
En séparant les styles dans des fichiers de module dédiés, les composants bénéficient d'une meilleure organisation et d'une plus grande modularité. 
Les styles de chaque composant restent isolés, ce qui facilite la localisation et la maintenance de la logique de style sans se soucier des collisions de noms de classes.
*/

/* Button.module.css */
.button {
    padding: 10px 20px;
    background - color: blue;
    color: white;
}

/* Button.js */
import styles from './Button.module.css';

function Button({ children }) {
    return (
        <button className={styles.button}>
            {children}
        </button>
    );
}




/*
Controlled vs.Uncontrolled Form Fields
In React, form fields are considered either uncontrolled, meaning they maintain their own state, or controlled, meaning that some parent maintains their state and passes it to them to display.Usually, the form fields will be controlled.

The example code shows an uncontrolled and controlled input.

Champs de formulaire contrôlés et non contrôlés 
Dans React, les champs de formulaire sont soit non contrôlés (ils gèrent leur propre état), soit contrôlés (un élément parent gère leur état et le leur transmet pour affichage).
Généralement, les champs de formulaire sont contrôlés. L'exemple de code illustre un champ de saisie non contrôlé et un champ de saisie contrôlé.
*/

const uncontrolledInput = <input />;

const controlledInput = (
    <input value={stateValue} onChange={handleInputChange} />
);




/*
Controlled Components
A controlled form element in React is built with a change handler function and a value attribute.

Composants contrôlés 
Un élément de formulaire contrôlé dans React est construit avec une fonction de gestion des changements et un attribut de valeur.
*/

const controlledInput = (
    <input value={stateValue} onChange={handleInputChange} />
);