import React from 'react';
import moment from 'moment/moment';
import {store} from '../index';
import {deleteRecipe} from '../redux/actions/actions';
import '../styles/itemRecipe.css';
import editImg from '../image/edit.png';
import deleteImg from '../image/delete.png'

export default class ItemRecipe extends React.Component{
    state = {
        openBlock: true
    }
    render(){
        const {recipe, index, changeIndex} = this.props;
        return(
            <div key={recipe.id} className='item-wrapper'>
                <div onClick={() => this.setState({openBlock: !this.state.openBlock})} className='recipe-text-block'>
                    <h5 className='recipe-name'>{recipe.name}</h5>
                    {this.state.openBlock ? (
                        <span className='hidden-span'>{recipe.textRecipe}</span>
                    ) : (
                        <span className='show-span'>{recipe.textRecipe}</span>
                    )}
                </div>
                <div className='info-wrapper'>
                    <div className='img-wrapper'>
                        <img src={editImg} 
                            alt='edit' 
                            onClick={() => 
                                changeIndex(index)
                            }
                            className="image"/>
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