import {useState} from 'react';
import styles from './ContactCard.module.css';

function ContactCard(props) {

    const {name,email,id,phone}= props;
    const [isActive,setIsActive] = useState(false);

    // if (isActive) {
    //     return
    //     <div onclick={()=>setIsActive(false)}>activated</div>
    // }

    return(
        <div onClick={()=>setIsActive(!isActive)} className={styles.container}>
            <div>{name}</div>
            <div>{email}</div>

            <div className={styles.clickContainer}></div>
            {/* {isActive && <div>{phone}</div>} */}
            {isActive ? (
                <div onClick={()=>setIsActive(!isActive)}>
                    {" "}click to show more{" "}
                    </div>
            ) : (
            <div onClick={()=>setIsActive(!isActive)}>{phone}</div>)}

        </div>
    );
}


export default ContactCard ;