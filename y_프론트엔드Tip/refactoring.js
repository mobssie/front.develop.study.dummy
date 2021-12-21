
// 배열값이 const로 선언이 필요할 때 
const searchStartDate = this.dateRange[0].split('-').join('');
const searchEndDate = this.dateRange[1].split('-').join('');
// REPACTROING CODE : 배열 구조분해
const [searchStartDate, searchEndDate] = this.dateRange.map(item => item.split('-').join(''))