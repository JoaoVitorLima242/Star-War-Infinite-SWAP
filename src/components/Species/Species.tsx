export type TSpecies = {
    name: string
    language: string
    average_lifespan: string
}


export function Species({ name, language, average_lifespan }: TSpecies) {
    return (
      <li>
        {name}
        <ul>
          <li>language: {language}</li>
          <li>average lifespan: {average_lifespan}</li>
        </ul>
      </li>
    );
}
  