var Message = React.createClass({
  displayName: "Message",
  render: function() {
    return (
      <div className="message">
        {this.props.user}: {this.props.text}        
      </div>
    );
  }
});

module.exports = Message;
