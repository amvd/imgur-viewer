var React = require("react");
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
  getInitialState(){
    return {
      hovering: false
    }
  },
  image(){
    var link = 'http://i.imgur.com/' + this.props.id + 'h.jpg';

    return <img src={link} />
  },
  video(){
    return <video preload='auto' autoPlay='autoplay' loop='loop' webkit-playsinline>
      <source src={this.props.mp4} type='video/mp4'></source>
    </video>
  },
  icon(){
    return <span className='glyphicon glyphicon-play'></span>
  },
  inset(){
    return <div className="inset">
      Views: {this.props.views}
      <br />
      Upvotes: {this.props.ups}
    </div>
  },
  handleMouseEnter(){
    this.setState({hovering: true});
  },
  handleMouseLeave(){
    this.setState({hovering: false});
  },
  render(){
    return <Link
      to={"images/" + this.props.id}
      className="image-preview"
      onMouseEnter={this.handleMouseEnter}
      onMouseLeave={this.handleMouseLeave}>
      {this.props.animated && this.state.hovering ? this.video() : this.image()}
      {this.props.animated && !this.state.hovering ? this.icon() : null }
      {this.state.hovering ? this.inset() : null}
    </Link>
  }
})