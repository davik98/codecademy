/*
Returning HTML Elements and Components
A function component can return any JSX, including a mix of HTML elements and custom React components.

In the example, we return a <Logo /> component and a “vanilla” HTML title.

This assumes that <Logo /> is defined elsewhere.

Retour d'éléments et de composants HTML 
Un composant fonctionnel peut retourner n'importe quel JSX, y compris un mélange d'éléments HTML et de composants React personnalisés. 
Dans cet exemple, nous retournons un composant `<Logo />` et un titre HTML standard. Ceci suppose que `<Logo />` est défini ailleurs.
*/

function Header() {
    return (
        <div>
            <Logo />
            <h1>Codecademy</h1>
        </div>
    );
}




/*
Accessing Props
React components can access their props with the props object.

In the example code below, we see the <Hello> component being rendered with a firstName prop. It is accessed in the component’s return statement with props.firstName.

This should render the text “Hi there, Kim!”

Accès aux props 
Les composants React peuvent accéder à leurs props via l'objet props. 
Dans l'exemple de code ci-dessous, le composant `<Hello>` est rendu avec une prop `firstName`. 
Celle-ci est accessible dans l'instruction `return` du composant avec `props.firstName`. Ceci devrait afficher le texte « Salut Kim ! »
*/

function Hello(props) {
    return <h1>Hi there, {props.firstName}!</h1>;
}

ReactDOM.createRoot(document.getElementById('app')).render(<Hello firstName="Kim" />)




/*
defaultProps
A React component can contain default values to be used in case props are not passed. 
If any prop is not passed to a Component, its value will be replaced by the prop of the same name.

In the example code, defaultProps is set so that profiles have a fallback profile picture if none is set. 
The <MyFriends> component should return two profiles: one with a set profile picture and one with the fallback profile picture.

defaultProps
Un composant React peut contenir des valeurs par défaut utilisées lorsque les props ne sont pas transmises. 
Si une prop n'est pas passée à un composant, sa valeur sera remplacée par la prop du même nom. 
Dans l'exemple de code, `defaultProps` est défini afin que les profils aient une image de profil de secours si aucune n'est spécifiée. 
Le composant `<MyFriends>` doit renvoyer deux profils : un avec une image de profil définie et l'autre avec l'image de profil de secours.
*/

function Profile(props) {
    return (
        <div>
            <img src={props.profilePictureSrc} alt="" />
            <h2>{props.name}</h2>
        </div>
    );
}

Profile.defaultProps = {
    profilePictureSrc: 'https://example.com/no-profile-picture.jpg',
};

function MyFriends(props) {
    return (
        <div>
            <h1>My friends</h1>
            <Profile
                name="Jane Doe"
                profilePictureSrc="https://example.com/jane-doe.jpg"
            />
            <Profile name="John Smith" />
        </div>
    );
}




/*
props
Components can pass information to other components. When one component passes information to another, it is passed as props through one or more attributes.

The example code demonstrates the use of attributes in props. 
SpaceShip is the component and ride is the attribute. The SpaceShip component will receive ride in its props.

Props
Les composants peuvent transmettre des informations à d'autres composants. 
Lorsqu'un composant transmet des informations à un autre, celles-ci sont transmises sous forme de props, via un ou plusieurs attributs. 
L'exemple de code illustre l'utilisation des attributs dans les props. « SpaceShip » est le composant et « ride » est l'attribut. 
Le composant « SpaceShip » recevra « ride » dans ses props.
*/

<SpaceShip ride="Millennium Falcon" />


/*
props.children
Every component’s props object has a property named children.Using props.children will return everything in between a component’s opening and closing JSX tags.

props.children 
L’objet props de chaque composant possède une propriété nommée children. 
L’utilisation de props.children permet de récupérer tout ce qui se trouve entre les balises JSX ouvrante et fermante d’un composant.
*/

function List(props) {
    return <ul>{props.children}</ul>;
}

// Usage:
<List>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</List>