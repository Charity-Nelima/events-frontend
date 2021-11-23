import React from 'react'
import Layout from '../../components/layout';
import { API_URL } from '../../config/index';
export default function EventPage(props){
    const titleName = props.eventEdna.name.split("");
    return (
        <Layout title={`$ {titleName[0]} ${titleName[1]}`}>
        <div>
          <h1>{props.eventEdna.name}</h1>
          
            
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