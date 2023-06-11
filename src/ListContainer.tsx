import React from 'react';

type Prop = {
  promise: string;
}

const ListContainer: React.FC<Prop> = ({
  promise
}) => {
  return(
    <div>
      {promise}
    </div>
  )
}


export default ListContainer