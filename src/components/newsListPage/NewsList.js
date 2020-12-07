import React, {useCallback, useEffect, useRef} from 'react';
import {useVirtual} from 'react-virtual';
import NewsItem from './NewsItem';
import {connect} from 'react-redux';
import {getNews} from '../../redux/mainReducer';
import {useLocation} from 'react-router-dom';

const NewsList = ({news, listSize, itemSize, getNews}) => {
  const parentRef = useRef();
  const {state} = useLocation();

  const list = useVirtual({
    size: listSize + 1,
    parentRef,
    estimateSize: useCallback(() => itemSize, [itemSize])
  });

  const endIndex = list.virtualItems[list.virtualItems.length - 1].index;
  const startIndex = list.virtualItems[0].index;

  useEffect(() => {
    for (let i = startIndex; i <= endIndex; i++) {
      if (news[i]) continue;
      getNews(i);
      break;
    }
    // eslint-disable-next-line
  }, [news, getNews, startIndex]);

  useEffect(() => {
    if (state && state.index) {
      list.scrollToIndex(state.index);
    }
    // eslint-disable-next-line
  }, [state]);

  return (
    <div
      ref={parentRef}
      className='row list-wrapper'
    >
      <div
        className='list'
        style={{height: `${list.totalSize}px`}}
      >
        {list.virtualItems.map(item => {
          const {index, size, start} = item;

          if (!news[index]) return null;

          return <NewsItem
            key={index}
            index={index}
            size={size}
            start={start}
            news={news[index]}
          />;
        })}
      </div>
    </div>
  );
}

const mapStateTpProps = state => {
  return {
    news: state.news,
    listSize: state.listSize,
    itemSize: state.newsItemSize,
    selectedIndex: state.selectedIndex
  };
}

const mapDispatchToProps = {
  getNews
};

export default connect(mapStateTpProps, mapDispatchToProps)(NewsList);