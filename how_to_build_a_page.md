# Make a Single Web Page
_Now including all the fuss!_ :boom: :sparkles: :dizzy: :sweat_drops:

Ryan and Andreas did a coding demo (and there will be another one. With :camera:!)

Here's the [description](https://github.com/udacityalumni/resources/wiki/React-Training#demonstration), but if you're like me, this is not quite enough to understand it all.

However, the coding demo was very useful and made me believe that I _might just be able to do this_. So I thought I'll give it a try, and while doing so also write a guide for those who couldn't see the demo live.

## Create the page

The alumni-web-app environment looks intimidating. There are a ton of folders and dependencies and new frameworks (or plugins? What are these things even called?!). Some parts are quite complex, so that even seasoned programmers write lengthy guides on [how to use them](https://medium.com/@rajaraodv/webpack-the-confusing-parts-58712f8fcad9#.r5gqjy6ua).

_(Hei. No need to read that now. Stay here with me.)_ :wink:

The **good news**: This whole thing is so full of folders, because there's actually things being taken care of for us, so that generating a new page is as easy as typing `npm run generate:page` into your shell window.

:open_mouth:

Yeah!

Ok, there's a tiny bit more, namely that you:

- need to have the repo locally (here's [how to get started](https://github.com/udacityalumni/alumni-client/blob/master/how_to_get_started.md) on that (it's easy!))

- `node` has to be installed and working (that might be a bit less easy, but here's some [troubleshooting](https://github.com/udacityalumni/alumni-client/wiki/Troubleshooting#troubles-with-nodenpmnvm) :boom:)

- and then you open your shell and `cd` to the `alumni-client` folder you cloned

But that's it really. Then you can run `npm run generate:page` and follow the prompts that nicely guide you forward.

Looks like this:

```
? [PAGE] What is the name of the page component?
```
I entered `play`

```
? [PAGE] Enter the path of the page component.
```
Choose wisely. That's where you'll be able to access the page you're working on. I entered `play` again (the second time I did this :stuck_out_tongue_winking_eye: ) because that's smart - and then went to `http://0.0.0.0:1337/play` to be greeted by a little `Hello from PlayPage !`.

Makes you feel homey right away! :house_with_garden:

**So... Wait. What just happened?!**
### You just made a new page within the Udacity Alumni Web App!!! :smile: :thumbsup:

That's all. Now it's time to open up the project in your favorite text editor and check out all the code that's been automatically generated for your new page. You can also marvel at its beauty and even try to understand it. Comes in handy later on! You'll find it all here: `app/src/pages/YourPagePage`.

Well, haha, it's not gonna be `PagePage`. That's only assuming you'd have named your page `YourPage`. Which you probably didn't. I mean I'm alright if that's your choice, but why not choose something pretty like `Sky` for a name.

Or if you're feeling witty and explorative, you might choose [`Equi`](https://en.wiktionary.org/wiki/equipage) or [`Stum`](https://en.wiktionary.org/wiki/stumpage). If instead you named it [`See`](https://en.wiktionary.org/wiki/seepage) you should probably also make one called [`Pi`](https://en.wiktionary.org/wiki/pipage) (just to keep things under control, so you won't have to get mad and make one called [`Ram`](https://en.wiktionary.org/wiki/rampage)...) :stuck_out_tongue_winking_eye:

Did I just stray off? Haha. Okay, focus. :sweat_smile:

### Aside tips for later on (not really necessary now, but who knows maybe you run into these problems too):

In case you mess up locally and want the old order back, just [reset to the remote master branch](https://stackoverflow.com/questions/9210446/replace-local-branch-with-remote-branch-entirely).

I did that after having created a Page with a confusing path (Can you imagine?! :smile:). Once you did that, you cannot make or overwrite that same page name with a new path - at least with the workflow I've been using here.

Resetting the repository to the remote master helped by taking out all the changes to existing files that had happened - however it did not remove the _newly generated_ `PlayPage` folder in `app/src/pages`.

I tried a bit how to solve this in the shell, but eventually it worked by simply deleting the folder.
That brought me back to the start and allowed me to re-create the page with a nicer path. The simple and logical `/play` that I mentioned above. :smile:

>**Note** that this setup is meant just for experimenting around. If you'd actually be building on a new feature for the alumni-webapp, there are a few tiny [git guidelines](https://github.com/udacityalumni/resources/wiki/Team-Wide-Resources#example-git-workflow) specific for this project to follow through. But for trying this out locally and getting a hang of the structure, this is not necessary.


## Create a container

Just because. Nah - because that's how it works. Make containers. It's like creating little bits and pieces that you can use to reuse whenever you want to.

That's what we make a container for. That's where we put everything inside. That's what we can take and move elswhere and have it working still.

That's why it's awesome. :thumbsup:

Making a container goes _nearly_ the same as making a page. Dig this:

`npm run generate:container`

There's a subtle difference, but I'm sure you can figure it out :mag:.

[spoiler]
It's "container" after the colon!
[/spoiler]

The setup then again walks you through the creation of the Container and it goes like this:

```
? [CONTAINER] What should it be called? play
? [CONTAINER] Does it need styling? Yes
? [CONTAINER] Do you want actions/constants/reducer for this container? No
```

Step, step, step - and then there's a Container in your folder structure.

## Fill in some content

Look at us walking! :paw_prints: Time for the next step!

All else you need to infuse some seriously rich-in-substance content into the project, is a genius intellect and a teensy-bit of HTML knowledge. 

So, sticking to both of these requirements, that's what I added to the `render()` function:

`<p>And here a paragraph</p>` :grin:

Like here, like so:

```
class Play extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.play}>
		<p>And here a paragraph</p>
      </div>
    );
  }
}
```

You can basically fill this **component** up with HTML and it'll be good. Nearly.

**Take care for three things**:

- self-closing tags need to be explicitly closed, like in XML: `<hr />`
- `class` is a reserved word in JS, so for defining a HTML class you'll need to write `className="_____"` instead. Do fill the `_____` with something. Please. :expressionless:
- there has to be **one big overarching container element** that wraps all the rest (like here that `<div>`)

Why so? Because even though it nicely mimics, this is **not HTML**. That's a **JSX element**. It's just very similar to how you can write HTML, which is what makes it so convenient (and what is also what it was made for).


## Fill in some content _in a cooler way_ :sunglasses:

Alright!

Nice job! :thumbsup:

But now there are also quite some advantages coming from the fact that what we were writing just above is not actually HTML, but Javascript.

And there are other cool things due to the fact that we're using React. And oh my let's put all the names out there, also Grommet and _whoknowswhatelse_!!

**Grommet** has buit some JSX elements that are already designed to support great UX. For example, they include some stuff that makes them accessible for people that have difficulties seeing. Don't ask me how, I dunno. ¯\_(ツ)_/¯

But dang it if we're not gonna use the :shit: out of it!!

So let's get the gromment components into our project. In good old JS manner (:joy:) we're simply gonna import the components from another part of the project:

```
import Section from 'grommet-udacity/components/Section';
import Box from 'grommet-udacity/components/Box';
```

Here [`<Section></Section>`](https://grommet.github.io/docs/section) is a JSX component that resembles the `<section>` HTML tag, and [`<Box></Box>`](https://grommet.github.io/docs/box) is a flexbox implementation for this framework.

I'll also be brave and add another one: [`<Sidebar></Sidebar>`] :triumph:

```
import Sidebar from 'grommet-udacity/components/Sidebar';
```

And now we can make some of those!









By the way: You can freely mix "real HTML" and JSX components inside of a JSX component. React decides which is which through **capitalization**: JSX components are capitalized while HTML stick with their traditional lowercase-approach to existence.





---


_work in progress!!!_

_down below some more things to understand and maybe include_

---



### Works a little but not much, when done in the page's index file

The existing

```
  <div className={styles.container}>
    Hello from PlayPage !
  </div>
```

is a **JSX element**, that you can (kind of) fill up with normal HTML!

So here you could simply post your code from your first webpage project and it'd render over there in the alumni-app!

(Wait. Nope. This doesn't work.)

**Why does this ^ not work?**

>.

>.

>.
