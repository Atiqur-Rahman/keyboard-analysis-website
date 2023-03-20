import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className="mx-auto p-3 w-1/2 rounded-2xl border-8 border-slate-400 mt-4">
                <h3>
                    <span className="font-bold text-lg">Q1.</span> What is Context API? How it works?
                </h3>
                <p>
                    <span className="font-bold text-lg">Ans:</span> The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.
                    <br />
                    <span></span> React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
                </p>
                <hr className="my-4" />
                <h3>
                    <span className="font-bold text-lg">Q2.</span> What Are Semantic HTML Tags?
                </h3>
                <p>
                    <span className="font-bold text-lg">Ans:</span> Semantic HTML tags are tags that define the meaning of the content they contain. For example, tags like <span className="font-semibold">header</span>, <span className="font-semibold">article</span>, and <span className="font-semibold">footer</span> are semantic HTML tags. They clearly indicate the role of the content they contain. On the other hand, tags like <span className="font-semibold">div</span> and <span className="font-semibold">span</span> are typical examples of non-semantic HTML elements.
                </p>
                <hr className="my-4" />
                <h3>
                    <span className="font-bold text-lg">Q2.</span> Inline vs Inlive-Block vs Block.
                </h3>
                <p>
                    <span className="font-bold text-lg">Ans:</span> <br /> <span className="font-semibold">Inline:</span> The element doesn’t start on a new line and only occupy just the width it requires. You can’t set the width or height. <br /> <span className="font-semibold">Inline-Block:</span> It’s formatted just like the inline element, where it doesn’t start on a new line. BUT, you can set width and height values. <br /> <span className="font-semibold">Block:</span> The element will start on a new line and occupy the full width available. And you can set width and height values.
                </p>
            </div>
        </div>
    );
};

export default Blogs;
