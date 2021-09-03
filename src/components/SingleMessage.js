import React, {Fragment} from 'react' 
import EditMessage from './EditMessage'

class SingleMessage extends React.Component {

    state = {
        edit: false
    }

    render() {

        const{edit} = this.state
        const{singleMessage, clearSingleMessage, editMessage} = this.props

        const handleClearSingleMessage = () => {
            clearSingleMessage()
        }

        const handleEditStateChange = () => {
            this.setState({edit:true})
        }


        return (
            <Fragment>
                <h1 id="logo">Single Message Component</h1>
                <h1>{singleMessage.messageBody}</h1>
                <p>{singleMessage.id}</p>
                <button className="btn hover" onClick={handleClearSingleMessage}>Return</button>
                <button className="btn hover edit" onClick={handleEditStateChange}>Edit</button>
                {edit && <EditMessage singleMessage={singleMessage} editMessage={editMessage} />}
            </Fragment>
        )
    }
}

export default SingleMessage