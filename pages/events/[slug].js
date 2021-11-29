import React from 'react'
import { FaPencilAlt,FaTimes} from 'react-icons/fa';
import Link from "next/link";
import Layout from '../../components/layout';
import { API_URL } from '../../config/index';
import Image from "next/image";
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
              <Link href={`events/edit/${props.eventEdna.id}`}>
              <a>
                  <FaPencilAlt/> Edit Event
              </a>
              </Link>
              <a href="#" onClick={deleteEvent}>
                  <FaTimes /> Delete Event 
              </a>
          </div>
          <span>
              {props.eventEdna.date} at {props.eventEdna.time}
          </span>
          <h1>{props.eventEdna.name}</h1>
          {props.eventEdna.image &&(
              <div>
                  <Image src={props.eventEdna.image} width={960} height={600} />
              </div>
          )}
            
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