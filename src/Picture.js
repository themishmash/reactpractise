import React from "react";
import styles from "./picture.module.css";
import Navbar from './Navbar';


class Picture extends React.Component {
  state = {
    "dice1": Math.floor( Math.random() * 10 + 1),
    "dice2": Math.floor( Math.random() * 10 + 1),
  }

//Don't need this
  // componentDidMount() {
  //   fetch('https://picsum.photos/seed/picsum/200/300')
  //     .then(res => {
  //       res.json();
  //     })
     
  //     .then(data => {
  //         this.setState({ imgs: data});
  //         console.log(data)
  //     })
  //     .catch(err => {
  //         console.log('Error happened during fetching', err);
  //     });
  // }

  diceRoll1 = () => {
    this.setState(state => ({
      dice1: Math.floor( Math.random() * 100 + 1)

    }))
  }

  diceRoll2 = () => {
    this.setState(state => ({
      dice2: Math.floor( Math.random() * 100 + 1 )
    }))
  }

  total = () => {
    return this.state.dice1 + this.state.dice2;
  }
  
  picture = () => {
    return `https://picsum.photos/seed/${this.total()}/700/500`
  }

  picOne = () => {
    return `https://picsum.photos/seed/${this.state.dice1}/200/200`
  }

  picTwo = () => {
    return `https://picsum.photos/seed/${this.state.dice2}/200/200`
  }

  render () {
    console.log(this.picture())
    return (
      <div>
      <Navbar />
      <div className={styles.all}>
      
          <div className={styles.h1Pic}><h1>Totally Random Pictures</h1></div>
          <div className={styles.container}>
          <div className={styles.pictureContainer}>
      
            <div className={styles.allPictures}>
              <div className={styles.allPictures2}>
                <h2 className={styles.h2Pic}>Random Picture 1</h2>
                <div className={styles.pic}>
                <img src={this.picOne()} alt="" />
                <br/>
                <button onClick={this.diceRoll1}>Randomise</button>
                </div>
            </div>  
              </div>
        
            <div className={styles.allPictures}>
              <div className={styles.allPictures2}>    
                <h2 className={styles.h2Pic}>Random Picture 2</h2>
                <div className={styles.pic}>
                <img src={this.picTwo()} alt=""/>
                <br/>
                <button onClick={this.diceRoll2}>Randomise</button>
                </div>
              </div>
            </div>
          </div>

            <div className={styles.bicPictureContainer}>
              <div className={styles.bigPicture}>
                <div className={styles.bigPicture2}>
                  <h2 className={styles.h2Pic}>Random picture again</h2>
                  <div className={styles.pic}>
                  <img src={this.picture()} alt="" />
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      </div>
    )
  }
}



export default Picture
