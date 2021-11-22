import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

type Book = {
  url: string;
  title: string;
  read_date: string;
  cover_src: string;
}

const Page = styled.div`
  text-align: center;

  h2 {
    margin: 45px 0 0;
  }
`;


const ellipsis = keyframes`
  from {
    width: 0px;
  }
  to {
    width: 1.25em;
  }
`;
const Loading = styled.div`
  font-size: 30px;
  height: 100vh;
  line-height: 100vh;

  &:after {
    overflow: hidden;
    display: inline-block;
    vertical-align: bottom; 
    animation: ${ellipsis} steps(4,end) 900ms infinite;
    content: "…"; /* ascii code for the ellipsis character */
    width: 0px;
  }
`;

const Error = styled.div`
  font-size: 30px;
  height: 100vh;
  line-height: 100vh;
`;

const bookWidth = 150;

const BookLink = styled.a`
  display: inline-block;
  position: relative;

  transition: transform .25s;
  transform-origin: bottom center;

  width: ${bookWidth}px;

  margin: 40px 20px;

  color: #000;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }

  p.read-date {
    opacity: 0;
    position: absolute;
    box-sizing: border-box;

    background: #FFF;
    padding: 5px;
    border-radius: 2px;
    box-shadow: 2px 2px 5px rgba(0,0,0, 0.5);

    width: ${bookWidth*0.75}px;
    bottom: -20px;
    left: 50%;
    margin-left: -${bookWidth*0.75/2}px;

    transition: opacity .25s, bottom .25s;
  }

  &:hover {
    transform: scale(1.1);

    p.read-date {
      opacity: 1;
      bottom: 10px;
    }

    img {
      transform: perspective(1000px) rotateY(-20deg);
    }

    & div {
      right: -5px;
    }
  }
`;

const bookRadius = "3px";

const BookCover = styled.img`
  border: 1px solid #AAA;
  border-radius: ${bookRadius};
  width: 100%;
  margin-bottom: -4px;

  transition: transform .25s;
  transform-origin: center left;
`;
const BookPage = styled.div`
  z-index: -1;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: #FFF;
  border: 1px solid #AAA;
  border-radius: ${bookRadius};
  box-sizing: border-box;

  transition: right .25s;
`;

const StyledBook = ({book}: {book: Book}) => (
  <BookLink href={book.url} target="_blank" rel="noopener noreferrer">
    <BookCover src={book.cover_src} alt="" />
    <BookPage/>
    {
      book.read_date
      ? (
        <p className="read-date">Finished:<br/>{book.read_date}</p>
      ) : null
    }
  </BookLink>
);

enum Status {
  Loading,
  Loaded,
  Error,
}

function App() {
  const [status, setStatus] = useState(Status.Loading);
  const [books, setBooks]: [[Book[], Book[], Book[]], Function] = useState([[],[],[]]);
  const [currentlyReadingBooks, booksReadThisYear, favoriteBooks]: [Book[], Book[], Book[]] = books;
  useEffect(() => {
    fetch('https://europe-west3-rugged-shell-330515.cloudfunctions.net/goodreads_node')
      .then(res => res.json())
      .then(res => {
        setBooks(res);
        setStatus(Status.Loaded);
      }).catch(() => setStatus(Status.Error));
  }, []);

  if (status === Status.Loading) {
    return (
      <Page>
        <Loading>Loading</Loading>
      </Page>
    );
  }

  if (status === Status.Error) {
    return (
      <Page>
        <Error>Ruh roh, something went wong!</Error>
      </Page>
    );
  }
  
  return (
    <Page>
      <h2>Currently reading ({currentlyReadingBooks.length})</h2>
      <div>
        {
          currentlyReadingBooks.map((book: Book, idx: number) => (
              <StyledBook book={book} key={idx} />
          ))
        }
      </div>
      <h2>Read so far in {new Date().getFullYear()} ({booksReadThisYear.length})</h2>
      <div>
        {
          booksReadThisYear.map((book: Book, idx: number) => (
            <StyledBook book={book} key={idx} />
          ))
        }
      </div>
      <h2>All time favorites ({favoriteBooks.length})</h2>
      <div>
        {
          favoriteBooks.map((book: Book, idx: number) => (
            <StyledBook book={book} key={idx} />
          ))
        }
      </div>
    </Page>
  );
}

export default App;
