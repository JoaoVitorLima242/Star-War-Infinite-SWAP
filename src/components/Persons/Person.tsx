export type TPerson = {
  name: string
  hairColor: string
  eyeColor: string
}

export function Person({ name, hairColor, eyeColor }: TPerson) {
    return (
      <div>
        {name}
        <ul>
          <li>hair: {hairColor}</li>
          <li>eyes: {eyeColor}</li>
        </ul>
      </div>
    );
}
  