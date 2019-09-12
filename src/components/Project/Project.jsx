import React from 'react';

export default () => {
    return (
        <div className="projects">
            <div className="project">
            <a href='https://ginnygu.github.io/whacktheinstructor/'><img className="project-image" src="https://raw.githubusercontent.com/ginnygu/whacktheinstructor/master/images/wireframe_project4.png" alt="Nothing" /></a>
                <p className='project-info'> A fun game created so students can release any frustration during project week. They will be able to collect points. Click on the image to play the game!
                    <br></br>
                <a href="https://github.com/ginnygu/whacktheinstructor">Github</a></p>
            </div>
            <div className="project">
                <a href='https://ginnygu.github.io/https://boiling-mesa-40635.herokuapp.com/'><img className="project-image" src="https://raw.githubusercontent.com/ginnygu/MyFaveRestaurant/master/wireframe%20and%20ERD/Screen%20Shot%202018-09-13%20at%203.05.41%20PM.png" alt="Nothing" /></a>
                <p className='project-info'>An app designed for foodies who likes to share with other foodies, their favorite restaurants! You can add, delete and edit each restaurant. With a self build backend, all data are stored in Heroku's add-on PostgreSQL. Click on the image to try it out!
                    <br></br>
                    <a href="www.github.com">Github</a></p>
            </div>
            <div className="project">
                <a href='https://earful.surge.sh/'><img className="project-image" src="https://raw.githubusercontent.com/ginnygu/Earful-CRUD/master/ERD%20and%20Wireframes/Screen%20Shot%202018-09-10%20at%2012.36.27%20PM.png" alt="Nothing" /></a>
                <p className='project-info'>An app designed for foodies who likes to share with other foodies, their favorite restaurants! You can add, delete and edit each restaurant. With a self build backend, all data are stored in Heroku's add-on PostgreSQL. Click on the image to try it out!
                An app build for Indie artists who wishes to share their album and music! Artists, albums and songs can be created, edited and deleted. Click on image to try it out!
                    <br></br>
                    <a href="www.github.com">Github</a></p>
            </div>
        </div>
    )
}