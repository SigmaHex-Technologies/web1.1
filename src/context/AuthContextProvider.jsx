import React, { createContext, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1496065187959-7f07b8353c55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1527600478564-488952effedb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1528148343865-51218c4a13e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGQlMjBpbWFnZXMlMjBvZiUyMGhlYWRwaG9uZSUyMGZvciUyMGZ1bGwlMjB3aWR0aHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1578496479531-32e296d5c6e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGQlMjBpbWFnZXMlMjBvZiUyMG5pdHJvcHJlc3MlMjBtYWNoaW5lJTIwZm9yJTIwZnVsbCUyMHdpZHRofGVufDB8fDB8fHww",
  "https://media.istockphoto.com/id/1772668398/photo/woman-laptop-and-headphones-video-conference-with-presentation-or-interview-information-and.jpg?s=612x612&w=0&k=20&c=u9UM6aJQnbvzU_LexOBqaDonAbSZAyBCMkN738XLAo4=",
  "https://images.unsplash.com/photo-1650940925927-f4a30c930a4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhkJTIwaW1hZ2VzJTIwb2YlMjBrZXR0bGUlMjAlMjBmb3IlMjBmdWxsJTIwd2lkdGh8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1527600478564-488952effedb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];


export const AuthSlideContext = createContext();

export default function AuthContextProvider({ children }) {
  const [slide, setSlide] = useState(0);
  const [isAuth,setIsAuth] =useState(false)
  const [userDetails,setUserDetails] =useState({})

  

  return (
    <AuthSlideContext.Provider value={{ slide, setSlide, images,isAuth,setIsAuth,userDetails,setUserDetails }}>
      {children}
    </AuthSlideContext.Provider>
  );
}
