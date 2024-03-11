import React, { Component } from 'react'
import "./TodoApp.css";

export class TodoApp extends Component {

  state = {
    input : "",
    items:[],
    editIndex: -1,
    
  };

 handleChange=(event)=>{
   this.setState({
    input:event.target.value
   })
 
 }

 storeItems=event=>{
  event.preventDefault();
  const{input}=this.state;
 
  this.setState({
   items:[...this.state.items,input],
   input:""
  })
   
 }
 deleteItems=(key)=>{
    // const allItems =this.state.items;
    // allItems.splice(key,1);
    this.setState({
      // items:allItems
      items:this.state.items.filter((data,index)=>index!== key)
         
   
    })
 }


 editItems = (index) => {
  this.setState({
    editIndex: index, // Set the index of the item being edited
  });
};

updateItem = (index, updatedText) => {
  const updatedItems = [...this.state.items];
  updatedItems[index] = updatedText;
  this.setState({
    items: updatedItems,
     editIndex: 5, // Exit edit mode
  });
};

  render() {

    const {input,items} = this.state;
    console.log(items);
    return (
      <div className="todo-container">
           
           
           <form className="input-section"onSubmit={this.storeItems}>
           <h1>Todo App</h1>
            <input type="text" value={input} onChange={this.handleChange} placeholder="Enter items....."/>
           

           </form>
           <ul>
               {/* {items.map((data,index)=>(
              <li key={index}>
                {data} <i1 className="fa-regular fa-pen-to-square" onClick={()=>this.editItems(index)}></i1> <i className="fa-regular fa-trash-can" onClick={()=>this.deleteItems(index)}></i> 
                </li>
             ))}
            
           </ul>
      </ div>
    )
  }
}   */}

  {items.map((data, index) => (
            <li key={index}>
              {this.state.editIndex === index ? (
                <div>
                  <input
                    type="text"
                    value={data}
                    onChange={(e) => this.updateItem(index, e.target.value)}
                  />
                  <button onClick={() => this.updateItem(index, data)}>Save</button>
                </div>
              ) : (
                <div>
                  {data}{" "}
                  <i
                    className="fa-regular fa-pen-to-square"
                    onClick={() => this.editItems(index)}
                  ></i>{" "}
                  <i
                    className="fa-regular fa-trash-can"
                    onClick={() => this.deleteItems(index)}
                  ></i>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
} 

export default TodoApp;