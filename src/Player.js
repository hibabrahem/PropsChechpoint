import Card from 'react-bootstrap/Card';
import "./Players.css";

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title id='name'>{name}</Card.Title>
                <Card.Subtitle id="age"> {age} years old </Card.Subtitle>
                <Card.Text>
                    <span className='text'>{name}</span> , a football legend from <span className='text'>{nationality}</span>, currently plays for <span className='text'>{team}</span> . He wears the iconic jersey number <span className='text'>{jerseyNumber}</span> ."

                </Card.Text>
                <Card.Link href="#">{imageUrl}</Card.Link>

            </Card.Body>
        </Card>
    );
}

export default Player;