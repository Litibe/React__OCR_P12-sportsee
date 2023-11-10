import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
    document.title = "SportSee - Connexion";
    const [inputId, setInputId] = useState("");
    const navigate = useNavigate();

    return (
        <main>
            <h1 className="h1-red-center ">SportSee - Connexion</h1>
            <fieldset>
                <div>
                    <label htmlFor="id">
                        Merci de saisir votre ID de Membre
                    </label>
                    <input
                        type="text"
                        name="id"
                        id="id"
                        placeholder="ID de Membre"
                        onChange={(e) => setInputId(e.target.value)}
                    />
                    <button onClick={() => navigate("/user/" + inputId)}>
                        Valider
                    </button>
                </div>
            </fieldset>
        </main>
    );
}
