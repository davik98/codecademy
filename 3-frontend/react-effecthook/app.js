/*
The Effect Hook tells our component to do something every time it’s rendered (or re-rendered). Combined with states, we can use the Effect Hook to create interesting dynamic changes in our web pages!

Suppose we want to allow a user to change the title of the web page tab every time they type. We can implement this with the Effect Hook useEffect() like so:
*/
import { useState, useEffect } from 'react';

function PageTitle() {
    const [name, setName] = useState('');

    useEffect(() => {
        document.title = `Hi, ${name}`;
    });

    return (
        <div>
            <p>Use the input field below to rename this page!</p>
            <input onChange={({ target }) => setName(target.value)} value={name} type='text' />
        </div>
    );
}
/*
Let’s take a look at the above example in more detail. First, we import the Effect Hook from the 'react' library:
*/

import { useEffect } from 'react';


/*
The useEffect() function has no return value as the Effect Hook is used to call another function. We pass the callback function, or effect, to run after a component renders as the argument of the useEffect() function. In our example, the following effect runs after each time the PageTitle component renders:
*/

() => { document.title = `Hi, ${name}`; }

/*
Here, we assign Hi, ${name} as the value of document.title.

The onChange event listener triggers the PageTitle component to be re-rendered every time the user types in the input. Consequently, this triggers useEffect() and changes the document’s title.

Notice how we use the current state inside of our effect. Even though our effect is called after the component renders, we still have access to the variables in the scope of our function component! When React renders our component, it will update the DOM as usual, and then run our effect after the DOM has been updated. This happens for every render, including the first and last one.
*/