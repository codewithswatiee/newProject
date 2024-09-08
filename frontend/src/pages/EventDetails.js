import { useParams } from 'react-router-dom';

function EventDetails() {
  const { id } = useParams();
  // Fetch and display event details based on id
  return <div>Details for event {id}</div>;
}

export default EventDetails;
