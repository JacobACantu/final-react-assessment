import { render } from '@testing-library/react'
import React from 'react' 
import MessageItem from './MessageItem'
import Messageitem from'./MessageItem'

class Messages extends React.Component {
        render() {

            const{messages, deleteMessage, selectSingleMessage} = this.props

            return(
                <div>
                    {messages.map(message => (
                        <MessageItem
                        message={message}
                        key={message.id}
                        deleteMessage={deleteMessage}
                        selectSingleMessage={selectSingleMessage}
                        />
                    ))}
                </div>
            )
        }

}

export default Messages