import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import {editRecipe, deleteRecipe} from '../redux/actions/actions';
import {store} from '../index';
import moment from 'moment/moment';
import '../styles/itemRecipe.css';
import saveImg from '../image/save.png';
import deleteImg from '../image/delete.png'

export default class ItemEditRecipe extends React.Component{
    state = {
        editItem: ''
    }
    render(){
        const {recipe, changeIndex} = this.props;
        return(
            <div key={recipe.id} className='item-wrapper'>
                        <h5 className='recipe-name'>{recipe.name}</h5>
                        <TextareaAutosize rowsMax={20}
                            aria-label='maximum height'
                            placeholder='Edit recipe (max 20 rows)'
                            value={recipe.textRecipe} 
                            rows={2}
                            style={{border: 'none', padding: '5px'}}
                            onChange={(event) => {this.setState({
                                editItem: event.target.value
                             })
                            recipe.textRecipe = event.target.value}}
                        />
                        <div className='info-wrapper'>
                            <div className='img-wrapper'>
                                <img src={saveImg} alt='save' onClick={() => {
                                    changeIndex(-1);
                                    store.dispatch(editRecipe(this.state.editItem))
                                    }}
                                    className="image"
                                />
                                <img src={deleteImg} 
                                    alt='delete' 
                                    onClick={() => store.dispatch(deleteRecipe(recipe.id))}
                                    className="image"/>
                            </div>
                            <span className='time-span'>{moment(recipe.date).format('MMMM Do YYYY, h:mm:ss a')}</span>
                        </div>
                    </div> 
        )
    }
}