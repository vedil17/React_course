import React, { Component } from 'react';
import { Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle } from 'reactstrap';

class DishDetail extends Component {
    
    constructor(props){
        super(props);

    }

    renderDish(dish){
        if (dish != null){
            return(
                <div className="row">  
                    <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(dish.comments)}
                    </div>
                </div>
            );
        }else{
            return(
                <div></div>
            );
        }
    }

    renderComments(comments){
        if (comments!=null) {
            
            const commentaires=comments.map( (commentaire) =>
                <div key={commentaire.id} className="">
                    <li>{commentaire.comment}</li>
                    <br></br>
                    <li>--{commentaire.author},{commentaire.date}</li>
                    <br></br>
                </div>
            );

            return(
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">{commentaires}</ul>
                </div>
            );
        } else {
            return(
                <div></div>
            );
        }
    }

    render(){

        return (
            this.renderDish(this.props.item)
        );
    }
}

export default DishDetail;