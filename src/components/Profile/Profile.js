import AgeDisplay from "../AgeDisplay/AgeDisplay";

function Profile() {
  return (
    <div>
      <p>
        <img
          src="https://avatars.githubusercontent.com/u/46681513?v=4"
          className="logo"
          alt="Marius THIESSET"
          title="Marius THIESSET"
        />
      </p>

      <h1>Marius THIESSET</h1>
      <h2>Développeur Web</h2>
      <h3>Mon profil</h3>
      <ul>
        <AgeDisplay birthDate="2000-02-10" />
        <li>Développeur autodidacte et passionné depuis l'âge de 16 ans.</li>
        <li>Spécialisé en React / Typescript / NodeJS / Symfony / PHP.</li>
        <li>
          Passionné par l'innovation technologique et adepte des pratiques de
          développement agiles.
        </li>
      </ul>
    </div>
  );
}

export default Profile;
