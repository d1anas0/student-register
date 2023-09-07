export const formatToDDMMYYYY = (originalDate) => {
    const [year, month, day] = originalDate.split('-');
    return `${day}/${month}/${year}`;
  };