// import React, { useState } from "react";

// const AddPerson = (props) => {
//   const items = [
//     "Entree",
//     "Appetizer",
//     "Side",
//     "Alcohol",
//     "Snacks",
//     "Desserts",
//     "Drinks"
//   ];
//   const defaultState = {
//     name: ""
//   };
//   const [form, setForm] = useState(defaultState);
//   function handleSubmit() {}
//   return (
//     <div className="form">
//       <h1 className="heading titleH">R.S.V.P</h1>
//       <form onSubmit={event => handleSubmit(event)}>
//         <label className="toplabel">
//           Name
//           <input
//             className="nameF"
//             type="text"
//             name="name"
//             placeholder=" Name"
//           />
//         </label>

//         <label>
//           Food Item
//           <input
//             className="addressF"
//             type="text"
//             name="fooditem"
//             placeholder="Food Item"
//           />
//         </label>

//         <label>Item Type </label>

//         <select name="Item" value={props.Item}>
//           {items.map( i => {
//             return <option key={i} value={i} label={i}/>;
//           })}
//         </select>

//         <button className="buttonF buttondown">Submit</button>
//       </form>
//     </div>
//   );
// };
// export default AddPerson;
