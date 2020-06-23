# Dragimate

Make any HTML element transformable on the front end by using a mouse or touch device

### Installation:

1. Clone the repository to your local machine
2. Extract the bundled javascript from the `lib` folder (use either the minified or regular version)

### Getting started:

#### Importing

Import the library into your HTML file, before calling it in one of your other scripts.

```
<script src="dragimate.min.js"></script>
```

#### Create your first transformation object in JavaScript

1. Create an array of animation objects. Transform types are required, the remaining properties are optional. For example:

```
const animationObjects = [{ transform: 'rotateX', dragSpeed: 1, initalValue: 0, easeSpeed: 1, easeDuration: 200, }, { transform: 'rotateY' }];
```

2. Create a new animation element.
   Specify the query selector as the first argument and the animation object as the second.

```
dragimate.create('.selector', animationObject);
```

#### Done! Easy, wasn't it?

###### License (non-commercial): CC BY-NC 4.0
