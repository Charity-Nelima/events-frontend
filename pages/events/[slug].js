import React from 'react'
import { FaPencilAlt,FaTimes} from 'react-icons/fa';
import Link from "next/link";
import Layout from '../../components/layout';
import { API_URL } from '../../config/index';
import Image from "next/image";
import styles from "../../styles/Event.module.css"
export default function EventPage(props){
    const titleName = props.eventEdna.name.split(" ");
    const editEvent=()=>{
        console.log(editEvent)
    }

    const deleteEvent=()=>{
        console.log('delete event')
        
    }
    return (
        <Layout title={`${titleName[0]} ${titleName[1]}`}>
        <div>
          <div>
              <div className={styles.event}></div>
                  <div className={styles.controls}></div>
               
              <Link href={`events/edit/${props.eventEdna.id}`}>
              <a className={styles.edit}>
                  <FaPencilAlt/> Edit Event
              </a>
              </Link>
              <a href="#" onClick={deleteEvent} className={styles.delete}> 
                  <FaTimes /> Delete Event 
              </a>
          </div>
          <span>
              {props.eventEdna.date} at {props.eventEdna.time}
          </span>
          <h1>{props.eventEdna.name}</h1>
          {props.eventEdna.image &&(
              <div className={styles.image}> 
                  <Image src={props.eventEdna.image} width={960} height={600} />
              </div>
          )}
            <h3>Perfomers</h3>
            <p>{props.eventEdna.perfomers}</p>
            <h3>Description</h3>
            <p>{props.eventEdna.description}</p>
            <h3>Venue:{props.eventEdna.venue}</h3>
            <p>{props.eventEdna.address}</p>
            <Link href="/">
                <a className={styles.back}>Go Back</a>
            </Link>

        </div>
        </Layout>
    );
}
export async function getServerSideProps({query: {slug}}){
    const res = await fetch(`${API_URL}/api/events/${slug}`);
    const events = await res.json();
    return{
        props: {eventEdna: events[0]},
    };
}