import "../styles/about.scss"
import Photo from "../components/modules/Photo";
import Textuals from "../components/modules/Textual"

function About() {
    const textes = {
        fiabilite: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
        respect: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
        service: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
        securite: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    }
    return (
		<div className="About">
			<Photo hpImg={true} />
            <Textuals type="Fiabilité" text={textes.fiabilite} />
            <Textuals type="Respect" text={textes.respect} />
            <Textuals type="Service" text={textes.service} />
            <Textuals type="Sécurité" text={textes.securite} />
		</div>
	);
}

export default About
