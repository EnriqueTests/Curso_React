import React from 'react';
import ReactDom from 'react-dom';

import './index.css';
function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const author = 'Autor anonimo';
const Book = () => {
  const title = 'Titulo del libro';
  return (
    <article className='book'>
        <img 
        src="https://www.ecured.cu/images/8/81/Libro_abierto.jpg" 
        alt="" 
        />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      <p>{6 + 6}</p>
    </article>
  )
};

ReactDom.render(<BookList />, document.getElementById('root'));