import { useState } from 'react'

export default function LoginPage() {
    // State
    const [inputValue, setInputValue] = useState('')

    // Comportements
    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`Bonjour ${inputValue}`)
        setInputValue('')
    }

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    // Affichage
    return (
        <div>
            <h1>Bienvenue chez nous !</h1>
            <br />F01
            <h2>Connectez-vous</h2>
            <form action="submit" onSubmit={handleSubmit}>
                <input
                    value={inputValue}
                    onChange={handleChange}
                    type="text"
                    placeholder="Entre votre prénom ..."
                    required
                />
                <button>Accéder à votre espace</button>
            </form>
        </div>
    )
}
