// import React from 'react';
// import { useFetch } from '../hooks/fetch';

// const Infoitem = props => {
//   const {selectedItem} = props;
//   const itemId = props.match.params.id;
//   const [isLoading, fetchedData] = useFetch(selectedItem, [selectedItem]);

//   const item = fetchedData;

//   let content = <p>Loading item...</p>;

//   if (!isLoading && item) {
//     content = (
//       <ul className="item__specs">
//           <li className="item__detail">{item.name}</li>
//           <li className="item__detail">{item.model}</li>
//           <li className="item__detail">{item.manufacturer}</li>
//           <li className="item__detail">{item.cost_in_credits}</li>
//       </ul>
//     );
//   } else if (!isLoading && !item) {
//     content = <p>Could not fetch any data.</p>;
//   }
//   return content;
// }

// export default Infoitem;