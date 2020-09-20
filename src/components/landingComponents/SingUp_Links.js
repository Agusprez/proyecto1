import React from 'react';

const Links = (props) => {
  return (
    <>
      <a className="mx-2" target="_blanck" href={props.destino}>
        <i className={props.icon}>
        </i>
      </a>
    </>
  );
};
export default Links;