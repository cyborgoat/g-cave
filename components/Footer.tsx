export default function Footer() {
    const stravaStyle = {
        'display': 'inline-block',
        'background-color': '#fff',
        'padding': '5px 10px 5px 30px',
        'font-size': '11px',
        'background-image': "url('https://badges.strava.com/logo-strava-echelon.png')"
    }
    return (
        <footer className="footer p-10 bg-zinc-300/50 text-base-content">
            <p>G-Cave<br/>Junxiao Guo's personal website.</p>
            <a style={stravaStyle}
               href='https://strava.com/athletes/117518713' target="_clean">
                Follow me on
                <img src='https://badges.strava.com/logo-strava.png' alt='Strava'/>
            </a>
        </footer>
    )
}