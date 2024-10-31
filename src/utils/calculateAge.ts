export function calculateAge(birthdate: Date): number{
    const today = new Date()
    let age = today.getFullYear() - birthdate.getFullYear();

    const month = today.getMonth() - birthdate.getMonth();
    const day = today.getDate() - birthdate.getDate();

    if(month < 0 || (month === 0 && day < 0)) age--

    return age
}