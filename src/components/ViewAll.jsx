import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewAll = () => {
    const [todo,changeTodo]=useState([])
    const fetchData=()=>{
      axios.get("https://jsonplaceholder.typicode.com/todos")
      .then(
        (response)=>{
          changeTodo(response.data)
        }
      ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <table class="table">
                <thead>
                    <tr>
                        <th scope="col">User Id</th>
                        <th scope="col">Id</th>
                        <th scope="col">Title</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todo.map(
                            (value,index)=>{
                                return <tr>
                                <th scope="row">{value.userId}</th>
                                <td>{value.id}</td>
                                <td>{value.title}</td>
                            </tr>
                            }
                        )
                    }
                </tbody>
            </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll