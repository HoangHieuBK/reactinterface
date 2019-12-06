import React from 'react'

const HomePage = () =>(
<React.Fragment>
 <h1> Hello, welcome to my blog </h1>
 <p> The first thing we're going to do is create another folder Then inside this file, we're going to create a very basic react component called homepage. First, we're going to import React and then we create our homepage component like this, And for now, this component is simply going to have a heading that says, hello, welcome to my blog, and that'll look like this, h1, hello, welcome to my blog. And then underneath this we're going to put a few paragraphs of lorem ipsum text which will help us build out make sure you're running at least react 16.2 which But this clutters up the dom quite a bit once our components get more deeply nested. So what more recent versions of react allow us to do is wrap our components in a fragment instead of a div. Which looks like this, react dot fragment, and then we put our content inside here, and then when our app gets rendered react will just leave these fragment tags out without adding an extra div or anything. And there's also a shorthand which we're going to use, which simply looks like this. And then we'll put our content inside there.  </p>
 <p>big deal just something to keep in mind. If we save our app now it'll reload and we can see that our homepage is being displayed successfully. This is great but for our blog we'll definitely want users to be able to navigate between pages and there's currently no way to do that. The easiest way to implement navigation in react is by using a tool called react router, which makes it really easy to display a certain page or component in a slot depending on the current url. Let's add react router to our project, Let's add react router to our project, to do that we need to run npm install dash dash save, react to do that we need to run npm install dash dash save, react dash router dash dom. Now that we've got that package installed, we simply need to add the correct router components to our app dot js file. </p>
</React.Fragment>
)

export default HomePage
