import React from 'react';
import {connect} from 'react-redux';
import ItemRecipe from './ItemRecipe';
import ItemEditRecipe from './ItemEditRecipe';
import '../styles/listRecipe.css';

export default class ListRecipe extends React.Component{
    state = {
        editIndex: ''
    }

    changeIndex = (index) => {
        this.setState({
            editIndex: index
        })
        console.log('Done')
    }

    handleCreateList = (recipe, index) => {
        if(this.state.editIndex === index) {
            return  <ItemEditRecipe recipe={recipe} changeIndex={this.changeIndex} key={index}/>  
        } else {
            return <ItemRecipe recipe={recipe} index={index} changeIndex={this.changeIndex} key={index}/>
        }
    }
    render() {
        return(
            <div className='recipe-wrapper'>
                {this.props.recipe.sort((a, b)=>{
                    return new Date(b.date) - new Date(a.date);
                }).map(this.handleCreateList)}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        recipe: state
    }
}

ListRecipe = connect(mapStateToProps)(ListRecipe)