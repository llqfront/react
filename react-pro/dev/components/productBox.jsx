var React = require('react');
var ProductBox = React.createClass({
  render: function () {
    return (
      <div className="productBox">
        Hello World!{this.props.name}
      </div>
    );
  }
});

module.exports = ProductBox;