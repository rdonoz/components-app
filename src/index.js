import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import { faker } from '@faker-js/faker';
import ApprovalCard from './ApprovalCard';
import './style/App.css'

const App = () =>{
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="EG" 
                    timePosted="Today at 3:45 AM" 
                    word="wow"
                    avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="John" 
                    timePosted="Today at 4:00 AM" 
                    word="nice"
                    avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Les" 
                    timePosted="Today at 4:00 AM" 
                    word="beautiful"
                    avatar={faker.image.avatar()}/>
            </ApprovalCard>        
            <ApprovalCard>
                <CommentDetail 
                    author="CJ" 
                    timePosted="Today at 4:00 AM" 
                    word="great"
                    avatar={faker.image.avatar()}/>
            </ApprovalCard> 
            <ApprovalCard>
                <CommentDetail 
                    author="Roy" 
                    timePosted="Today at 4:01 AM" 
                    word="good"
                    avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>   
                <CommentDetail 
                    author="Shaira" 
                    timePosted="Today at 4:45 AM" 
                    word="yuck"
                    avatar={faker.image.avatar()}/>
            </ApprovalCard> 
            <ApprovalCard>
                <CommentDetail 
                    author="aNGELYN" 
                    timePosted="Today at 4:45 AM" 
                    word="basher"
                    avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Elaine" 
                    timePosted="Today at 3:45 AM" 
                    word="tf?!"
                    avatar={faker.image.avatar()}/>
            </ApprovalCard>
        </div>  
    );
}
ReactDOM.render(<App />, document.querySelector('#root') );