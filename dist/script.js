const initialState = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

class MarkdownPreviewer extends React.Component {
  constructor() {
    super();
    this.state = {
      input: initialState };

  }

  handleChange(e) {
    this.setState({
      input: e.target.value });

  }

  render() {
    const { input } = this.state;
    const markdown = marked(input, { breaks: true });
    return /*#__PURE__*/(
      React.createElement("div", { className: "col flex-column" }, /*#__PURE__*/
      React.createElement("div", { className: "d-flex flex-row flex-column my-3" }, /*#__PURE__*/
      React.createElement("h3", { className: "text-center" }, "Write here your markdown:"), /*#__PURE__*/
      React.createElement("textarea", { id: "editor",
        className: "form-control m-auto border-0 rounded-0",
        style: {
          maxWidth: "500px",
          height: "250px",
          boxShadow: "inset 2px 2px 7px black" },

        value: input,
        onChange: this.handleChange.bind(this) })), /*#__PURE__*/


      React.createElement("div", { className: "d-flex flex-row flex-column my-3 mx-4" }, /*#__PURE__*/
      React.createElement("h3", { className: "text-center" }, "Output:"), /*#__PURE__*/
      React.createElement("div", { id: "preview",
        className: "card card-body border-0 rounded-0 m-auto h-auto w-100",
        style: {
          boxShadow: "inset 2px 2px 7px black" },

        dangerouslySetInnerHTML: { __html: markdown } }))));



  }}


ReactDOM.render( /*#__PURE__*/React.createElement(MarkdownPreviewer, null), document.getElementById("root"));