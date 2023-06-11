import React from 'react';

type Prop = {
  promise: string;
}

const ListContainer: React.FC<Prop> = ({
  promise
}) => {
  return(
    <div className='promise-list'>
      {promise}
    </div>
  )
}


export default ListContainer