import { Link } from 'react-router-dom';

export default function Error404() {
    document.title = 'Oops! - Erreur 404 !';
    return (
        <div className="page_404">
            <h1>404</h1>
            <p>Oups ! La page que vous avez demandez n'existe pas.</p>
            <Link className="page_404-link" to="/">
                Retouner à la page d'accueil
            </Link>
        </div>
    );
}
