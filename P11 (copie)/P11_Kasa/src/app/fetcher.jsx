import logements from "../assets/data/logements.json";

const files = {
    get() {
        // fake fetch
        return logements
    },
}

export default files