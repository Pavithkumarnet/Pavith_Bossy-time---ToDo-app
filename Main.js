import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    Icon,
    ScrollView, 
    Button,
    TouchableOpacity 
} from 'react-native';


import Note from './Note';

export default class Main extends React.Component {

constructor(props){
    super(props);
    this.state = {
        noteArray: [],
        noteText: '',
    }
}

clearAll(){
  this.setState({
    noteArray: [],
  })
}

  render() {

    let notes = this.state.noteArray.map((val, key) => {
        return <Note key={key} keyval={key} val={val}
                 deleteMethod={ () => this.deleteNote(key) } 
                
                />
    });

    return (
      <View style={styles.container}>
         

        <ScrollView style={styles.scrollContainer}>
            {notes}
        </ScrollView>

        <View style={styles.header}>
            <TextInput 
            style={styles.textInput} 
            placeholder='Enter Your Notes Here'
            onChangeText={(noteText) => this.setState({noteText})}
            value={this.state.noteText}
            placeholderTextColor='#767676'
            underlineColorAndroid='transparent'
            >
            
           </TextInput>
            
        </View>
 <TouchableOpacity onPress={ this.addNote.bind(this) } style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
       
 <TouchableOpacity onPress={ this.clearAll.bind(this) } style={styles.dButton}>
          <Text style={styles.clearAllText}>D</Text>
        </TouchableOpacity>
      </View>
       
    );
  }

  addNote(){
      if (this.state.noteText) {

          var d = new Date();
          this.state.noteArray.push({
             'note': this.state.noteText,
             
          });
          this.setState({ noteArray: this.state.noteArray })
          this.setState({ noteText: '' });

      }
  }

  deleteNote(key){
      this.state.noteArray.splice(key, 1);
      this.setState({ noteArray: this.state.noteArray })
  }

 
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 
 
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  header: { 
  position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#001BFF',
    padding: 10,
    width: '280px',
    backgroundColor: '#C0FCFF',
  },
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 0,
    backgroundColor: '#00D8FF',
    width: 40,
    height: 40,
    borderRadius: 160,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
   dButton: {
    position: 'absolute',
    zIndex: 11,
    right: 270,
    bottom: 50,
    backgroundColor: '#FF5858',
    width: 40,
    height: 40,
     borderRadius: 160,
    alignItems: 'center',
    justifyContent: 'center',
 
  },

 
  
});
