// eslint-disable-next-line no-unused-vars
import React from 'react';
import Card from '../components/Card';
import CardObject from '../components/CardObject';

const aName = CardObject.map((item) => {
  return <Card {...item} />;
});

function Home() {
  return (
    <>
      <div className='bg-blue-900 h-14 font-semibold text-white text-2xl text-center p-4'>
        AEDC COLLECTION
      </div>
      <div className='grid gap-6 w-full box-border grid-cols-2 p-8'>
        <section className='grid p-2 gap-y-10'>
          <h2 className='text-center font-sans text-xl font-semibold'>
            PREPAID
          </h2>
          {aName[0]}
          {aName[1]}
          {aName[2]}
        </section>
        <section className='grid p-2 gap-y-10'>
          <h2 className='text-center font-sans text-xl font-semibold'>
            POSTPAID
          </h2>
          {aName[3]}
          {aName[4]}
          {aName[5]}
        </section>
      </div>
    </>
  );
}

export default Home;
