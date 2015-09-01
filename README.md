# Mattbase

Base starter files for new projects and a responsive grid framework written in [LESS](http://lesscss.org/).

### What it is?
- Basic Grunt setup with jshint, uglify, less processing, watch, and livereload
- Responsive grid framework, LESS mixins, and starter files

### Getting Started/Installation
- Make sure you have [grunt-cli](http://gruntjs.com/getting-started) installed:
    `npm install -g grunt-cli`
- In your project folder run: `npm install`

### How to use the grid
The grid is based on the belief that the presentation layer should be separate from the content layer. Your content (HTML) should not be dependent on bloated CSS classes for it's appearance.


##### Example
With this grid system you can write your HTML like this:

    <section id=”content”>
       <article>
          <h1>…</h1>
          <p>…</p>
       </article>
       <aside>…</aside>
    </section>

And style it with CSS like this:

    #content {
    	.row()

    	article {
    		.col(12, mobile);
    		.col(8, tablet);
    		.col(9, desktop);
    	}

    	aside {
    		.col(12, mobile);
    		.col(4, tablet);
    		.col(3, desktop);
    	}
    }

You'll now have and `article` and `aside` section that is full width on mobile but 2 columns on tablet and desktop.


##### Row and Column Mixins
The `.row()` mixin simply clears it's contents and sets the width to 100%. It has no parameters.

The `.col()` mixin has 3 parameters:

    .col(@span, @gutter: @include-gutters, @device: mobile);

Set `@span` to the number of columns you'd like your content to span out of 12.
Set `@gutter` to true/false if you want to include gutters (defaults to global variable `@include-gutters`).
Set `@device` to mobile, tablet, or desktop to define the media query for that element (default: mobile).


##### Helper Mixins
In addition to `.row()` and `.col()` there are 2 helper mixins: `.offset()` and `.hide()`.

The `.offset()` mixin has the same 3 parameters as our column mixin:

    .offset(@span, @gutter: @include-gutters, @device: mobile);

The `.hide()` mixin only excepts the device parameter:

    .hide(@device: all);

Set `@device` to all, mobile, tablet, or desktop (default: all).


### Changelog
- v0.1.4 - Added README.md