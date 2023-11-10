import { Link } from "react-router-dom";

export default function Error500() {
    document.title = "Oops! - Erreur 500 !";
    return (
        <main className="page_404">
            <h1>500</h1>
            <p>Oups ! Le serveur est en panne, réactualiser la page.</p>
            <Link className="page_404-link" to="/">
                Retouner à la page d'accueil
            </Link>
        </main>
    );
}
