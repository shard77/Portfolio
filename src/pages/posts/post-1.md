---
title: 'Building My Website With Astro'
layout: ../../layouts/PostLayout.astro
pubDate: 2022-07-01
description: 'This is the first post of my new Astro blog 🚀 I will share my learning journey as I built a new website with Astro and maybe you will try it out too!'
author: 
    name: 'shard7'
    pfp: 'https://assets.website-files.com/6029242da9cc798b70c41b19/6029242da9cc79b9e0c41b1e_Astro%20Framework%20Logo%20-%20White%20on%20Transparent%20Background.png'
image:
    url: 'https://assets.website-files.com/6029242da9cc798b70c41b19/6358f2f05c532d15e5e589fb_Astro%20Framework%20Thumb-min.jpg' 
    alt: 'The Astro logo with the word One.'
tags: ["astro", "web", "learning in public", "programming"]
type: 'big'
---


## Why Astro?
Astro is a new static site generator that is built on top of the web components standard. It is a new way to build websites that is fast, secure, and easy to use.
For more information, you can check the <a href="https://docs.astro.build/en/concepts/why-astro/">Astro Docs</a>. 


1. **Installing Astro**

I first installed the Astro package using the command `npm create astro@latest` and then selected the `starter-kit` template, this template ships with the basic folder structure and pages. 


2. **Styling the site**

I decided to write my style with vanilla SCSS. I first created my `global.scss` file to define global styles and do some CSS reset. 
Since Astro enables you to use any CSS preprocessor, I didn't have to compile my files to CSS manually.

```css
:root {
    --animate-delay: 0.5s;
  }  

*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body {
    height: 100%;
}

body {
    background-color: #0e141b;
    margin: 0;
    line-height: 1.5;
    display: flex;
    flex-direction: column;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}


code {
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
        Bitstream Vera Sans Mono, Courier New, monospace;
}

input, button, textarea, select {
    font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
}
```

3. **Creating the post system**

I wanted to create a system that would allow me to write my posts in markdown and then render them as web components. 
It was more simple to do than I thought, Astro has built-in functions to render markdown files as HTML. 
I just had to create a layout for my posts:
```astro 
---
import BaseLayout from './BaseLayout.astro';
import '../styles/post.scss';

const { frontmatter } = Astro.props;
---

<BaseLayout pageTitle={frontmatter.title}>
	<div class="container">
		<div class="second-container">
			<div class="header">
				<h1>{frontmatter.title}</h1>
				<p>{frontmatter.pubDate.slice(0,10)}</p>
			</div>
			<div class="tags">
				{frontmatter.tags.map((tag: unknown) => (
					<div class="tag">
						<i class="fa-solid fa-hashtag"></i>
						<p>{tag}</p>
					</div>
				))}
			</div>
			<p class="post-desc">{frontmatter.description}</p>
			<img class="head-img" src={frontmatter.image.url}/>
			<div class="slot">
				<slot/>
			</div>
			<p id="author">Written by: {frontmatter.author.name}</p>
		</div>
	</div>
</BaseLayout>
<script src="https://kit.fontawesome.com/85b199d966.js" crossorigin="anonymous"></script>
<script src="../scripts/utils.js"></script>
```
Then create a component for the post preview:
```astro
---
import '../styles/footer.scss';


const { title, url, description, author, date, image, tag, pfp } = Astro.props;
---

<li>
    <div class="header">
        <div class="avatar">
            <img src={pfp} alt="avatar">
            <h2>{author}</h2>
        </div>
        <div class="filter">
            <a><i class="fa-solid fa-hashtag"></i>{tag}</a>
        </div>
    </div>
    <div class="img">
        <img src={image} alt="post image">
    </div>
    <div class="text">
        <h2>{title}</h2>
        <p>
        {description}
        </p>
    </div>
    <div class="bottom">
        <div class="date">
            <p>{date}</p>
        </div>
        <div class="read">
            <a href={url}>Read More</a>
        </div>
    </div>
</li>
```
And finally, use Astro's built-in function to fetch all the markdown files:
```astro
<div class="small-group animate__animated animate__fadeIn animate__delay-2s">
    <ul>
        {tinyPosts.map((post) => <SBlogPost author={post.frontmatter.author.name} 
                                pfp={post.frontmatter.author.pfp} 
                                url={post.url} 
                                title={post.frontmatter.title} 
                                image={post.frontmatter.image.url} 
                                description={post.frontmatter.description} 
                                date={post.frontmatter.pubDate.slice(0,10)} 
                                url={post.url} 
                                tag={post.frontmatter.tags[0]}
        />)}
    </ul>
</div>
```
4. **Finalizing the project**
Last but not least, I added some animations using the animate.css library to make the site more interactive and made the webpage responsive for all devices. 


## Conclusion
I had a lot of fun building this project, I learned a lot about Astro and I'll definitely use it for some of my future projects.
I hope you enjoyed this article and learned something new. If you have any questions, feel free to send me a message!
<br>
<br>
PS: This is the first version of the site, I'll be adding more features in the future 😎
