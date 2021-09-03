import React, {Fragment} from 'react' 

class EditMessage extends React.Component {
    state = {
        msgBodyText: ''
    }

    render() {

        const{msgBodyText} = this.state
        const{singleMessage, editMessage} = this.props

        const handleChangemsgBody = (e) => {
            this.setState({msgBodyText: e.target.value})
        }

        const handleSubmit = (e) => {
            e.preventDefault()
            const updatedMessage = {
                messageBody: msgBodyText,
                id: e.target.id
            }

            editMessage(updatedMessage)
        }

        return(
            <Fragment>
                <h1 id="logo">Edit Message</h1>
                <form onSubmit={handleSubmit} id={singleMessage.id}>
                    <input className="label" type="text" value={msgBodyText} onChange={handleChangemsgBody}/>
                    <input type="submit" className="btn hover"/>
                </form>
            </Fragment>
        )
    }
}

export default EditMessage