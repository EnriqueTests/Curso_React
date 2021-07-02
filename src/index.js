import React from 'react';
import ReactDom from 'react-dom';

import './index.css';
function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className='book'>
      <Image></Image>
      <Title />
      <Author />
    </article>
  )
};

const Image = () => (
  <img src="https://www.ecured.cu/images/8/81/Libro_abierto.jpg" alt="" />
);

const Title = () => <h1>Titulo del libro</h1>

const Author = () => <h4>Autor anonimo</h4>

ReactDom.render(<BookList />, document.getElementById('root'));