# Quick Start

<p>Quickly set up Primparity with these steps</p>

## Install

<p>Steps on how to install</p>

- ### Using Node Package Manager
Install with ```npm```:

```sh
npm i primparity
```
If you npm version less than 5 you can use the following:
```sh
npm install primparity --save
```

- ### Manual install

If you don't like ```npm``` or have trouble installing the tool, you can get it from github

## Usage

<p>Include PrimParity in your js file</p>

```js
const prp = require('primparity');
```

<p>Thats it!<br>You can now use PrimParity in your projects.</p>

#### Check Parity (odd/even)
```js
//odd
prp.checkParity.odd(1); //true
prp.checkParity.odd(2); //false
//even
prp.checkParity.even(1); //false
prp.checkParity.even(2); //true
```
#### Check Primality (prime/composite)
```js
//prime
prp.checkPrimality.prime(2); //true
prp.checkPrimality.prime(4); //false
//composite
prp.checkPrimality.composite(2); //false
prp.checkPrimality.composite(4); //true
```

