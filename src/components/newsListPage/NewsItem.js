import React from 'react';
import {Link} from 'react-router-dom';

const NewsItem = ({index, size, start, news}) => {
  return (
    <Link
      to={{
        pathname: `/news/${index}`,
        state: {data: news, index}
      }}
      className='d-block list-item px-2 pb-2 list-item-border'
      style={{
        height: `${size}px`,
        transform: `translateY(${start}px)`
      }}
    >
      <div className='media hide-overflow'>
        <div className='col-5 col-md-3 p-0'>
          <img
            className="d-flex align-self-start mr-3 w-100 h-100 py-2"
            src={news.urlToImage}
            alt=''
          />
        </div>
        <div className='col p-0 pl-2'>
          <div className="media-body">
            <h5 className="mt-0">
              {news.title}
            </h5>
            <p className='d-none d-md-block'>
              {news.description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default NewsItem;