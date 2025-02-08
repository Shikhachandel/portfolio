import movieFinder from '../icons/movie_finder.png';
import paddleGame from '../icons/paddle_game.png';


const ProjectData = [
    {
        "project_url_name": "movie_finder",
        "project_title": "Movie Finder",
        "image": movieFinder,
        "start_date": "27/06/2022",
        "end_date": "16/07/2022",
        "links": {
            "github_url": "https://github.com/Shikhachandel/MovieFinder",
            "web_url": "https://shikhachandelmoviefinder.netlify.app/"
        },
        "tech_stack": ["React.js", "HTML", "CSS", "Node.js"],
        "desc": "Confused, whether to watch a movie or not. Read some reviews and decide for yourself",
        "brief": "Used open source movie database APIs provided by OMDb to fetch the data. Added feature of Debounce Search on every character after 3 initial characters.Added feature to bookmark movie on login."
    },
    {
        "project_url_name": "paddle_game",
        "project_title": "Paddle Game",
        "image": paddleGame,
        "start_date": "27/06/2022",
        "end_date": "16/07/2022",
        "links": {
            "github_url": "https://github.com/ChandelShikha/Game",
            "web_url": "https://shikhachandelpaddlegame.netlify.app/"
        },
        "tech_stack": ["React.js", "HTML", "CSS", "Node.js"],
        "desc": "A small game to entertain customers while the server loads the necessary page.",
        "brief": "It's a continuous game where customers use the arrow keys to move the paddle, bouncing the ball back to hit the paddle. The level has three lives, and progress updates as all the bricks are hit. This game can be integrated to keep customers engaged while the server loads the page"
    }

]

export default ProjectData;