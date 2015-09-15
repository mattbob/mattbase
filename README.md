# Mattbase

A simple, friendly, mobile-first [LESS](http://lesscss.org/) framework.

### What it is?
- Mattbase includes a basic Grunt configuration including [jshint](https://github.com/gruntjs/grunt-contrib-jshint), [uglify](https://github.com/gruntjs/grunt-contrib-uglify) (with source map), [less processing](https://github.com/gruntjs/grunt-contrib-less) (with source map), and [watch](https://github.com/gruntjs/grunt-contrib-watch).
- It includes a mobile-first responsive grid framework, miscellaneous LESS mixins, minimal global styles, and an empty LESS file for custom styles.

### Getting Started/Installation
- Make sure you have [grunt-cli](http://gruntjs.com/getting-started) installed: `npm install -g grunt-cli`.
- Place the Mattbase files within your project folder.
- In your project folder run: `npm install`.

## How to use the grid
The grid is based on the belief that the presentation layer should be separate from the content layer. Your content (HTML) should not be dependent on bloated CSS classes for it's appearance.


##### Example
With the grid system you can write your HTML free of row and column classes like this:

  ```html
  <section id=”content”>
     <article>
        <h1>…</h1>
        <p>…</p>
     </article>

     <aside>…</aside>
  </section>
  ```

And you can style your content with LESS like this:

  ```less
  #content {
  	.row();

  	article {
  		.col(12, true);
  		.col(8, true, tablet);
  		.col(9, true, desktop);
  	}

  	aside {
  		.col(12, true);
  		.col(4, true, tablet);
  		.col(3, true, desktop);
  	}
  }
  ```

Both the `article` and `aside` sections will be full width on mobile.  On tablet and desktop it will become a 2 column layout.


#### The .row() Mixin
The `.row()` mixin simply clears it's contents and sets the width to 100%. It has no parameters.

#### The .col() Mixin
The `.col()` mixin has 3 parameters:

  ```less
  .col(@span, @gutter: @include-gutters, @device: mobile);
  ```

Set `@span` to the number of columns you'd like your content to span out of 12.  
Set `@gutter` to true/false if you want to include gutters (defaults to global variable `@include-gutters`).  
Set `@device` to mobile, tablet, or desktop to define the media query for that element (default: mobile).


#### Helper Mixins
In addition to `.row()` and `.col()` there are 2 helper mixins: `.offset()` and `.hide()`.

The `.offset()` mixin has only 2 parameters:

  ```less
  .offset(@span, @device: mobile);
  ```
Set `@span` to the number of columns to offset out of 12.  
Set `@device` to mobile, tablet, or desktop to define the media query for that element (default: mobile).  

The `.hide()` mixin only excepts the device parameter:

  ```less
  .hide(@device: all);
  ```

Set `@device` to all, mobile, tablet, or desktop (default: all).


#### Grid Settings
At the top of the `responsive.less` file you'll find a few grid variables.

  ```less
  /* /////////////////////////////////////
  // VARIABLES
  ///////////////////////////////////// */

  @total-columns:    12;
  @gutter-width:     30px;
  @include-gutters:  false;

  @width-mobile:     300px;
  @width-mobile-l:   510px;
  @width-tablet:     750px;
  @width-desktop:    970px;
  ```

You can change these variables to effect your total column count, the gutter width, your default gutter settings, and responsive breakpoints.


## Changelog
- v0.1.6 - Added retina-image mixin; Created new media query variables for easier breakpoints  
- v0.1.5 - Fix to prevent empty columns from collapsing; Improved Grunt config and added LESS source map; Updated gradient mixin; Added placeholder and font-face mixin  
- v0.1.4 - Added README.md