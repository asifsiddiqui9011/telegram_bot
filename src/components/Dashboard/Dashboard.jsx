// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import './Dashboard.css';

// // const Dashboard = () => {
// //   const [token, setToken] = useState(null);
// //   const [apiKey, setApiKey] = useState('');
// //   const [users, setUsers] = useState([
// //     [
// //         {
// //           "id": 1,
// //           "username": "john_doe",
// //           "email": "john.doe@example.com",
// //           "status": "active"
// //         },
// //         {
// //           "id": 2,
// //           "username": "jane_smith",
// //           "email": "jane.smith@example.com",
// //           "status": "blocked"
// //         },
// //         {
// //           "id": 3,
// //           "username": "alice_jones",
// //           "email": "alice.jones@example.com",
// //           "status": "active"
// //         },
// //         {
// //           "id": 4,
// //           "username": "bob_williams",
// //           "email": "bob.williams@example.com",
// //           "status": "active"
// //         }
// //       ]
      
// //   ]);

// //   const handleLoginSuccess = (credentialResponse) => {
// //     setToken(credentialResponse.credential);
// //     fetchUsers();
// //     fetchSettings();
// //   };

// //   const handleLoginFailure = () => {
// //     console.error('Login Failed');
// //   };

// //   const fetchUsers = async () => {
// //     const response = await axios.get('/api/users', {
// //       headers: {
// //         Authorization: `Bearer ${token}`,
// //       },
// //     });
// //     setUsers(response.data);
// //   };

// //   const fetchSettings = async () => {
// //     const response = await axios.get('/api/settings', {
// //       headers: {
// //         Authorization: `Bearer ${token}`,
// //       },
// //     });
// //     setApiKey(response.data.apiKey);
// //   };

// //   const updateApiKey = async () => {
// //     await axios.post(
// //       '/api/settings',
// //       { apiKey },
// //       {
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //         },
// //       }
// //     );
// //   };

// //   const blockUser = async (userId) => {
// //     await axios.post(
// //       `/api/users/block/${userId}`,
// //       {},
// //       {
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //         },
// //       }
// //     );
// //     fetchUsers();
// //   };

// //   const deleteUser = async (userId) => {
// //     await axios.delete(`/api/users/${userId}`, {
// //       headers: {
// //         Authorization: `Bearer ${token}`,
// //       },
// //     });
// //     fetchUsers();
// //   };

// //   return (
// //     <div className="admin-panel">
// //       {/* {token ? ( */}
// //         <div>
// //           <h1>Admin Panel</h1>
// //           <div className="bot-settings">
// //             <h2>Bot Settings</h2>
// //             <input
// //               type="text"
// //               placeholder="API Key"
// //               value={apiKey}
// //               onChange={(e) => setApiKey(e.target.value)}
// //             />
// //             <button onClick={updateApiKey}>Update API Key</button>
// //           </div>
// //           <div className="user-management">
// //             <h2>User Management</h2>
// //             {users.map((user) => (
// //               <div key={user.id} className="user-item">
// //                 <span>{user.username}</span>
// //                 <div>
// //                   <button onClick={() => blockUser(user.id)} className="block-btn">Block</button>
// //                   <button onClick={() => deleteUser(user.id)} className="delete-btn">Delete</button>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //     {/* //   ) : (
// //     //     // <Login onLoginSuccess={handleLoginSuccess} onLoginFailure={handleLoginFailure} />
// //     //     <div>
// //     //       <h2>Login</h2>
// //     //       <button onClick={handleLoginSuccess}>Login</button>
// //     //     </div>
// //     //   )} */}
// //     </div>
// //   );
// // };

// // export default Dashboard;


// import React, { useState,useEffect } from 'react';
// import axios from 'axios';
// import './Dashboard.css';

// const Dashboard = () => {
//   const [token, setToken] = useState(null);
//   const [apiKey, setApiKey] = useState('');
//   const [users, setUsers] = useState([
//     {
//       id: 1,
//       username: 'john_doe',
//       email: 'john.doe@example.com',
//       status: 'active',
//     },
//     {
//       id: 2,
//       username: 'jane_smith',
//       email: 'jane.smith@example.com',
//       status: 'blocked',
//     },
//     {
//       id: 3,
//       username: 'alice_jones',
//       email: 'alice.jones@example.com',
//       status: 'active',
//     },
//     {
//       id: 4,
//       username: 'bob_williams',
//       email: 'bob.williams@example.com',
//       status: 'active',
//     },
//   ]);

//   const [subscribers, setSubscribers] = useState([]);

//   useEffect(() => {
//     const fetchSubscribers = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/admin/users');
//         setSubscribers(response.data);
//         console.log(response.data);
//       } catch (error) {
//         console.error('Error fetching subscribers:', error);
//       }
//     };

//     fetchSubscribers();
//   }, []);

//   const handleLoginSuccess = (credentialResponse) => {
//     setToken(credentialResponse.credential);
//     fetchUsers();
//     fetchSettings();
//   };

//   const handleLoginFailure = () => {
//     console.error('Login Failed');
//   };

//   const fetchUsers = async () => {
//     const response = await axios.get('/api/users', {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     setUsers(response.data);
//   };

//   const fetchSettings = async () => {
//     const response = await axios.get('/api/settings', {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     setApiKey(response.data.apiKey);
//   };

//   const updateApiKey = async () => {
//     await axios.post(
//       '/api/settings',
//       { apiKey },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//   };

//   const blockUser = async (userId) => {
//     await axios.post(
//       `/api/users/block/${userId}`,
//       {},
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     fetchUsers();
//   };

//   const deleteUser = async (userId) => {
//     await axios.delete(`/api/users/${userId}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     fetchUsers();
//   };

//   return (
//     <div className="admin-panel">
//       <div>
//         <h1>Admin Panel</h1>
//         <div className="bot-settings">
//           <h2>Bot Settings</h2>
//           <input
//             type="text"
//             placeholder="API Key"
//             value={apiKey}
//             onChange={(e) => setApiKey(e.target.value)}
//           />
//           <button onClick={updateApiKey}>Update API Key</button>
//         </div>
//         <div className="user-management">
//           <h2>User Management</h2>
//           {subscribers.map((user) => (
//             <div key={user.id} className="user-item">
//               <span>{user.id}</span>
//               <span>{user.first_name}</span>
//               <span>{user.chatId}</span>
//               <span>{user.city}</span>
              
//               <div>
//                 <button onClick={() => blockUser(user.id)} className="block-btn">Block</button>
//                 <button onClick={() => deleteUser(user.id)} className="delete-btn">Delete</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
  const [token, setToken] = useState(null);
  const [apiKey, setApiKey] = useState('');
  const [subscribers, setSubscribers] = useState([]);
  const url = import.meta.env.VITE_BACKEND_URL;


  const fetchSubscribers = async () => {
    try {
      const response = await axios.get(`${url}/admin/users`);
      setSubscribers(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching subscribers:', error);
    }
  };
  useEffect(() => {
   

    fetchSubscribers();
  }, []);

  const handleLoginSuccess = (credentialResponse) => {
    setToken(credentialResponse.credential);
    fetchSubscribers();
    fetchSettings();
  };

  const handleLoginFailure = () => {
    console.error('Login Failed');
  };

  const fetchSettings = async () => {
    const response = await axios.get(`${url}/settings`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setApiKey(response.data.apiKey);
  };

  const updateApiKey = async () => {
    await axios.post(
      `${url}/settings`,
      { apiKey },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };

  const blockUser = async (userId) => {
    await axios.post(
      `${url}/admin/block/${userId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    fetchSubscribers();
  };

  const unblockUser = async (userId) => {
    await axios.post(
      `${url}/admin/unblock/${userId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    fetchSubscribers();
  };

  const deleteUser = async (userId) => {
    await axios.delete(`${url}/admin/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    fetchSubscribers();
  };

  return (
    <div className="admin-panel">
      <div>
        <h1>Admin Panel</h1>
        <div className="bot-settings">
          <h2>Bot Settings</h2>
          <input
            type="text"
            placeholder="API Key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />
          <button onClick={updateApiKey}>Update API Key</button>
        </div>
        {/* <div className="user-management">
          <h2>User Management</h2>
          <table className="user-table">
            <thead>
              <tr>
                <th style={{ width: '5%' }}>Sr No</th>
                <th style={{ width: '20%' }}>First Name</th>
                <th style={{ width: '20%' }}>Chat ID</th>
                <th style={{ width: '20%' }}>City</th>
                <th style={{ width: '15%' }}>Status</th>
                <th style={{ width: '20%' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {subscribers.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.first_name}</td>
                  <td>{user.chatId}</td>
                  <td>{user.city}</td>
                  <td>{user.blocked ? 'Blocked' : 'Active'}</td>
                  <td style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {user.blocked ? (
                      <button onClick={() => unblockUser(user._id)} className="unblock-btn">
                        Unblock
                      </button>
                    ) : (
                      <button onClick={() => blockUser(user._id)} className="block-btn">
                        Block
                      </button>
                    )}
                    <button onClick={() => deleteUser(user._id)} className="delete-btn">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
        <div className="user-management">
  <h2>User Management</h2>
  <table className="user-table">
    <thead>
      <tr>
        <th>Sr No</th>
        <th>First Name</th>
        <th>Chat ID</th>
        <th>City</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {subscribers.map((user, index) => (
        <tr key={user.id}>
          <td>{index + 1}</td>
          <td>{user.first_name}</td>
          <td>{user.chatId}</td>
          <td>{user.city}</td>
          <td>{user.blocked ? 'Blocked' : 'Active'}</td>
          <td className="actions-cell">
            {user.blocked ? (
              <button onClick={() => unblockUser(user._id)} className="unblock-btn">
                Unblock
              </button>
            ) : (
              <button onClick={() => blockUser(user._id)} className="block-btn">
                Block
              </button>
            )}
            <button onClick={() => deleteUser(user._id)} className="delete-btn">
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

      </div>
    </div>
  );
};

export default Dashboard;
