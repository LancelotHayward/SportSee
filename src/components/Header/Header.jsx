import "./Header.scss"

function Header() {
	return (
		<header>
			<img src="logo.png" alt="SportSee" />
			<nav>
				<a href="/">Accueil</a>
				<a href="/">Profil</a>
				<a href="/">Réglage</a>
				<a href="/">Communauté</a>
			</nav>
		</header>
	)
}

export default Header
