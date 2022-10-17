import React from "react";
import './index.css';
import { useState, useEffect } from "react";

function App() {
 
  const [user, setUser] = useState({
      title: " ", description: " "
  })

  let name , value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ... user, [name]: value});
  }

  const PostData = async (e) => {
    e.preventDefault();

    const {title, description} = user;

    const res = await fetch("http://localhost:3000/students", {
      body:JSON.stringify({
        title, description
      })
    })
    // const res = await res.json;
  }

  return (
    <div class="form-container">
      <form class="register-form">
        
        <input
          id="title"
          value={user.title}
          onChange={handleInputs}
          class="form-field"
          type="text"
          placeholder="Title"
          name="title"
          method="POST"
        >
        </input>
        
        <textarea 
        value={user.description}
        onChange={handleInputs}
          id="description" 
          class="form-field"
          type="text"
          placeholder="Description" 
          name="description"
          rows="4" 
          cols="5"
          method="POST"
          >
            
        </textarea>
       
        <button class="form-field" type="file" value='Upload'>
             Upload Thumbnail
        </button>

        <button class="form-field" type="file">
             Upload Video
        </button>

        <button class="form-field" type="submit"  onClick={PostData}>
             Submit
        </button>


      </form>
    </div>
  );
}


export default App;

























// import React from 'react';
// import './index.css';
// import axios from "axios";

// class App extends React.Component{

//   state = {
//     title: '',
//     description: ''
//   }

//   handleChange = (event) =>{
//     const target = event.target;
//     const name = target.name;
//     const value = target.value;

//     this.setState({
//       [name] :value 
//     });
//   }

//   submit = (event) => {
//     event.preventDefault();

//     const payload = {
//       title : this.state.title,
//       description: this.state.body
//     }

//     axios({
//       url: 'http://localhost:3000/student',
//       method: 'POST',
//       studentData: payload
//     })
//     .then(()=>{
//         console.log('Data has bee send to the server');
//     })
//     .catch(() =>{
//         console.log('internal server error');
//     });
//   }

//   render(){
//     console.log('State', this.state);
//     return(
//       <div>
//         <h2>Welcome to my App</h2>
//         <form onSubmit = {this.submit}>
//           <div className="form-input">
//             <input
//             type="text"
//             name="title"
//             value={this.state.title}
//             onChange={this.handleChange}
//             />
//           </div>
//           <div className = "form-input">
//             <textarea 
//             placeholder="body" 
//             name="body" 
//             cols="30" 
//             rows="10"
//             value={this.state.body}
//             onChange={this.handleChange} >
//             </textarea>
//           </div>

//           <button>Submit</button>
//         </form>
//         </div>
//     );

//   }

// }


// export default App;




