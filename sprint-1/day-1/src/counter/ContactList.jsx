import {useState} from "react";
import ContactCard from './ContactCard';

const initData = [
    {
        id:1 ,
        name: "Hara",
        email: "hara@gmail.com",
        phone: "123456789"
    },
    {
        id: 2,
        name:"gayu" ,
        email:"gayus@gmail.com ",
        phone:"5765878"
    },
    {
        id:3 ,
        name: "bebu",
        email: "bebu@gmail.com",
        phone:"60987543"
    },
    {
        id:4 ,
        name: "kanda",
        email:"kanda@gmail.com", 
        phone:"34254687"
    },
    {
        id:5 ,
        name:"mahi" ,
        email:"mahi@gmail.com" ,
        phone:"465778990"
    },
   
]

function ContactList(){
    const [data,setData]=useState(initData)

    return (
        <div>
            {
                data.map((item)=>(
                    <ContactCard 
                    key={item.id}
                    name={item.name}
                    email={item.email}
                    phone={item.phone}
                    />
                ))}
        </div>
    );
}


export default ContactList;