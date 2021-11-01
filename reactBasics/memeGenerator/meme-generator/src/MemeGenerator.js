import React, {Component} from "react"

class MemeGenerator extends Component {
    constructor(){
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            allMemesImages: []
        }
        this.textChangeHandler = this.textChangeHandler.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
            this.setState({
                allMemesImages: memes
            })
        })
    }

    textChangeHandler(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemesImages.length)
        const randMemeImg = this.state.allMemesImages[randNum].url
        this.setState({
            randomImage: randMemeImg
        })
    }

    render() {
        return (
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input type="text" name="topText" placeholder="Top Text" value={this.state.topText} onChange={this.textChangeHandler}/>
                    <input type="text" name="bottomText" placeholder="Bottom Text" value={this.state.bottomText} onChange={this.textChangeHandler}/>
                    <button>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImage} alt="random meme" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator