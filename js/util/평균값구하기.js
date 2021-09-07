const average = () => {
    return this.result.reduce((a, c) => a + c, 0) / this.result.length || 0;
}