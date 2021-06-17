import React from 'react';


class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {      
      title: '',
      sport: '',
      description: '',
      startDate: '',
      endDate: '',
      lat: this.props.location.lat,
      lng: this.props.location.lng,
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.clearedErrors = false;
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createEvent(this.state.event)
    this.props.closeModal();
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  // renderErrors() {
  //   return (
  //     {this.props.errors.map(error => {
  //       return (
  //         <li className="error" key={error}>
  //           {error}
  //         </li>
  //       );
  //     })};
  //   )
  // }

  render(){
    return (
    <div className="modal-child" onClick={(e) => e.stopPropagation()}>
    <div className='event-modal-container'>

      <form onSubmit={this.handleSubmit}>

      <input
          type="text"
          value={this.state.title}
          placeholder="Event Title"
          onChange={this.update("title")}
        />

        <input
          type="text"
          value={this.state.sport}
          placeholder="Sport"
          onChange={this.update("sport")}
        />

        <textarea
          value={this.state.description}
          placeholder="Event Description"
          onChange={this.update("description")}
        ></textarea>

        <input
          type="datetime-local"
          value={this.state.startDate}
          placeholder="Start Time"
          onChange={this.update("startDate")}
        />

        <input
          type="datetime-local"
          value={this.state.endDate}
          placeholder="End Time"
          onChange={this.update("endDate")}
        />

        <button>Create Event</button>
      </form>

      {/* <ul>{this.renderErrors()}</ul> */}
    </div>
    </div>
    );
  }
}

export default EventForm