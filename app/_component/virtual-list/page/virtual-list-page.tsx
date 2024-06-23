'use client';

import React from 'react';
import { Suspense } from 'react';
import { ListRowRenderer, List, AutoSizer } from 'react-virtualized';
import usePhotos from '../widget/photo-list/api/usePhotos';
import CopyTextButton from '../../shared/copy-button';
import Image from 'next/image';

const rowHeight = 150;

const VirtualListPage = () => {
  const list = usePhotos();

  const randomNum = Math.floor(Math.random() * 5000);

  const renderRow: ListRowRenderer = ({ index, key, style }) => {
    const photo = list?.[index];
    if (!photo) return null;

    return (
      <div key={photo.id} style={style} className='flex gap-4 items-center'>
        <div className='min-w-[150px] h-[150px]'>
          <Image
            src={photo.thumbnailUrl}
            alt='컬러칩'
            width={150}
            height={150}
          />
        </div>
        <div className='w-full flex justify-between pr-4'>
          <div className={`text-xl font-semibold`}>
            {photo.thumbnailUrl.split('/')[4]}
          </div>
          <CopyTextButton text={photo.thumbnailUrl.split('/')[4]} />
        </div>
      </div>
    );
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='h-[600px]'>
        <AutoSizer>
          {({ width, height }) => (
            <List
              width={width}
              height={height}
              rowHeight={rowHeight}
              rowRenderer={renderRow}
              rowCount={list?.length || 0}
              overscanRowCount={3}
            />
          )}
        </AutoSizer>
      </div>

      <div>
        당신에게 오늘 어울리는 색은:
        <div
          key={list && list[randomNum].id}
          className='flex gap-4 items-center'
        >
          <div className='min-w-[150px] h-[150px]'>
            {list && (
              <Image
                src={list[randomNum].thumbnailUrl}
                alt='컬러칩'
                width={150}
                height={150}
              />
            )}
          </div>
          <div className='w-full flex justify-between pr-4'>
            <div className={`text-xl font-semibold`}>
              {list && list[randomNum].thumbnailUrl.split('/')[4]}
            </div>
            <CopyTextButton
              text={list && list[randomNum].thumbnailUrl.split('/')[4]}
            />
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default VirtualListPage;
