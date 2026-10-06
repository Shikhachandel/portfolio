import movieFinder from '../icons/movie_finder.png';
import paddleGame from '../icons/paddle_game.png';


const ProjectData = [
    {
        "project_url_name": "legal_information_retrieval",
        "project_title": "Legal Information Retrieval Pipeline",
        "start_date": "01/04/2026",
        "end_date": "01/04/2026",
        "links": {
            "github_url": "https://github.com/Shikhachandel/LLM-Agent-Legal-Retrieval",
            "web_url": ""
        },
        "tech_stack": ["LLMs", "Hybrid Retrieval", "Fine-Tuning", "Multilingual NLP"],
        "desc": "Hybrid sparse and dense retrieval with LLM fine-tuning for multilingual legal information retrieval.",
        "brief": "Compared a hybrid sparse and dense retrieval pipeline with different LLM fine-tuning approaches over 269K+ legal records, evaluating classification performance using macro-F1 for a multilingual legal retrieval competition.",
        "details": [
            "Compared a hybrid sparse and dense retrieval pipeline with different LLM fine-tuning approaches over 269K+ legal records.",
            "Evaluated classification performance using macro-F1 for a multilingual legal retrieval competition."
        ]
    },
    {
        "project_url_name": "ai_educational_assistant",
        "project_title": "Study Budy AI",
        "start_date": "01/05/2025",
        "end_date": "01/05/2025",
        "links": {
            "github_url": "https://github.com/Shikhachandel/StudyBudy-AI",
            "web_url": "https://my-ai-study-buddy.streamlit.app/"
        },
        "tech_stack": ["LLMs", "RAG", "Embeddings", "Streamlit"],
        "desc": "An LLM learning assistant for transcript summarization, quizzes, and contextual Q&A.",
        "brief": "Built and deployed an LLM learning assistant using embedding-based retrieval and query refinement, delivering an end-to-end workflow for transcript summarization, quizzes, and contextual Q&A.",
        "details": [
            "Built and deployed an LLM learning assistant using embedding-based retrieval and query refinement.",
            "Delivered an end-to-end workflow for transcript summarization, quizzes, and contextual Q&A."
        ]
    },
    {
        "project_url_name": "movie_finder",
        "project_title": "Movie Finder",
        "image": movieFinder,
        "start_date": "06/01/2024",
        "end_date": "23/04/2024",
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
