const React = require('react');

class AltairEmbed extends React.Component {
  render() {
    const { hasError, idyll, updateProps, ...props } = this.props;
    return (
      <iframe 
        src={this.props.link}
        width={this.props.width} 
        height={this.props.height}
        framemargin="0"
        scrolling="no"
        style={{
            border: "0",
            margin: "0",
            padding: "0",
            position: "absolute",
            left: "0",
        }}
      />
    );
  }
}

module.exports = AltairEmbed;