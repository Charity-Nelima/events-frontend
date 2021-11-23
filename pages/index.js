
import Layout from"../components/layout";
import EventItem from"../components/EventItem";
import {API_URL} from "../config/index";

export default function Homepage(props) {
 console.log(props.events);

  return (
    <Layout title="Events page">
      <h1>Music Events</h1>
      {props.events.map((event) =>{
        return <EventItem key={event.id} eventData={event}/>
      })}
    </Layout>
  );
}
export async function getStaticProps(){
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return{
    props:{ events },
  };
}



