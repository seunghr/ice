import React,{useRef, useState} from 'react'
import { MdDelete } from "react-icons/md";
import "./Cart.css"
import shop_top from "../../images/shop_top.jpg"
const Cart = () => {
    
    const [todo, setTodo] = useState(''); // 입력할 할일 테스트
    const [todos, setTodos] = useState([
        {id : 1, checked:false, item : "파운드"},
        {id : 2, checked:false, item : "바"},
    ]);

    const AddItem = (item)=>{
        const id = todos.length ?  todos[todos.length - 1].id + 1 : 1;
        const newItem = { id, checked : false, item }
        const listItems = [ ...todos, newItem ];
        setTodos(listItems);
    }

    const onSubmit = (event)=>{
        event.preventDefault(); 

        if( todo === "" ){
            return; 
        }
        AddItem(todo);
        setTodo('');
    }
    
    const onChange = (event)=>{
        setTodo(event.target.value);
    }

    const itemDelete = (id)=>{
        const listItems = todos.filter( item => item.id !== id );
        setTodos( listItems );
    }

    const checkHandle = (id)=>{
        const listItems = todos.map( 
            item => item.id === id ? { ...item, checked : !item.checked } : item
        )
        setTodos( listItems );
    }


  return (
    <div className='cart_top'>
      <img src={shop_top} />
      <div className='cart_todo'>
          <div className='todos-container'>
                 <form onSubmit={ onSubmit }>
                    <label htmlFor="addItem" className='asap'>상품 검색</label>
                    <input type="text"
                           autoFocus
                        //    placeholder='상품 검색'
                           onChange={ onChange }
                           value={todo}
                           className="asap_shop"
                    />
                 </form>
                 { todos.length ? (
                    <ul>
                        {
                            todos.map( todo =>(
                                <li key={todo.id}>
                                    <input type="checkbox" className='check'
                                        onChange={()=>{checkHandle(todo.id)}}
                                        id={todo.id}
                                    />
                                    <label htmlFor={todo.id} className="line"
                                        style={{ fontSize:'24px',
                                                textDecoration : todo.checked ? "line-through" : "none"
                                            }}
                                    >{todo.item}</label>
                                    <MdDelete onClick={ ()=>{itemDelete(todo.id)}  }/>
                                </li>
                            ))
                        }
                    </ul>
                 ): (
                    <p style={{ color : 'red' }}> 상품을 찾을 수 없습니다. </p>
                 )}
            </div>
      </div>
    </div>
  )
}

export default Cart