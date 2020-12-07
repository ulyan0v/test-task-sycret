import React from 'react';
import {Link, useLocation} from 'react-router-dom';

const NewsPage = () => {
  const {state} = useLocation();

  return (
    <div className='row py-2'>
      <div className='col-12 col-md-4'>
        <img
          className='mh-100 mw-100'
          src={state.data.urlToImage}
          alt=''
        />
      </div>
      <h2 className='col d-flex justify-content-center align-items-center'>
        {state.data.title}
      </h2>
      <div className='col-12 ml-2'>
        <p>
          {state.data.description}
        </p>
        <p>
          Источник: <a href={state.data.url}>{state.data.url}</a>
        </p>
        <Link to={{
          pathname: '/news',
          state: {index: state.index}
        }}>
          <button className='btn btn-outline-primary'>
            &crarr; Назад
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NewsPage;