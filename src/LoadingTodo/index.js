import React from "react"
import './LoadingTodo.css'

function LoadingTodo() {
    return(
        <li className="LoadingTodo-container">
            <span className="LoadingTodo-completeIcon"></span>
            <p className="LoadingTodo-text">Cargando TODOsππ±βπ»π±βπ</p>
            <span className="LoadingTodo-deleteIcon"></span>
        </li>
   )
}

export { LoadingTodo }