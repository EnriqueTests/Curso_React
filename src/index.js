import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const books = [
  {
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/41gLTMZk62L._SX333_BO1,204,203,200_.jpg',
    title: 'Titulo del libro 1',
    author: 'Autor anonimo 1',
  },
  {
    id: 2,
    img: 'https://images-na.ssl-images-amazon.com/images/I/41WOfByjSPL._SX331_BO1,204,203,200_.jpg',
    title: 'Titulo del libro 2',
    author: 'Autor anonimo 2',
  },
  {
    id: 3,
    img: 'https://images-na.ssl-images-amazon.com/images/I/41NfAUwZbeL._SX308_BO1,204,203,200_.jpg',
    title: 'Titulo del libro 3',
    author: 'Autor anonimo 3',
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <Book key={book.id} {...book}></Book>
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert('Hello world');
  };
  const complexExample = (author) => {
    console.log(author);
  }

  return (
    <article className='book' onMouseOver={() => {
      console.log(title);
    }}>
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
      <button type="button" onClick={() => complexExample(author)}>more complex example</button>
    </article>
  )
};

ReactDom.render(<BookList />, document.getElementById('root'));