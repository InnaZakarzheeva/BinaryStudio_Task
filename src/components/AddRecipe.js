import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Modal from 'react-responsive-modal';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import {addRecipe} from '../redux/actions/actions';
import {connect} from 'react-redux';
import {store} from '../index';
import '../styles/addRecipe.css';
import ListRecipe from './ListRecipe';

export default class AddRecipe extends React.Component{
    state = {
        open: true,
        newItem: '',
        newRecipe: ''
    }
    onCloseModal = () => {
        this.setState({ open: false });
    };
    onOpenModal = () => {
        this.setState({ open: true });
      };
    render(){
        return(
            <div className='addrecipe-wrapper'>
                <Modal open={this.state.open} onClose={this.onCloseModal} center>
                    <div className="input-wrapper">
                        <br/>
                        <span className='title-modal'>Hi, You can add a new recipe here!</span>
                        <br/>
                        <TextField label="Name Recipe" 
                            value={this.state.newItem} 
                            onChange={(event)=> this.setState({
                                newItem: event.target.value
                            })}
                            className='textBlock'/>
                        <br/>
                        <TextareaAutosize rowsMax={20}
                            aria-label='maximum height'
                            placeholder='Maximum 20 rows'
                            value={this.state.newRecipe}
                            onChange={(event) => this.setState({
                                newRecipe: event.target.value
                            })}
                            className='textBlockRecipe'
                            rows={5}/>
                        <br/>
                        <Button variant='contained'
                            color='primary'
                            onClick={() => {
                                if(this.state.newItem){
                                    store.dispatch(addRecipe(this.state.newItem, this.state.newRecipe))
                                    this.setState({
                                        newItem: '',
                                        newRecipe: ''
                                    })
                                }
                                this.onCloseModal()
                            }}
                            className='add-button'>ADD RECIPE
                        </Button>
                    </div>
                </Modal>
                <div className='title-app'>
                    <h2>My recipes</h2>
                </div>
                <ListRecipe/>
                <div className='openButton'>
                    <Button variant='contained'
                        color='primary'
                        onClick={this.onOpenModal}>ADD RECIPE</Button>
                </div>
            </div>
        )
    }
}
AddRecipe = connect()(AddRecipe)