# parcel

- Image optimization
- HMR = Hot Module Replacement
- Bundling
- Minifications
- compress
- File Watching Algorithm - written in c++
- Local Server
- Dev Builds
- Caching - faster builds
- Consistent Hashing
- Code Splitting
- Differential Bundling
- Diagnostic
- Error Handling
- It Supports HTTPS 
- Tree Shaking - remove unUsed code


# we have two types of Imports/Exports

1. Default Import/Export
   Syntax   -   export default component name / variable name  
                eg - export default Header
            -   import Header from"path"

2. Named Import/Export 
  Syntax   -   export default component name / variable name
               eg - export ComponentName = ()=>{}
           -   import {Header} from "path"


# React is fast because it performs efficient DOM manipulation 

  - It performs DOM manipulation by creating a virtual DOM 

    1. Diff Algorithm: React uses a diff algorithm to compare the old Virtual DOM with the new Virtual DOM. This algorithm identifies the differences between the two and determines what changes need to be made to the actual DOM.

    2. Re-rendering: Based on the differences found by the diff algorithm, React re-renders the components that have changed. This ensures that only the necessary changes are made to the actual DOM, which improves performance.

  - And this Virtual DOM is nothing but js Object.

# UseState 

  1. usestate is an local variable which has sper powers like it can remder the component when ever get updated
  - the proper definition of useState is - whenever useState gets updated it triggers reconsiliation cycle (which means it renders the component).
   # syntax const[state var name,function]=useState("default value);
   - the first argument is a state variabe name
   - the second argument is a function which is used to update the state variable. 

# UseEffect

  1. useEffect is used when ever we want to dot something after render of a particular component
    # syntax: useEffect(()=>{},[])
    1. the first argument is a function which is called after the render of the component
    2. the second argument is a dependicy array which controls the useEffect rendering.
    -  for suppose if useEffect does not have any dependicy array the useEffect will be called after each render of that component
    - if useEffect have dependicy array but it is empty then the useEffect will be called only at intial rendering of that component
    - if useEffect have some variables like useState variable the useEffect be called whenever the state variable gets updated

# Types of Routing
  - there are two types of routing in webapps
  1. CLient Side Routing
      - this client side routing we use it in react it wll just interchange the components instead of reloading the entire page and it will also does not make any network calls.
  2. Server side Routing
      - here the server will make a network cal to render that age so it will reloads the entire page once again.
      
# if we want to perform following things 
   1. chunking
   2. Dynamic Rendeing
   3. On Demanding Loading
   4. Lazy Loading
   5. Code Splitting

   - we use a component called <Lazy></Lazy> which is offerred by react but when we use this we get a error bcoz as react is fast it tries to load the page faster which is not preseent so we need to use something called "Suspense" with fallback inside this fall back we give something to render before react render that lazy component 
   # syntax is 
       - const About = lazy(()=> import("./components/About"));
       - element:<Suspense fallback={<Shimmer />}><Grocery /></Suspense> 
