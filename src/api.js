import React,{useState,useEffect} from "react";

function apiGet() {
    const getTodo = () => {
      return fetch("https://gsym8ugyub.execute-api.eu-central-1.amazonaws.com/dev/todo_list",
       {
        type:'GET',
      }).then((res) => res.json())
    };
  
    return {
      getTodo
    };
    
    }
  
  
  export default apiGet();
