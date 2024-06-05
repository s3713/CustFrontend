// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
 
// const CrudOperation = () => {
//   const [customers, setCustomers] = useState([]);
//   const [editCustomer, setEditCustomer] = useState(null);
//   const [formData, setFormData] = useState({
//     name: '',
//     age:'',
//     email: '',
//   });
 
//   useEffect(() => {
//     fetchCustomers();
//   }, []);
 
//   const fetchCustomers = async () => {
//     try {
//       const response = await axios.get('http://localhost:8888/band/read');
//       setCustomers(response.data);
//     } catch (error) {
//       console.error('Error fetching customers:', error);
//     }
//   };
 
//  const addOrUpdateCustomer = async formData => {
//   try {
//     const { name, age, email} = formData;
 
//     const data = {
//       name,
//       age,
//       email,
//     };
 
//     if (editCustomer) {
//       await axios.post(`http://localhost:8888/band/updateProfile?customerId=${editCustomer.id}&fullName=${name}&age=${age}&email=${email}`, data);
//       setEditCustomer(null);
//     } else {
//       await axios.post('http://localhost:8888/band/add', formData);
//     }
 
//     await fetchCustomers(); // Fetch the updated list of customers after adding or updating
//     setFormData({
//       name: '',
//       age:'',
//       email: ''
//     });
//   } catch (error) {
//     console.error('Error adding/updating customer:', error);
//   }
// };
 
 
//   const clearForm = () => {
//     setFormData({
//       name: '',
//       age: '',
//       email: ''
//     });
//   };
 
//   const deleteCustomer = async customerId => {
//     try {
//       await axios.delete(`http://localhost:8888/band/delete/${customerId}`);
//       fetchCustomers();
//     } catch (error) {
//       console.error('Error deleting customer:', error);
//     }
//   };
 
//   const handleChange = e => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };
 
//   const handleSubmit = e => {
//     e.preventDefault();
//     addOrUpdateCustomer(formData);
//   };
 
//   const editCustomerHandler = customer => {
//     setEditCustomer(customer);
//     setFormData({
//       name: customer.name,
//       age: customer.age,
//       email: customer.email
//     });
//   };
 
//   return (
//     <div className="container">
//       <h1 className="my-4">Band People</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" />
//         </div>
//         <div className="form-group">
//           <input type="age" className="form-control" name="age" value={formData.age} onChange={handleChange} placeholder="Age" />
//         </div>
//         <div className="form-group">
//           <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
//         </div>
//         <button type="submit" className="btn btn-primary">{editCustomer ? 'Update' : 'Add'} Customer</button>
//       </form>
//       <ul className="list-group mt-4">
//         {customers.map(customer => (
//           <li key={customer.id} className="list-group-item">
//             Name: {customer.name} - Age: {customer.age} - Email: {customer.email}
//             <button className="btn btn-danger ml-2" onClick={() => deleteCustomer(customer.id)}>Delete</button>
//             <button className="btn btn-primary ml-2" onClick={() => editCustomerHandler(customer)}>Edit</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
 
// export default CrudOperation;