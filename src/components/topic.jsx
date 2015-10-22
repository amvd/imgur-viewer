var React = require("react");
var Actions = require("../actions");
var ImageStore = require("../stores/image-store");
var Reflux = require("reflux");
var ImagePreview = require("./image-preview");

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(ImageStore, 'onChange')
  ],
  getInitialState(){
    return {
      images: []
    }
  },
  componentWillMount(){
    // console.log("Topic is about to render and fetch data");
    Actions.getImages(this.props.params.id)
  },
  componentWillReceiveProps(nextProps){
    Actions.getImages(nextProps.params.id)
  },
  onChange(event, images){
    this.setState({images: images})
  },
  renderImages(){
    return this.state.images.slice(0,20).map(function(image) {
      return <ImagePreview key={image.id} {...image} />
    });
  },
  render(){
    // console.log("Topic is render with ID", this.props.params.id);
    // console.log("I have this many images:", this.state.images.length);
    return <div className="topic">
      <h3>I am a topic with ID {this.props.params.id}.</h3>
      {this.renderImages()}
    </div>
  }
})