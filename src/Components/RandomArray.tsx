const RandomArrayGenerator = (length = 10) => {
    return Array.from({length}, () => Math.floor(Math.random() * 100) + 1)
}
export default RandomArrayGenerator