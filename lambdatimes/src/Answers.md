Q: What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

    A: Proptypes are the to check the data that we are passing down via props. if we set propTypes, and we accidentally pass down wrong type of data, we will get an error reagarding what we missed. as well it is useful for leaving so called hints for the next developer, when looking at our code.

Q: Describe a life-cycle event in React?

    A: Life Cycle event gives us an avility to mount and unmount ceratin components, every Component follows a cycle from when it’s created and mounted on the DOM to when it is unmounted

Q: Explain the details of a Higher Order Component?

    A: Concretely, a higher-order component is a function that takes a component and returns a new component. HOC doesn’t modify the input component, nor does it use inheritance to copy its behavior. Rather, it composes the original component by wrapping it in a container component.

    Its also said to have zero side effects

Q: What are three different ways to style components in React? Explain some of the benefits of each.

    A: 1 way is that we could use CSS, whic allows us to have all the styling code written in different folders according to whichever file we are trying to get to, but only draw down is that we can either have 1 CSS file for every file, or separate and have multiple CSS files for desired JS files.

        2nd way is usind LESS/SASS compilers. They are very similar to CSS, but we have an opportunity to divide these LESS/SASS files and nest them next to our components so we can look for them easier later, and helps us nest the styling code. but one good thing is that, even tho it has split files, it combines all the code into one file automatically and displays it in an organized way.

        3rd is Styled-Components. Now we can import styled compoonents, and style our components using them, in which case it will  help us make the code cleaner in regards of giving us an opportunity to remove class names from within our components.