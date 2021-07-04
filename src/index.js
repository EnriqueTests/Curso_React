import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/41gLTMZk62L._SX333_BO1,204,203,200_.jpg',
  title: 'Titulo del libro 1',
  author: 'Autor anonimo 1',
};

const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/41gLTMZk62L._SX333_BO1,204,203,200_.jpg',
  title: 'Titulo del libro 2',
  author: 'Autor anonimo 2',
};

function BookList() {
  return (
    <section className="booklist">
      <Book 
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse aperiam itaque nihil atque odit enim eum quis quod dolorem quia!
          </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author} />
    </section>
  );
}

const Book = (props) => {
  const {img, title, author, children} = props;

  return (
    <article className='book'>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  )
};

ReactDom.render(<BookList />, document.getElementById('root'));