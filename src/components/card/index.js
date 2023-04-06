import { Card, Feed } from 'semantic-ui-react'
import { FiCheck } from "react-icons/fi";
import UseAnimations from "react-useanimations";
import loading from 'react-useanimations/lib/loading';
import alertCircle from 'react-useanimations/lib/alertCircle';
import alertTriangle from 'react-useanimations/lib/alertTriangle';

const card = ({ title, subtitle, description }) => (
    <Card color='red'>
        <Card.Content>
            <Card.Header>{title}</Card.Header>
            <Card.Meta>{subtitle}</Card.Meta>
            <Card.Description>{description}</Card.Description>
        </Card.Content>
        <Card.Content>
            <Feed>
                <FeedEvent iconStatus="" label="dsajdskal" summary="dgsadgshaj" />
                <FeedEvent iconStatus="successful" label="dsajdskal" summary="dgsadgshaj" />
                <FeedEvent iconStatus="alert" label="dsajdskal" summary="dgsadgshaj" />
                <FeedEvent iconStatus="error" label="dsajdskal" summary="dgsadgshaj" />
            </Feed>
        </Card.Content>
    </Card>
)

/**
 * 
 * @param {successful} status 
 * @returns 
 * @see @link https://react.useanimations.com/
 * 
 */
export const StatusExecutionFeed = ({status}) => {
    const Icon = ({ name }) => <UseAnimations animation={name} size={40} loop={false} />;
    switch (status) {
        case "execution":
            return <Icon name={loading}/>;
        case "successful":
            return <FiCheck size={40} />;
        case "alert":
            return <Icon name={alertCircle}/>;
        case "error":
            return <Icon name={alertTriangle}/>;
        default:
            return <Icon name={loading}/>
            
    }
}

export const FeedEvent = ({ iconStatus, label, summary }) => (
    <Feed.Event>
        <Feed.Label><StatusExecutionFeed status={ iconStatus } /></Feed.Label>
        <Feed.Content>
            <Feed.Label>{label}</Feed.Label>
            <Feed.Summary>{summary}</Feed.Summary>
        </Feed.Content>
    </Feed.Event>
)

export default card;