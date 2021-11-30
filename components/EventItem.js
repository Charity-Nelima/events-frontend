import Link from "next/link";
import Image from "next/Image";
import styles from "../styles/EventItem.module.css";

export default function EventItem(props){
    return(
        <div className={styles.event}>
            <div className={styles.img}>

                <Image src={props.eventData.Image
                ? props.eventData.Image
                :`${props.eventData.image}`
                }
                width={170}
                height={100}
                />

                
            </div>
            
            <div className={styles.info}>
                <span>{props.eventData.date} at{ props.eventData.time}</span>
                <h3>{props.eventData.name}</h3>
                
            </div>
        
            
            <div className={styles.link}>
                <Link href={`/events/${props.eventData.slug}`}>
                    <a>Details</a>
                </Link>
            </div>
        </div>
    );

}