interface Person {
    name: String;
}
const Rashomon: Person = {
    name: 'rashomon',
}
export default () => <div>{Rashomon.name}!</div>