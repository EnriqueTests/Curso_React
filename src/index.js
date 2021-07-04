import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const books = [
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/41gLTMZk62L._SX333_BO1,204,203,200_.jpg',
    title: 'Titulo del libro 1',
    author: 'Autor anonimo 1',
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/41gLTMZk62L._SX333_BO1,204,203,200_.jpg',
    title: 'Titulo del libro 2',
    author: 'Autor anonimo 2',
  },
];

const names = ['john', 'peter', 'susan'];
const newNames = names.map((name) => {
  return <h1>{name}</h1>
});

console.log(newNames);

function BookList() {
  return <section className="booklist">{newNames}</section>;
}

const Book = (props) => {
  const {img, title, author } = props;

  return (
    <article className='book'>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
};

ReactDom.render(<BookList />, document.getElementById('root'));