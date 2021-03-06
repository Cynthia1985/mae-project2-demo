const React = require('react');
const Default = require('./Default');

class MovieNew extends React.Component {
    render() {
      return (
          <Default>
          <div className="edit-page">
              <h1>New Movie Page</h1>
              <form action="/movies" method="POST">
                Title: <input type="text" name="title" /><br/>
                Genre: <input type="text" name="genre" /><br/>
                Year Released: <input type="number" placeholder="1985" name="yearReleased"/><br/>
                Date Watched: <input type="text" placeholder="November 12, 1985" name="dateWatched"/><br/>
                Viewed at (Theater, or Streaming Platform): <input type="text" placeholder="Netflix" name="platform"/><br/>
                Image: <input type="text" placeholder="Copy and paste image URL here" name="img"/><br/>
                Rating: <input type="number" placeholder="1-5" name="rating"/><br/>
                Review: <input type="text" name="review" id="review"/><br/>
                
            
                  <input type="submit" name="" value="Log Movie"/>
               </form>
          </div>
          </Default>
          
          );
    }
  }

  module.exports = MovieNew;