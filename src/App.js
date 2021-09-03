import React from 'react'
import Messages from './components/Messages'
import MessageInput from './components/MessageInput'
import SingleMessage from './components/SingleMessage'
import './App.css';
import { v4 as uuidv4 } from 'uuid';


class App extends React.Component {

  state= {
    messages: [],
    singleMessage: null
  }

  render() {
    const {messages, singleMessage} = this.state


    // add Message

    const addMessage = (obj) => {
      const id = uuidv4();
      obj.id = id
      this.setState({messages: [...messages, obj]})
    }

    // delete message

    const deleteMessage = (id) => {
      this.setState({messages: messages.filter(message => message.id !== id)})
    }

    // select single Message

    const selectSingleMessage = (message) => {
      this.setState({singleMessage: message})
    }

    // clear single Message

    const clearSingleMessage = () => {
      this.setState({singleMessage: null})
    }

    // edit Message
    const editMessage = (obj) => {
      const updatedMessages = messages.map(message => {
        if (obj.id === message.id) {
          message.messageBody = obj.messageBody
        }
        return message
      })
      this.setState({messages: updatedMessages})
      this.setState({singleMessage: null})
    }

    //conditional rendering
    if(singleMessage) {
      return (
        <div className="container">
          <SingleMessage
          singleMessage={singleMessage}
          clearSingleMessage={clearSingleMessage}
          editMessage={editMessage}
          />
        </div>
      )
    }


    return(
      <div className="app">
        <h1 id="logo">Hurricane Message Board</h1>
        <MessageInput addMessage={addMessage}/>
        <Messages
        messages={messages}
        deleteMessage={deleteMessage}
        selectSingleMessage={selectSingleMessage}
        />
      </div>
    )
  } 
}

export default App;

