# GitHub Pages and HTML/CSS Workshop

## Instructions
* Set up your environment
   * Create a [GitHub account](https://github.com/)
   * Download and install [Visual Studio Code](https://code.visualstudio.com/Download)
   * Download and install [Git](https://git-scm.com/downloads)
* Clone this repository
   * In the terminal window type: `git clone https://github.com/TAMUSA-ACM/GitHub-Pages-HTML-CSS-Workshop.git`
   * Rename the folder to: "<your github username>.github.io"
* Create a new repository in your Github and name it: "<your github username>.github.io"
   * Under 'Setting' find the 'GitHub Pages' option and change the first pulldown from 'none' to 'master'
* Open the index.html file in VSC and start editing

## Resources
* [W3Schools](https://www.w3schools.com/default.asp)
* [Mozilla](https://developer.mozilla.org/en-US/)
* [Bootstrap 4](https://getbootstrap.com/)
* [Fontawesome](https://fontawesome.com/)
* [TAMUSA Colors](https://www.tamusa.edu/brandguide/brand-tool-kit/brand-colors.html)

## HyperText Markup Language (HTML)
HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript).

"Hypertext" refers to links that connect web pages to one another, either within a single website or between websites. Links are a fundamental aspect of the Web. By uploading content to the Internet and linking it to pages created by other people, you become an active participant in the World Wide Web.

HTML uses "markup" to annotate text, images, and other content for display in a Web browser. HTML markup includes special "elements" such as `<head>, <title>, <body>, <header>, <footer>, <article>, <section>, <p>, <div>, <span>, <img>, <aside>, <audio>, <canvas>, <datalist>, <details>, <embed>, <nav>, <output>, <progress>, <video>, <ul>, <ol>, <li>` and many others.

An HTML element is set off from other text in a document by "tags", which consist of the element name surrounded by "<" and ">".  The name of an element inside a tag is case insensitive. That is, it can be written in uppercase, lowercase, or a mixture. For example, the `<title>` tag can be written as `<Title>`, `<TITLE>`, or in any other way.

### HTML Comments
Definition and Usage
#### Opening Tag: `<!--`
#### Closing Tag: `-->`
* The comment tag is used to insert comments in the source code
* Comments are not displayed in the browsers
* You can use comments to explain your code, which can help you when you edit the source code at a later date
* This is especially useful if you have a lot of code

### !DOCTYPE html Tag
Definition and Usage
* All HTML documents must start with a `<!DOCTYPE>` declaration
* The declaration is not an HTML tag
* It is an "information" to the browser about what document type to expect

### HTML Tag
Definition and Usage
* The `<html>` tag represents the root of an HTML document
* The `<html>` tag is the container for all other HTML elements (except for the `<!DOCTYPE>` tag)
Note: You should always include the lang attribute inside the <html> tag, to declare the language of the Web page. This is meant to assist search engines and browsers.

### Head Tag
Definition and Usage
* The `<head>` element is a container for metadata (data about data) and is placed between the <html> tag and the <body> tag
* Metadata is data about the HTML document. Metadata is not displayed
* Metadata typically define the document title, character set, styles, scripts, and other meta information
* The following elements can go inside the `<head>` element:
    * title (required in every HTML document)
    * style
    * base
    * link
    * meta
    * script
    * noscript

### Body Tag
Definition and Usage
* The `<body>` tag defines the document's body
* The `<body>` element contains all the contents of an HTML document, such as headings, paragraphs, images, hyperlinks, tables, lists, etc
Note: There can only be one `<body>` element in an HTML document
   
### Header Tag
Definition and Usage
* The `<header>` element represents a container for introductory content or a set of navigational links
* A `<header>` element typically contains:
    * one or more heading elements (`<h1> - <h6>`)
    * logo or icon
    * authorship information
Note: You can have several <header> elements in one HTML document. However, `<header>` cannot be placed within a `<footer>`, `<address>` or another `<header>` element.

### Footer Tag
Definition and Usage
* The `<footer>` tag defines a footer for a document or section
* A `<footer>` element typically contains:
    * authorship information
    * copyright information
    * contact information
    * sitemap
    * back to top links
    * related documents
* You can have several `<footer>` elements in one document.
   
### Div Tag
Definition and Usage
* The `<div>` tag defines a division or a section in an HTML document
* The `<div>` tag is used as a container for HTML elements - which is then styled with CSS or manipulated with JavaScript
* The `<div>` tag is easily styled by using the class or id attribute
* Any sort of content can be put inside the `<div>` tag!
Note: By default, browsers always place a line break before and after the `<div>` element.

### H1 - H6 Tags
Definition and Usage
* The `<h1> to <h6>` tags are used to define HTML headings
* `<h1>` defines the most important heading. `<h6>` defines the least important heading.
Note: Only use one `<h1>` per page - this should represent the main heading/subject for the whole page. Also, do not skip heading levels - start with `<h1>`, then use `<h2>`, and so on.
   
### A Tag
Definition and Usage
* The `<a>` tag defines a hyperlink, which is used to link from one page to another
* The most important attribute of the `<a>` element is the href attribute, which indicates the link's destination
* By default, links will appear as follows in all browsers:
    * An unvisited link is underlined and blue
    * A visited link is underlined and purple
    * An active link is underlined and red

### BR Tag
Definition and Usage
* The `<br>` tag inserts a single line break
* The `<br>` tag is useful for writing addresses or poems
* The `<br>` tag is an empty tag which means that it has no end tag

### HR Tag
Definition and Usage
* The `<hr>` tag defines a thematic break in an HTML page (e.g. a shift of topic)
* The `<hr>` element is most often displayed as a horizontal rule that is used to separate content (or define a change) in an HTML page

### I Tag
Definition and Usage
* The `<i>` tag defines a part of text in an alternate voice or mood. The content inside is typically displayed in italic
* The `<i>` tag is often used to indicate a technical term, a phrase from another language, a thought, a ship name, etc
* Use the `<i>` element only when there is not a more appropriate semantic element, such as:
    * `<b>` (bold text)
    * `<em>` (emphasized text)
    * `<strong>` (important text)
    * `<mark>` (marked/highlighted text)
    * `<cite>` (the title of a work)
    * `<dfn>` (a definition term)
Note: Bootstrap Fontawesome icons use the i tag

### Img Tag
Definition and Usage
* The `<img>` tag is used to embed an image in an HTML page
* Images are not technically inserted into a web page; images are linked to web pages; the `<img>` tag creates a holding space for the referenced image
* The `<img>` tag has two required attributes:
    * src - Specifies the path to the image
    * alt - Specifies an alternate text for the image, if the image for some reason cannot be displayed
Note: Also, always specify the width and height of an image. If width and height are not specified, the page might flicker while the image loads.

### P Tag
Definition and Usage
* The `<p>` tag defines a paragraph
* Browsers automatically add a single blank line before and after each `<p>` element
Tip: Use CSS to style paragraphs.

### HTML Class Attributes
All HTML elements with the same class attribute will get the same style.

In this Workshop we are using the Bootstrap 4 [Layout](https://getbootstrap.com/docs/4.0/layout/overview/) to create the overall style of our Webpage.

## Cascading Style Sheets
CSS (Cascading Style Sheets) is a declarative language that controls how webpages look in the browser. The browser applies CSS style declarations to selected elements to display them properly. A style declaration contains the properties and their values, which determine how a webpage looks.

CSS is one of the three core Web technologies, along with HTML and JavaScript. CSS usually styles HTML elements, but can be also used with other markup languages like SVG or XML.

"Cascading" refers to the rules that govern how selectors are prioritized to change a page's appearance. This is a very important feature, since a complex website can have thousands of CSS rules.

## CSS Syntax
* A CSS rule-set consists of a selector and a declaration block:
![](https://i.imgur.com/eKeFHt4.gif)
* The selector points to the HTML element you want to style.
* The declaration block contains one or more declarations separated by semicolons.
* Each declaration includes a CSS property name and a value, separated by a colon.
* Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.

## JavaScript
JavaScript (or "JS") is a programming language used most often for dynamic client-side scripts on webpages, but it is also often used on the server-side, using a runtime such as Node.js.

JavaScript should not be confused with the Java programming language. Although "Java" and "JavaScript" are trademarks (or registered trademarks) of Oracle in the U.S. and other countries, the two programming languages are significantly different in their syntax, semantics, and use cases.

JavaScript is mostly used in the browser, enabling developers to manipulate webpage content through the DOM, manipulate data with AJAX and IndexedDB, draw graphics with canvas, interact with the device running the browser through various APIs, and more. JavaScript is one of the world's most commonly-used languages, owing to the recent growth and performance improvement of APIs available in browsers.
