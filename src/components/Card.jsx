// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
  return (
    <>
      <div className='bg-gray-100 w-full rounded-xl p-4'>
        <h4 className='font-semibold text-sm text-blue-800 m-2'>
          {props.period}
        </h4>
        <iframe
          src={props.link}
          className='w-full rounded-md hover:shadow-xl duration-500'
        ></iframe>
      </div>
    </>
  );
}

Card.propTypes = {
  period: PropTypes.string.isRequired, // Validate period prop as a string and mark it as required
  link: PropTypes.string.isRequired, // Validate link prop as a string and mark it as required
};

export default Card;
